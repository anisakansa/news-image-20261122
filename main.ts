// news-image-20261122 — entry program (Node 22, standard library only, no network).
//
// The entry image is entry.png beside this file: a 1024x1024 newspaper front
// page, "THE WORLD IN ONE DAY — Sunday 22 November 2026", with 35 stories
// that happened (or were first reported) on Sunday 22 November 2026: a number
// strip (6 figures), a region bar (Europe 8 · Asia 12 · Middle East 4 ·
// Africa 2 · Americas 1 · Oceania 5 · Global 3 = 35), a top 3 with original
// SVG illustrations, cards 4-13, a world map with 34 numbered pins (story 7,
// Bitcoin, is a market and has no location), an index (14-35), a DATE CHECK
// box naming the older news deliberately left out, and a source + verification
// badge (CONFIRMED / OFFICIAL / REPORTED / CLAIM) beside every story.
//
// The program validates the PNG before copying: 8-byte PNG signature, IHDR
// width and height must be exactly 1024x1024, and the file must be at most
// 1 MiB (the competition cap). It then copies entry.png byte-for-byte to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when run locally) and prints the
// dimensions, size and sha256 of what was copied:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');

const buf = readFileSync(src);

// PNG signature: 89 50 4E 47 0D 0A 1A 0A
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error('entry.png is not a PNG file');
}
// IHDR chunk: width at offset 16, height at offset 20 (big-endian uint32).
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
const size = statSync(src).size;
if (size > 1024 * 1024) {
  throw new Error(`entry.png exceeds the 1 MiB cap: ${size} bytes`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const sha256 = createHash('sha256').update(buf).digest('hex');
console.log(`entry.png ${width}x${height}, ${size} bytes, sha256 ${sha256}`);
