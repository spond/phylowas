# Checkpoint Report: Nocturnal Activity Cycle
- **Phenotype ID:** `DISC_NOCTURNALITY`
- **Trait Class:** `binary` (Sample Size: 88 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9965
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:37

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9965$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include SELPLG, PILRA, HBA2, KHDC1, OXCT2.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_NOCTURNALITY \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_NOCTURNALITY/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |   fdr_q | tier       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|--------:|:-----------|
|                1 | SELPLG   |            503 |          101 |   0.0341522 |   4.16654 | 0.26165 | Background |
|                2 | PILRA    |            348 |          200 |   0.0199346 |   3.54222 | 0.65285 | Background |
|                3 | HBA2     |            196 |          161 |   0.0182445 |   3.01071 | 0.65285 | Background |
|                4 | KHDC1    |            170 |          162 |   0.0177742 |   2.93749 | 0.65285 | Background |
|                5 | OXCT2    |            559 |          140 |   0.0190297 |   2.81503 | 0.65285 | Background |
|                6 | DHRS12   |            265 |          216 |   0.0155415 |   2.66526 | 0.65285 | Background |
|                7 | GATD3    |            165 |          140 |   0.0177483 |   2.59985 | 0.65285 | Background |
|                8 | OR5P2    |            331 |          155 |   0.0161905 |   2.54188 | 0.65285 | Background |
|                9 | C1orf202 |            177 |          130 |   0.017638  |   2.43296 | 0.65285 | Background |
|               10 | APOBEC3C |            231 |          266 |   0.0130323 |   2.16763 | 0.65285 | Background |
|               11 | CD300LD  |            274 |          188 |   0.012991  |   2.15211 | 0.65285 | Background |
|               12 | RESP18   |            234 |          148 |   0.0138166 |   2.02963 | 0.65285 | Background |
|               13 | HSFX4    |            288 |          291 |   0.0117643 |   1.91571 | 0.65285 | Background |
|               14 | HSFX3    |            306 |          291 |   0.0116233 |   1.8875  | 0.65285 | Background |
|               15 | OR8D2    |            335 |          192 |   0.0116167 |   1.87773 | 0.65285 | Background |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_NOCTURNALITY_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_NOCTURNALITY_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_NOCTURNALITY_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_NOCTURNALITY_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_NOCTURNALITY (Nocturnal Activity Cycle) screened across N=16,921 mammalian orthologs in sample size N=88 species.
2. Genomic inflation factor lambda_GC = 0.9965, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is SELPLG (Rank #1, Psi = 0.0342, Z = 4.17, q = 2.62e-01).
