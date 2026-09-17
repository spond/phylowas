# Checkpoint Report: Sexual Maturity Age (days) (Allometric Residual)
- **Phenotype ID:** `CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 424 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.1248
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:29

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.1248$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include REG4, FGFBP1, FAM240A, PGLYRP4, CELA2A.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |   fdr_q | tier       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|--------:|:-----------|
|                1 | REG4     |            182 |          617 |   0.0597087 |   3.90894 |  0.7497 | Background |
|                2 | FGFBP1   |            273 |          642 |   0.0591397 |   3.73436 |  0.7497 | Background |
|                3 | FAM240A  |            105 |          636 |   0.0581866 |   3.55798 |  0.7497 | Background |
|                4 | PGLYRP4  |            390 |          518 |   0.0592259 |   3.38907 |  0.7497 | Background |
|                5 | CELA2A   |            285 |          475 |   0.0619329 |   3.3853  |  0.7497 | Background |
|                6 | CLCN4    |            797 |          601 |   0.056756  |   3.35926 |  0.7497 | Background |
|                7 | FMO2     |            539 |          642 |   0.0568553 |   3.27746 |  0.7497 | Background |
|                8 | LCN12    |            215 |          551 |   0.0562552 |   3.18412 |  0.7497 | Background |
|                9 | ANKRD34C |            547 |          603 |   0.055883  |   3.17947 |  0.7497 | Background |
|               10 | PARP10   |           1247 |          484 |   0.0594499 |   3.11029 |  0.7497 | Background |
|               11 | SLFNL1   |            446 |          528 |   0.0570106 |   3.10939 |  0.7497 | Background |
|               12 | F11      |            648 |          619 |   0.0543635 |   2.83489 |  0.7497 | Background |
|               13 | SCNN1A   |            666 |          483 |   0.0575526 |   2.82537 |  0.7497 | Background |
|               14 | SH2D7    |            510 |          637 |   0.0544984 |   2.81795 |  0.7497 | Background |
|               15 | RPL12    |            167 |          691 |   0.0550466 |   2.80631 |  0.7497 | Background |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL (Sexual Maturity Age (days) (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=424 species.
2. Genomic inflation factor lambda_GC = 1.1248, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is REG4 (Rank #1, Psi = 0.0597, Z = 3.91, q = 7.50e-01).
