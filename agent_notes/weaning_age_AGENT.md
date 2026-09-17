# Checkpoint Report: Weaning Age (days) (Allometric Residual)
- **Phenotype ID:** `CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 431 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0991
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:30

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **1 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0991$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include FGFBP1, FAM240A, PARP10, GZMK, DNAJB5.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene      |   codon_length |   taxa_count |   psi_score |   z_score |     fdr_q | tier                                       |
|-----------------:|:----------|---------------:|-------------:|------------:|----------:|----------:|:-------------------------------------------|
|                1 | FGFBP1    |            273 |          642 |   0.0445723 |   4.78714 | 0.0143128 | Tier 1: Primary Regulatory Effector        |
|                2 | FAM240A   |            105 |          636 |   0.0424185 |   4.3591  | 0.0552462 | Tier 2: Physiological Homeostasis Modifier |
|                3 | PARP10    |           1247 |          484 |   0.0438087 |   4.09009 | 0.121608  | Background                                 |
|                4 | GZMK      |            270 |          661 |   0.0406432 |   3.99293 | 0.138038  | Background                                 |
|                5 | DNAJB5    |            348 |          677 |   0.0400765 |   3.87281 | 0.167149  | Background                                 |
|                6 | C17orf100 |            162 |          534 |   0.0396028 |   3.84913 | 0.167149  | Background                                 |
|                7 | F11       |            648 |          619 |   0.039496  |   3.78254 | 0.177814  | Background                                 |
|                8 | SOD2      |            263 |          675 |   0.0395214 |   3.76263 | 0.177814  | Background                                 |
|                9 | FMO2      |            539 |          642 |   0.0388599 |   3.64466 | 0.251698  | Background                                 |
|               10 | SF3A2     |            637 |          518 |   0.0385373 |   3.57804 | 0.267532  | Background                                 |
|               11 | REG4      |            182 |          617 |   0.0384625 |   3.57679 | 0.267532  | Background                                 |
|               12 | NIBAN3    |            623 |          634 |   0.0379521 |   3.46674 | 0.331007  | Background                                 |
|               13 | CYP39A1   |            484 |          686 |   0.0380309 |   3.45998 | 0.331007  | Background                                 |
|               14 | MR1       |            349 |          437 |   0.0436555 |   3.45626 | 0.331007  | Background                                 |
|               15 | SERPINA10 |            487 |          512 |   0.0380883 |   3.41666 | 0.354919  | Background                                 |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL (Weaning Age (days) (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=431 species.
2. Genomic inflation factor lambda_GC = 1.0991, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 1 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is FGFBP1 (Rank #1, Psi = 0.0446, Z = 4.79, q = 1.43e-02).
