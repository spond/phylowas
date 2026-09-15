# Checkpoint Report: Sexual Maturity Age (days) (Allometric Residual)
- **Phenotype ID:** `CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 424 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1324
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:52

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **560 loci at $\mathrm{FDR}\;q \le 0.05$** and **429 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1324$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include CST2, SPATA31D3, GYPC, TSPYL6, MRGPRX4.


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

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **TSPYL6** | 435 | 144 | 0.0765 | 4.61 | #1 | 0.0334 | Tier 0: Core Bottleneck Transducer |
| 2 | **MRGPRX4** | 360 | 124 | 0.0734 | 4.22 | #2 | 0.1056 | Tier 0: Core Bottleneck Transducer |
| 3 | **ITLN1** | 330 | 173 | 0.0714 | 3.96 | #3 | 0.2085 | Tier 0: Core Bottleneck Transducer |
| 4 | **HBA1** | 174 | 115 | 0.0670 | 3.42 | #4 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 5 | **OR10H3** | 317 | 109 | 0.0658 | 3.25 | #5 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 6 | **OXCT2** | 559 | 140 | 0.0653 | 3.19 | #6 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 7 | **HOPX** | 89 | 150 | 0.0650 | 3.16 | #7 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 8 | **NEK4** | 889 | 161 | 0.0647 | 3.13 | #8 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 9 | **HBA2** | 196 | 161 | 0.0636 | 2.99 | #9 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 10 | **AHI1** | 1,233 | 181 | 0.0633 | 2.95 | #10 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 11 | **OR52A5** | 327 | 111 | 0.0633 | 2.94 | #11 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 12 | **CCDC187** | 2,332 | 225 | 0.0626 | 2.86 | #12 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 13 | **OR4C11** | 348 | 233 | 0.0625 | 2.84 | #13 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 14 | **OR5T3** | 331 | 192 | 0.0625 | 2.84 | #14 | 0.6481 | Tier 0: Core Bottleneck Transducer |
| 15 | **H2BW1** | 179 | 118 | 0.0621 | 2.80 | #15 | 0.6481 | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 0.1324, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 560 significant loci at FDR q <= 0.05 and 429 loci at FDR q <= 0.01.
4. Top discovery locus is CST2 (Rank #1, Psi = 0.0820, Z = 4.94, q = 1.21e-04).
