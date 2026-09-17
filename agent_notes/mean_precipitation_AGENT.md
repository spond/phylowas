# Checkpoint Report: Environmental Precipitation (mm)
- **Phenotype ID:** `CONT_MEANPRECIPITATION_MM`
- **Trait Class:** `continuous` (Sample Size: 519 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0694
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:27

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0694$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include FGFBP1, FMO2, REG4, HHLA2, FAM240A.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_MEANPRECIPITATION_MM \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_MEANPRECIPITATION_MM/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |    fdr_q | tier       |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|---------:|:-----------|
|                1 | FGFBP1  |            273 |          642 |   0.0488069 |   4.07532 | 0.388761 | Background |
|                2 | FMO2    |            539 |          642 |   0.0455173 |   3.41742 | 0.747237 | Background |
|                3 | REG4    |            182 |          617 |   0.0450337 |   3.33034 | 0.747237 | Background |
|                4 | HHLA2   |            466 |          469 |   0.0451125 |   3.20923 | 0.747237 | Background |
|                5 | FAM240A |            105 |          636 |   0.0444012 |   3.19645 | 0.747237 | Background |
|                6 | SOD2    |            263 |          675 |   0.0437716 |   3.05635 | 0.747237 | Background |
|                7 | CYP39A1 |            484 |          686 |   0.0437208 |   3.04241 | 0.747237 | Background |
|                8 | MR1     |            349 |          437 |   0.0456785 |   2.96299 | 0.747237 | Background |
|                9 | DNAJB5  |            348 |          677 |   0.0432372 |   2.94878 | 0.747237 | Background |
|               10 | SPACA5  |            164 |          678 |   0.0428863 |   2.87826 | 0.747237 | Background |
|               11 | SAYSD1  |            215 |          699 |   0.0428974 |   2.8734  | 0.747237 | Background |
|               12 | RPL12   |            167 |          691 |   0.042715  |   2.83956 | 0.747237 | Background |
|               13 | PARP10  |           1247 |          484 |   0.0420137 |   2.76992 | 0.747237 | Background |
|               14 | FCN3    |            301 |          235 |   0.0627066 |   2.76    | 0.747237 | Background |
|               15 | MPP1    |            471 |          670 |   0.0421767 |   2.73912 | 0.747237 | Background |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MEANPRECIPITATION_MM_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANPRECIPITATION_MM_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MEANPRECIPITATION_MM_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANPRECIPITATION_MM_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MEANPRECIPITATION_MM (Environmental Precipitation (mm)) screened across N=16,921 mammalian orthologs in sample size N=519 species.
2. Genomic inflation factor lambda_GC = 1.0694, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is FGFBP1 (Rank #1, Psi = 0.0488, Z = 4.08, q = 3.89e-01).
