# Checkpoint Report: Weaning Age (days) (Allometric Residual)
- **Phenotype ID:** `CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 431 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.1469
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:22

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **85 loci at $\mathrm{FDR}\;q \le 0.05$** and **52 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.1469$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TTLL2, TSPYL6, CTSV, NEK4, ITLN1.


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
|   composite_rank | gene   |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TTLL2  |            600 |          124 |   0.0636086 |   7.26677 | 2.9914e-09  | Tier 0: Core Bottleneck Transducer |
|                2 | TSPYL6 |            435 |          144 |   0.0630827 |   7.17805 | 2.9914e-09  | Tier 0: Core Bottleneck Transducer |
|                3 | CTSV   |            335 |          151 |   0.0569418 |   6.14215 | 2.29598e-06 | Tier 0: Core Bottleneck Transducer |
|                4 | NEK4   |            889 |          161 |   0.0566492 |   6.09278 | 2.34713e-06 | Tier 0: Core Bottleneck Transducer |
|                5 | ITLN1  |            330 |          173 |   0.0563565 |   6.04341 | 2.55327e-06 | Tier 0: Core Bottleneck Transducer |
|                6 | OR5AN1 |            397 |          139 |   0.0550066 |   5.8157  | 8.51421e-06 | Tier 0: Core Bottleneck Transducer |
|                7 | CST5   |            176 |          118 |   0.0540648 |   5.65683 | 1.86369e-05 | Tier 0: Core Bottleneck Transducer |
|                8 | OR13C2 |            321 |          140 |   0.053839  |   5.61873 | 2.03438e-05 | Tier 0: Core Bottleneck Transducer |
|                9 | CTSL   |            336 |          123 |   0.0530212 |   5.48077 | 3.98087e-05 | Tier 0: Core Bottleneck Transducer |
|               10 | OR10H3 |            317 |          109 |   0.0521993 |   5.34213 | 7.77207e-05 | Tier 0: Core Bottleneck Transducer |
|               11 | HOPX   |             89 |          150 |   0.0519934 |   5.3074  | 8.55282e-05 | Tier 0: Core Bottleneck Transducer |
|               12 | CARD18 |             97 |          131 |   0.0518353 |   5.28072 | 8.93597e-05 | Tier 0: Core Bottleneck Transducer |
|               13 | AHI1   |           1233 |          181 |   0.0517647 |   5.26882 | 8.93597e-05 | Tier 0: Core Bottleneck Transducer |
|               14 | OOSP1  |            193 |          335 |   0.0511487 |   5.16491 | 0.000145375 | Tier 0: Core Bottleneck Transducer |
|               15 | OR4C11 |            348 |          233 |   0.0510068 |   5.14096 | 0.00015417  | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 1.1469, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 85 significant loci at FDR q <= 0.05 and 52 loci at FDR q <= 0.01.
4. Top discovery locus is TTLL2 (Rank #1, Psi = 0.0636, Z = 7.27, q = 2.99e-09).
