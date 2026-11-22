# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/anisakansa/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/anisakansa/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One 1024×1024 newspaper front page summing up Sunday 22 November 2026 in 35 verified stories — COP31 in Antalya, Hong Kong's Election Committee polls, Nepal's PM in New Delhi, and 32 more — with a world map (34 pins), a region breakdown, and a DATE CHECK box naming the other days' news left out. Rendered from poster.html to entry.png; main.ts (Node 22, stdlib only) validates the PNG (1024×1024, ≤ 1 MiB) and copies it to the output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=2h55gjag&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>

## Build it

Render `poster.html` to `entry.png` at 1024×1024 with a headless-browser screenshot, then run the entry program above. `main.ts` validates the PNG (signature, 1024×1024, ≤ 1 MiB) and copies it byte-for-byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` locally).

## The 35 stories (all verified against public reporting of 22 Nov 2026)

A story counts only if it happened, or was first reported, on Sunday
22 November 2026. Six items that looked like Sunday headlines in a news
assembly turned out to be older on a second check — the Air India Jeddah
extension (announced Fri 20 Nov), Akvan's Ranchi cancellations (Sat 21 Nov),
Prince William's ranger insurance (announced 19–20 Nov), ICMR's 100 tech
transfers (announced 18 Nov), hockey coach Gurdial Singh Bhangu (died
7 Nov) and the snooker "opening group matches" (17 Nov) — and were replaced,
then named in the DATE CHECK box. The same second check caught the crude-oil
"−3%" figure (Friday's weekly close).

**Top 3**
1. **COP31 close to a deal, Antalya** — new text unveiled overnight; approval
   session 06:00 GMT Sunday; objections due 03:00 GMT. Sources: Reuters.
2. **Hong Kong Election Committee polls open** — 856 candidates, 723 seats,
   31 subsectors, 5,700 voters; polls 09:00–18:00. Source: China Daily Asia.
3. **Nepal PM Balendra Shah arrives in New Delhi** — first bilateral visit
   since March's Gen Z uprising; talks with Modi on Monday; ~$2bn package
   sought after floods killed 1,450. Source: TBS News.

**Cards 4–13**
4. Modi opens Nitish Setu (Patna–Vaishali) and ₹34,000-crore of Bihar
   projects (HT). 5. Modi: "India's skills will protect jobs from AI" (HT).
6. KL Rahul 136 in Wellington — first India opener with hundreds in every
   SENA nation (HT). 7. Bitcoin holds above $60,000 — $60,073 at 01:37 UTC
   (Finnhub / CoinGecko). 8. Fire still burns aboard the Sparta II off
   Loviisa; all 16 crew safe; the drone strike itself was Saturday (raja.fi).
9. Marles: "They are wrong" — rejects the US report saying AUKUS would
   shrink America's attack-sub fleet (Reuters). 10. India–Canada tie up the
   latest round of trade talks (HT). 11. First Popular Mobilization unit
   leaves Jurf al-Sakhar; federal police take over (Iraq Security Media
   Cell). 12. Paolo Bulgari dies at 89 (SCMP). 13. Pat Cummins wins
   unanimous backing to remain Test captain (CA).

**Also on Sunday (14–35)** — Amit Shah on the Siang dam; a Pakistani
minister's Taj Mahal visit approved; SP chief on the Congress alliance; the
four-nation call for Gaza aid access; a magnitude 4.1 quake in Myanmar;
Eisenkot tapped to form Israel's next government; a fourth weekend of French
cost-of-living protests; UN autonomous-weapons talks fall short; Estonia's
border rush at Ivangorod; the NYT's El Chapo reconstruction; Flinders Island
shooting; the high-seas treaty warning; the RSF accusation in West Kordofan;
Walpole's $600,000 ambulance fundraiser; the Pope's lunch with 1,300 poor;
Japan's weak-yen defence bind; Bahrain's Saturday-night strike confirmation;
the 41st World Youth Day; Zelenskyy on NATO membership; Portugal's FM in
Pakistan; South Africa's top-50 vineyards; Pakistan's petrol price cut.

**DATE CHECK (left out as other days' news):** Peru's quake (Sat 21 Nov,
M6.7, USGS); "El Chapo Isidro" captured Fri 20 Nov; the EU–Indonesia trade
deal signed Sat 21 Nov; the Sparta II strike (Sat morning); Iran's
Saturday-night strikes on Bahrain, US bases and tankers off Oman; Trump's
"permanent" Iran deal (Sat interview); the EU's €1.58tn budget pitch (Sat);
France 45–17 Argentina and the other Saturday rugby; the Tupanciretã
supercell storm (Fri 20 Nov); the FBI + USDA hacks (Fri 20 Nov); the items
above that failed the second date check.

## Verification notes

- Number strip: Day 14 · 723 · 856 · $60,073 · 136 · $2bn.
- Region bar: Europe 8 · Asia 12 · Middle East 4 · Africa 2 · Americas 1 ·
  Oceania 5 · Global 3 = 35.
- World map: 34 numbered pins (story 7, Bitcoin, is a market and has no
  location). New Delhi hosts two stories (3, 10); Rome and the Vatican host
  three (12, 28, 31).
- Every story carries a source and a badge: CONFIRMED = 2+ outlets ·
  OFFICIAL = on the record · REPORTED = one outlet · CLAIM = one side's
  account.
- Borderline items, flagged honestly: #24 Flinders Island (incident
  Saturday night, police confirmation Sunday); #29 weak yen (a Sunday
  analysis of a 13 Nov exclusive); #30 Bahrain (attack Saturday night, CNA
  report Sunday); #23 NYT El Chapo reconstruction (published Sunday, capture
  Friday); #26 Sudan RSF (single relief-group source, CLAIM badge); #25
  high-seas treaty (Sunday symposium on a 6 Nov bid); #33 Portuguese FM
  (weak aggregator source, dated 22 Nov); #34 vineyards and #35 petrol
  (aggregator/newswire listings dated 22 Nov).
- Summaries are written in our own words; the 35-story list itself is a
  public news fact, not copied text. Illustrations are original inline SVG;
  no third-party photos.

## License

MIT — see `LICENSE`.
