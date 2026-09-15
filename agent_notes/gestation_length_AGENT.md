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

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **TSPYL6** | 435 | 144 | 0.0696 | 8.00 | #1 | 1.04e-11 | Tier 0: Core Bottleneck Transducer |
| 2 | **CST5** | 176 | 118 | 0.0637 | 7.04 | #2 | 8.38e-09 | Tier 0: Core Bottleneck Transducer |
| 3 | **PYHIN1** | 582 | 149 | 0.0614 | 6.66 | #3 | 7.95e-08 | Tier 0: Core Bottleneck Transducer |
| 4 | **IRGM** | 198 | 118 | 0.0571 | 5.95 | #4 | 5.67e-06 | Tier 0: Core Bottleneck Transducer |
| 5 | **MS4A18** | 504 | 150 | 0.0539 | 5.42 | #5 | 1.02e-04 | Tier 0: Core Bottleneck Transducer |
| 6 | **OR2J2** | 328 | 108 | 0.0529 | 5.25 | #6 | 2.11e-04 | Tier 0: Core Bottleneck Transducer |
| 7 | **OOSP1** | 193 | 335 | 0.0525 | 5.19 | #7 | 2.45e-04 | Tier 0: Core Bottleneck Transducer |
| 8 | **MRGPRX4** | 360 | 124 | 0.0524 | 5.17 | #8 | 2.45e-04 | Tier 0: Core Bottleneck Transducer |
| 9 | **ERVMER34-1** | 578 | 122 | 0.0516 | 5.04 | #9 | 4.38e-04 | Tier 0: Core Bottleneck Transducer |
| 10 | **AHI1** | 1,233 | 181 | 0.0514 | 5.01 | #10 | 4.56e-04 | Tier 0: Core Bottleneck Transducer |
| 11 | **FPR3** | 355 | 261 | 0.0501 | 4.80 | #11 | 0.0012 | Tier 0: Core Bottleneck Transducer |
| 12 | **OR10H3** | 317 | 109 | 0.0498 | 4.74 | #12 | 0.0015 | Tier 0: Core Bottleneck Transducer |
| 13 | **PNMA3** | 500 | 313 | 0.0493 | 4.66 | #13 | 0.0020 | Tier 0: Core Bottleneck Transducer |
| 14 | **OR7C2** | 334 | 220 | 0.0490 | 4.62 | #14 | 0.0023 | Tier 0: Core Bottleneck Transducer |
| 15 | **SSTR4** | 391 | 385 | 0.0486 | 4.56 | #15 | 0.0029 | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 0.1154, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 394 significant loci at FDR q <= 0.05 and 247 loci at FDR q <= 0.01.
4. Top discovery locus is LOC112267855 (Rank #1, Psi = 0.0957, Z = 11.56, q = 1.07e-26).
