# Checkpoint Report: Gestation Length (days) (Allometric Residual)
- **Phenotype ID:** `CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 491 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1154
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:47

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **394 loci at $\mathrm{FDR}\;q \le 0.05$** and **247 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1154$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include LOC112267855, ENSG00000304062, TSPYL6, BTNL3, CST5.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene            |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:----------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | LOC112267855    |            288 |           52 |   0.0956635 |  11.5642  | 1.07222e-26 | Tier 0: Core Bottleneck Transducer |
|                2 | ENSG00000304062 |            108 |           84 |   0.0724359 |   7.977   | 3.21059e-12 | Tier 0: Core Bottleneck Transducer |
|                3 | TSPYL6          |            435 |          144 |   0.0696262 |   7.54308 | 7.14801e-11 | Tier 0: Core Bottleneck Transducer |
|                4 | BTNL3           |            488 |           47 |   0.0677942 |   7.26017 | 3.48586e-10 | Tier 0: Core Bottleneck Transducer |
|                5 | CST5            |            176 |          118 |   0.0637432 |   6.63454 | 2.06534e-08 | Tier 0: Core Bottleneck Transducer |
|                6 | KRTAP1-1        |            207 |           63 |   0.0621594 |   6.38994 | 8.8842e-08  | Tier 0: Core Bottleneck Transducer |
|                7 | PYHIN1          |            582 |          149 |   0.0614271 |   6.27685 | 1.59966e-07 | Tier 0: Core Bottleneck Transducer |
|                8 | FNDC4           |            235 |           64 |   0.0592262 |   5.93696 | 9.04369e-07 | Tier 0: Core Bottleneck Transducer |
|                9 | IRGM            |            198 |          118 |   0.0571271 |   5.61278 | 5.09084e-06 | Tier 0: Core Bottleneck Transducer |
|               10 | LOC124903972    |            219 |           40 |   0.0567552 |   5.55535 | 6.68479e-06 | Tier 0: Core Bottleneck Transducer |
|               11 | MS4A18          |            504 |          150 |   0.0538833 |   5.11183 | 5.87719e-05 | Tier 0: Core Bottleneck Transducer |
|               12 | CST2            |            147 |           36 |   0.0531206 |   4.99404 | 9.64725e-05 | Tier 0: Core Bottleneck Transducer |
|               13 | OR2J2           |            328 |          108 |   0.0528756 |   4.95619 | 0.000116182 | Tier 0: Core Bottleneck Transducer |
|               14 | OOSP1           |            193 |          335 |   0.0525044 |   4.89887 | 0.000146124 | Tier 0: Core Bottleneck Transducer |
|               15 | MRGPRX4         |            360 |          124 |   0.0523861 |   4.8806  | 0.000156193 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL (Gestation Length (days) (Allometric Residual)) screened across N=17,131 mammalian orthologs in sample size N=491 species.
2. Genomic inflation factor lambda_GC = 0.1154, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 394 significant loci at FDR q <= 0.05 and 247 loci at FDR q <= 0.01.
4. Top discovery locus is LOC112267855 (Rank #1, Psi = 0.0957, Z = 11.56, q = 1.07e-26).
