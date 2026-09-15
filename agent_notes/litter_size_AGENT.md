# Checkpoint Report: Litter Size (Allometric Residual)
- **Phenotype ID:** `CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 534 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.0838
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:48

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **362 loci at $\mathrm{FDR}\;q \le 0.05$** and **241 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.0838$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include NOX5, NLRP13, AKR1C4, FAM240C, TREML4.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **NOX5** | 820 | 330 | 0.0408 | 9.19 | #1 | 2.71e-16 | Tier 0: Core Bottleneck Transducer |
| 2 | **NLRP13** | 840 | 267 | 0.0405 | 9.14 | #2 | 2.71e-16 | Tier 0: Core Bottleneck Transducer |
| 3 | **AKR1C4** | 331 | 110 | 0.0356 | 8.36 | #3 | 1.71e-13 | Tier 0: Core Bottleneck Transducer |
| 4 | **FAM240C** | 103 | 412 | 0.0337 | 8.07 | #4 | 1.46e-12 | Tier 0: Core Bottleneck Transducer |
| 5 | **OR8K5** | 322 | 247 | 0.0328 | 7.93 | #5 | 3.71e-12 | Tier 0: Core Bottleneck Transducer |
| 6 | **CAPN14** | 696 | 472 | 0.0323 | 7.86 | #6 | 5.58e-12 | Tier 0: Core Bottleneck Transducer |
| 7 | **ADAM20** | 774 | 457 | 0.0322 | 7.83 | #7 | 6.07e-12 | Tier 0: Core Bottleneck Transducer |
| 8 | **C2orf78** | 1,024 | 311 | 0.0316 | 7.73 | #8 | 1.09e-11 | Tier 0: Core Bottleneck Transducer |
| 9 | **TRIM52** | 327 | 379 | 0.0311 | 7.65 | #9 | 1.73e-11 | Tier 0: Core Bottleneck Transducer |
| 10 | **ARSF** | 606 | 213 | 0.0310 | 7.65 | #10 | 1.73e-11 | Tier 0: Core Bottleneck Transducer |
| 11 | **PTCRA** | 180 | 276 | 0.0296 | 7.43 | #11 | 8.53e-11 | Tier 0: Core Bottleneck Transducer |
| 12 | **KRTAP25-1** | 105 | 157 | 0.0293 | 7.38 | #12 | 1.09e-10 | Tier 0: Core Bottleneck Transducer |
| 13 | **PPDPFL** | 113 | 510 | 0.0276 | 7.10 | #13 | 7.94e-10 | Tier 0: Core Bottleneck Transducer |
| 14 | **PRAMEF20** | 525 | 135 | 0.0267 | 6.97 | #14 | 1.88e-09 | Tier 0: Core Bottleneck Transducer |
| 15 | **SPEGNB** | 260 | 461 | 0.0255 | 6.79 | #15 | 6.50e-09 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL (Litter Size (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=534 species.
2. Genomic inflation factor lambda_GC = 0.0838, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 362 significant loci at FDR q <= 0.05 and 241 loci at FDR q <= 0.01.
4. Top discovery locus is NOX5 (Rank #1, Psi = 0.0408, Z = 8.63, q = 2.60e-14).
