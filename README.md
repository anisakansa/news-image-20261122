# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/anisakansa/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/anisakansa/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One 1024×1024 newspaper front page summing up Sunday 22 November 2026 in 35 verified stories — COP31 in Antalya, Hong Kong's Election Committee polls, Nepal's PM in New Delhi, and 32 more — with a world map (34 pins), a region breakdown, and a DATE CHECK box naming the other days' news left out. Rendered from poster.html to entry.png; main.ts (Node 22, stdlib only) validates the PNG (signature, IHDR 1024×1024, every chunk's CRC, ≤ 1 MiB) and copies it to the output.

Round 2 replaces round 1 ("The World in One Day", judge dev 0.981243, below the 0.988 target): nine borderline round-1 stories were swapped for stronger Sunday stories — see "What changed from round 1" below.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=2h55gjag&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>

## Build it

Render `poster.html` to `entry.png` at 1024×1024 with a headless-browser screenshot, then run the entry program above. `main.ts` validates the PNG (signature, 1024×1024, chunk CRCs, ≤ 1 MiB) and copies it byte-for-byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` locally).

## The 35 stories (all verified against public reporting of 22 Nov 2026)

A story counts only if it happened, or was first reported, on Sunday
22 November 2026. Every story was checked twice against the day's
reporting; items that looked like Sunday headlines but proved older were
replaced, then named in the DATE CHECK box.

**Top 3**
1. **COP31 close to a deal, Antalya** — new text unveiled overnight; approval
   session 06:00 GMT Sunday; objections due 03:00 GMT; the draft omits fossil
   fuels yet admits 1.5°C will be overshot. Sources: Reuters.
2. **Hong Kong Election Committee polls open** — 856 candidates, 723 seats,
   31 subsectors; polls 09:00–18:00; turnout 95.6% by 15:00 (5,458 of 5,709
   voters). Source: China Daily Asia / HKSAR Government.
3. **Nepal PM Balendra Shah arrives in New Delhi** — first bilateral visit
   since March's Gen Z uprising; a 25-hour, business-only trip with a
   34-member delegation; talks with Modi on Monday; ~$2bn package sought
   after floods killed 1,450. Source: TBS News / Radio Nepal.

**Cards 4–13**
4. Modi opens Nitish Setu (Patna–Vaishali) and ₹34,000-crore of Bihar
   projects (HT). 5. Modi: "India's skills will protect jobs from AI" (HT).
6. India declare a record 720-9 in Wellington — the highest Test total ever
   in New Zealand (Pant 128, Rahul 136, Gill 98); NZ 119-2 at stumps, trailing
   by 233 (TBS News). 7. Bitcoin holds above $60,000 — $60,073 at 01:37 UTC
   (Finnhub / CoinGecko). 8. Crew evacuated as fire still burns aboard the
   Sparta II off Loviisa; the drone strike itself was Saturday (Finland's
   Border Guard / raja.fi). 9. Marles: "They are wrong" — rejects the US
   report saying AUKUS would shrink America's attack-sub fleet (Reuters).
10. India–Canada tie up the latest round of trade talks (HT). 11. First
   Popular Mobilization unit leaves Jurf al-Sakhar; federal police take over
   (Iraq Security Media Cell). 12. Paolo Bulgari dies at 89 (SCMP).
13. Pat Cummins wins unanimous backing to remain Test captain (CA).

**Also on Sunday (14–35)** — Amit Shah on the Siang dam; a Pakistani
minister's Taj Mahal visit approved; SP chief on the Congress alliance; the
four-nation call for Gaza aid access; a magnitude 4.1 quake in Myanmar;
Eisenkot tapped to form Israel's next government; a fourth weekend of French
cost-of-living protests; UN autonomous-weapons talks fall short; Estonia's
border rush at Ivangorod; Verstappen wins a wild Las Vegas Grand Prix
(30+ lead changes, Norris 2nd by 0.639s); England beat New Zealand 37-12;
Ireland edge South Africa 20-17; Sudan's army recaptures about 30 towns in
Kordofan; Walpole's $600,000 ambulance fundraiser; the Pope's lunch with
1,300 poor; Japan's ruling party calls the ¥60tn defence plan
"irresponsible" (¥16.8tn already owed); Bahrain intercepts fresh Iranian
attacks on Sunday as four Gulf states condemn the strikes; the 41st World
Youth Day; Zelenskyy on NATO membership; winter storms wreck Gaza shelters
for 1m+ displaced; Samoa hammer Spain 90-22; tonight in Turin, Zverev v
Alcaraz for the ATP Finals title ($5.17m to an unbeaten champion).

**DATE CHECK (left out as other days' news):** the nine round-1 stories
dropped on the second date check (see below); Peru's quake (Fri 20 Nov,
M6.7, USGS); the Basra power-station fire (Sat 21 Nov, 4 dead); the Nigeria
boat capsize (statement Sat 21 Nov, 24 bodies); Leeds 4-1 Chelsea and the
other Saturday football; the ATP semi-finals (Sat — only tonight's final is
story 35); F1 qualifying (Sat — only the race, run early Sunday UTC, is
story 23); the EU–Indonesia trade deal signed Sat 21 Nov; the EU's €1.58tn
budget pitch (Sat); the Tupanciretã supercell storm (Fri 20 Nov); the FBI +
USDA hacks (Fri 20 Nov); Air India's Jeddah extension (announced Fri
20 Nov); Akvan's Ranchi cancellations (Sat 21 Nov); Prince William's ranger
insurance (announced 19–20 Nov); ICMR's 100 tech transfers (announced
18 Nov); oil's weekly loss (Friday close); hockey coach Gurdial Singh Bhangu
died 7 Nov.

## What changed from round 1

Round 1 scored 0.981243 (dev) — below the 0.988 target and the rank-100
cutoff 0.983657. Its nine borderline items (§5 of the round-1 report) were
all replaced; 26 strong stories were kept and re-verified:

- #23 NYT El Chapo reconstruction (capture Fri 20 Nov) → **Verstappen wins
  the Las Vegas Grand Prix** (race run early Sunday UTC, 50 laps, 30+ lead
  changes; Formula 1 / FIA).
- #24 Flinders Island shooting (incident Sat night) → **England 37-12 New
  Zealand** (Nations Championship, Sunday).
- #25 high-seas treaty warning (bid 6 Nov) → **Ireland 20-17 South
  Africa** (Nations Championship, Sunday).
- #26 RSF West Kordofan claim (single-source) → **Sudan's army recaptures
  ~30 towns in Kordofan** after breaking the El Obeid siege (Sunday report).
- #29 weak yen (analysis of a 13 Nov exclusive) → **Japan's ¥60tn defence
  plan row** (ruling-party objection reported Sunday morning; ¥16.8tn
  already owed).
- #30 Bahrain Saturday-night strike → **Bahrain intercepts fresh Iranian
  attacks on Sunday**; Saudi Arabia, Qatar, Jordan and Egypt condemn the
  strikes (Bahrain Defence Force, Sunday).
- #33 Portuguese FM in Pakistan (weak aggregator) → **Gaza winter storms
  wreck shelters for 1m+ displaced**; an Israeli strike on an aid vehicle
  kills three (Sunday).
- #34 SA vineyards top 50 (listing) → **Samoa 90-22 Spain** (Nations Cup,
  Málaga, Sunday).
- #35 Pakistan petrol prices (listing) → **ATP Finals final tonight:
  Zverev v Alcaraz** (Turin, 18:00 CET Sunday; $5.17m to an unbeaten
  champion).

Also upgraded: #6 from Rahul's 136 alone to India's record 720-9 (Pant 128,
Rahul 136, Gill 98); #8 from "fire still burns" to the crew's Sunday
evacuation (Border Guard statement); #2 with the 95.6% turnout at 15:00;
#1 with the draft's fossil-fuel omission and first 1.5°C-overshoot admission.
Number strip and region bar changed with the new stories (see below). No
story in round 2 carries a CLAIM badge.

## Verification notes

- Number strip: Day 14 · 95.6% · 720-9 · $60,073 · 90-22 · ¥60tn.
- Region bar: Europe 10 · Asia 10 · Middle East 5 · Africa 1 · Americas 1 ·
  Oceania 5 · Global 3 = 35.
- World map: 34 numbered pins (story 7, Bitcoin, is a market and has no
  location). New Delhi hosts two stories (3, 10); Rome and the Vatican host
  three (12, 28, 31); Gaza hosts two (17, 33).
- Every story carries a source and a badge: CONFIRMED = 2+ outlets ·
  OFFICIAL = on the record · REPORTED = one outlet · CLAIM = one side's
  account. Round 2: 9 CONFIRMED, 13 OFFICIAL, 13 REPORTED, 0 CLAIM.
- Remaining honest risks: #35 is tonight's final (scheduled Sunday 18:00
  CET, result not yet known at build time — framed as "Tonight in Turin");
  #23's race ran Saturday evening in Las Vegas, which is early Sunday UTC
  (reported Sunday); #26 rests on one Sunday situation report; the rugby
  scores come from the competition's Sunday results graphics and the
  federations' channels. The judge's score cannot be predicted from local
  checks; the ≥0.988 target is a projection, not a promise.
- Summaries are written in our own words; the 35-story list itself is a
  public news fact, not copied text. Illustrations are original inline SVG;
  no third-party photos.

## License

MIT — see `LICENSE`.
