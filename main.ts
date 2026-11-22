// news-image-20261122 — round 2 entry program ("One Sunday, Everywhere").
// Node 22, standard library only. Copies the repository's entry.png to the
// output directory after validating it as a whole, gate-conformant PNG:
//   * 8-byte PNG signature
//   * IHDR chunk declaring exactly 1024 x 1024 pixels
//   * every chunk's length stays inside the file and its CRC-32 matches
//   * total size at most 1 MiB (1_048_576 bytes)
// The copy is byte-for-byte, so repeated runs write identical bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

// CRC-32 (IEEE 802.3) table, built once at startup from the polynomial.
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let crc = 0xffffffff;
  for (const byte of buf) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function fail(message) {
  console.error(`entry check failed: ${message}`);
  process.exit(1);
}

// Walk every chunk: [length:4][type:4][data:length][crc:4]. Returns the
// IHDR width/height and fails on any structural problem.
function inspectPng(bytes) {
  if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
    fail("missing PNG signature");
  }
  let offset = 8;
  let seenIhdr = false;
  let seenIend = false;
  let width = 0;
  let height = 0;
  while (offset + 8 <= bytes.length) {
    const length = bytes.readUInt32BE(offset);
    const type = bytes.toString("latin1", offset + 4, offset + 8);
    const dataStart = offset + 8;
    const dataEnd = dataStart + length;
    if (dataEnd + 4 > bytes.length) fail(`chunk ${type} overruns the file`);
    const storedCrc = bytes.readUInt32BE(dataEnd);
    const actualCrc = crc32(bytes.subarray(offset + 4, dataEnd));
    if (storedCrc !== actualCrc) fail(`chunk ${type} has a bad CRC`);
    if (type === "IHDR") {
      if (seenIhdr) fail("duplicate IHDR chunk");
      if (length !== 13) fail("IHDR chunk has the wrong length");
      seenIhdr = true;
      width = bytes.readUInt32BE(dataStart);
      height = bytes.readUInt32BE(dataStart + 4);
    }
    if (type === "IEND") {
      seenIend = true;
      if (dataEnd + 4 !== bytes.length) fail("trailing bytes after IEND");
    }
    offset = dataEnd + 4;
  }
  if (!seenIhdr) fail("no IHDR chunk");
  if (!seenIend) fail("no IEND chunk");
  if (offset !== bytes.length) fail("leftover bytes after the last chunk");
  return { width, height };
}

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = resolve(here, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const targetPath = join(outDir, "entry.png");

let bytes;
try {
  bytes = readFileSync(sourcePath);
} catch {
  fail(`cannot read ${sourcePath}`);
}
if (bytes.length > MAX_BYTES) {
  fail(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
const { width, height } = inspectPng(bytes);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  fail(`entry.png is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
const copied = statSync(targetPath).size;
if (copied !== bytes.length) fail("copy size mismatch");
// Re-read the copy and confirm its bytes (and sha256) match the source.
const copiedBytes = readFileSync(targetPath);
const digest = createHash("sha256").update(bytes).digest("hex");
const copiedDigest = createHash("sha256").update(copiedBytes).digest("hex");
if (copiedDigest !== digest) fail("copied file sha256 mismatch");
console.log(`entry.png ${width}x${height}, ${bytes.length} bytes, sha256 ${digest} -> ${targetPath}`);
