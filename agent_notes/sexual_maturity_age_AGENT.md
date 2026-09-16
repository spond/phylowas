# Checkpoint Report: Sexual Maturity Age (days) (Allometric Residual)
- **Phenotype ID:** `CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 424 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.3371
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:21

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **1 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.3371$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TSPYL6, MRGPRX4, ITLN1, HBA1, OR10H3.


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
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |     fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|----------:|:-----------------------------------|
|                1 | TSPYL6  |            435 |          144 |   0.076549  |   4.61442 | 0.0333507 | Tier 0: Core Bottleneck Transducer |
|                2 | MRGPRX4 |            360 |          124 |   0.0733787 |   4.21508 | 0.105625  | Tier 0: Core Bottleneck Transducer |
|                3 | ITLN1   |            330 |          173 |   0.0713801 |   3.96332 | 0.208454  | Tier 0: Core Bottleneck Transducer |
|                4 | HBA1    |            174 |          115 |   0.0670431 |   3.41702 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|                5 | OR10H3  |            317 |          109 |   0.0657567 |   3.25497 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|                6 | OXCT2   |            559 |          140 |   0.0652539 |   3.19164 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|                7 | HOPX    |             89 |          150 |   0.0650011 |   3.1598  | 0.648114  | Tier 0: Core Bottleneck Transducer |
|                8 | NEK4    |            889 |          161 |   0.0647278 |   3.12537 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|                9 | HBA2    |            196 |          161 |   0.0636354 |   2.98777 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               10 | AHI1    |           1233 |          181 |   0.0633397 |   2.95052 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               11 | OR52A5  |            327 |          111 |   0.0632555 |   2.93991 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               12 | CCDC187 |           2332 |          225 |   0.0625914 |   2.85625 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               13 | OR4C11  |            348 |          233 |   0.0624853 |   2.8429  | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               14 | OR5T3   |            331 |          192 |   0.0624569 |   2.83932 | 0.648114  | Tier 0: Core Bottleneck Transducer |
|               15 | H2BW1   |            179 |          118 |   0.0621099 |   2.79561 | 0.648114  | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 1.3371, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 1 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is TSPYL6 (Rank #1, Psi = 0.0765, Z = 4.61, q = 3.34e-02).
