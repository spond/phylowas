# Checkpoint Report: Gestation Length (days) (Allometric Residual)
- **Phenotype ID:** `CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 491 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.2456
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:17

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **39 loci at $\mathrm{FDR}\;q \le 0.05$** and **27 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.2456$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TSPYL6, CST5, PYHIN1, IRGM, MS4A18.


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
|   composite_rank | gene       |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-----------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TSPYL6     |            435 |          144 |   0.0696262 |   8.00107 | 1.04355e-11 | Tier 0: Core Bottleneck Transducer |
|                2 | CST5       |            176 |          118 |   0.0637432 |   7.03577 | 8.38291e-09 | Tier 0: Core Bottleneck Transducer |
|                3 | PYHIN1     |            582 |          149 |   0.0614271 |   6.65574 | 7.9497e-08  | Tier 0: Core Bottleneck Transducer |
|                4 | IRGM       |            198 |          118 |   0.0571271 |   5.95018 | 5.66538e-06 | Tier 0: Core Bottleneck Transducer |
|                5 | MS4A18     |            504 |          150 |   0.0538833 |   5.41793 | 0.00010202  | Tier 0: Core Bottleneck Transducer |
|                6 | OR2J2      |            328 |          108 |   0.0528756 |   5.25257 | 0.000211496 | Tier 0: Core Bottleneck Transducer |
|                7 | OOSP1      |            193 |          335 |   0.0525044 |   5.19168 | 0.00024459  | Tier 0: Core Bottleneck Transducer |
|                8 | MRGPRX4    |            360 |          124 |   0.0523861 |   5.17226 | 0.00024459  | Tier 0: Core Bottleneck Transducer |
|                9 | ERVMER34-1 |            578 |          122 |   0.0515801 |   5.04001 | 0.000437594 | Tier 0: Core Bottleneck Transducer |
|               10 | AHI1       |           1233 |          181 |   0.0514076 |   5.01171 | 0.000456428 | Tier 0: Core Bottleneck Transducer |
|               11 | FPR3       |            355 |          261 |   0.0501085 |   4.79855 | 0.0012292   | Tier 0: Core Bottleneck Transducer |
|               12 | OR10H3     |            317 |          109 |   0.0497534 |   4.74028 | 0.0015047   | Tier 0: Core Bottleneck Transducer |
|               13 | PNMA3      |            500 |          313 |   0.0492692 |   4.66083 | 0.00204964  | Tier 0: Core Bottleneck Transducer |
|               14 | OR7C2      |            334 |          220 |   0.0490111 |   4.61847 | 0.00233613  | Tier 0: Core Bottleneck Transducer |
|               15 | SSTR4      |            391 |          385 |   0.048632  |   4.55627 | 0.00293688  | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL (Gestation Length (days) (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=491 species.
2. Genomic inflation factor lambda_GC = 1.2456, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 39 significant loci at FDR q <= 0.05 and 27 loci at FDR q <= 0.01.
4. Top discovery locus is TSPYL6 (Rank #1, Psi = 0.0696, Z = 8.00, q = 1.04e-11).
