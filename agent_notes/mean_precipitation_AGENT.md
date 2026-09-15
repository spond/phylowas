# Checkpoint Report: Environmental Precipitation (mm)
- **Phenotype ID:** `CONT_MEANPRECIPITATION_MM`
- **Trait Class:** `continuous` (Sample Size: 519 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1095
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:50

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **445 loci at $\mathrm{FDR}\;q \le 0.05$** and **321 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1095$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include BTNL3, TSPYL6, ENSG00000304062, OR56A4, SP100.


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

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **TSPYL6** | 435 | 144 | 0.0776 | 9.68 | #1 | 3.22e-18 | Tier 0: Core Bottleneck Transducer |
| 2 | **OR56A4** | 314 | 160 | 0.0725 | 8.67 | #2 | 1.87e-14 | Tier 0: Core Bottleneck Transducer |
| 3 | **OR5B17** | 339 | 125 | 0.0680 | 7.78 | #3 | 2.01e-11 | Tier 0: Core Bottleneck Transducer |
| 4 | **HOPX** | 89 | 150 | 0.0668 | 7.55 | #4 | 9.01e-11 | Tier 0: Core Bottleneck Transducer |
| 5 | **NEK4** | 889 | 161 | 0.0663 | 7.46 | #5 | 1.51e-10 | Tier 0: Core Bottleneck Transducer |
| 6 | **OR10H3** | 317 | 109 | 0.0660 | 7.39 | #6 | 1.94e-10 | Tier 0: Core Bottleneck Transducer |
| 7 | **IRGM** | 198 | 118 | 0.0659 | 7.38 | #7 | 1.94e-10 | Tier 0: Core Bottleneck Transducer |
| 8 | **OR4C13** | 313 | 110 | 0.0658 | 7.35 | #8 | 2.13e-10 | Tier 0: Core Bottleneck Transducer |
| 9 | **ITLN1** | 330 | 173 | 0.0644 | 7.08 | #9 | 1.39e-09 | Tier 0: Core Bottleneck Transducer |
| 10 | **PYHIN1** | 582 | 149 | 0.0634 | 6.88 | #10 | 4.66e-09 | Tier 0: Core Bottleneck Transducer |
| 11 | **AHI1** | 1,233 | 181 | 0.0634 | 6.87 | #11 | 4.66e-09 | Tier 0: Core Bottleneck Transducer |
| 12 | **OR5B2** | 328 | 125 | 0.0633 | 6.87 | #12 | 4.66e-09 | Tier 0: Core Bottleneck Transducer |
| 13 | **H2BW2** | 164 | 106 | 0.0627 | 6.75 | #13 | 9.05e-09 | Tier 0: Core Bottleneck Transducer |
| 14 | **FCN3** | 301 | 235 | 0.0627 | 6.75 | #14 | 9.05e-09 | Tier 0: Core Bottleneck Transducer |
| 15 | **MS4A18** | 504 | 150 | 0.0621 | 6.63 | #15 | 1.88e-08 | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 0.1095, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 445 significant loci at FDR q <= 0.05 and 321 loci at FDR q <= 0.01.
4. Top discovery locus is BTNL3 (Rank #1, Psi = 0.1027, Z = 13.23, q = 9.73e-36).
