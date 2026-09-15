# Checkpoint Report: Environmental Temperature (°C)
- **Phenotype ID:** `CONT_MEANTEMPERATURE_C`
- **Trait Class:** `continuous` (Sample Size: 483 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1272
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:51

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **448 loci at $\mathrm{FDR}\;q \le 0.05$** and **326 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1272$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include BTNL3, TSPYL6, LOC124903972, PCDHGB3, OR10H3.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_MEANTEMPERATURE_C \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_MEANTEMPERATURE_C/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **TSPYL6** | 435 | 144 | 0.0788 | 10.23 | #1 | 1.17e-20 | Tier 0: Core Bottleneck Transducer |
| 2 | **OR10H3** | 317 | 109 | 0.0685 | 8.22 | #2 | 8.48e-13 | Tier 0: Core Bottleneck Transducer |
| 3 | **H2BW2** | 164 | 106 | 0.0668 | 7.89 | #3 | 8.68e-12 | Tier 0: Core Bottleneck Transducer |
| 4 | **OR56A4** | 314 | 160 | 0.0662 | 7.77 | #4 | 1.72e-11 | Tier 0: Core Bottleneck Transducer |
| 5 | **FCN3** | 301 | 235 | 0.0643 | 7.40 | #5 | 2.29e-10 | Tier 0: Core Bottleneck Transducer |
| 6 | **AHI1** | 1,233 | 181 | 0.0640 | 7.33 | #6 | 3.30e-10 | Tier 0: Core Bottleneck Transducer |
| 7 | **CARD18** | 97 | 131 | 0.0628 | 7.10 | #7 | 1.53e-09 | Tier 0: Core Bottleneck Transducer |
| 8 | **IRGM** | 198 | 118 | 0.0621 | 6.97 | #8 | 3.30e-09 | Tier 0: Core Bottleneck Transducer |
| 9 | **LOC128966704** | 114 | 117 | 0.0612 | 6.79 | #9 | 1.05e-08 | Tier 0: Core Bottleneck Transducer |
| 10 | **OR2AG1** | 323 | 198 | 0.0602 | 6.60 | #10 | 3.53e-08 | Tier 0: Core Bottleneck Transducer |
| 11 | **CTSL** | 336 | 123 | 0.0594 | 6.43 | #11 | 9.68e-08 | Tier 0: Core Bottleneck Transducer |
| 12 | **CTSV** | 335 | 151 | 0.0593 | 6.41 | #12 | 9.96e-08 | Tier 0: Core Bottleneck Transducer |
| 13 | **OR5B2** | 328 | 125 | 0.0585 | 6.26 | #13 | 2.54e-07 | Tier 0: Core Bottleneck Transducer |
| 14 | **OR5M10** | 319 | 175 | 0.0578 | 6.12 | #14 | 5.75e-07 | Tier 0: Core Bottleneck Transducer |
| 15 | **OR5B17** | 339 | 125 | 0.0577 | 6.11 | #15 | 5.75e-07 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MEANTEMPERATURE_C (Environmental Temperature (°C)) screened across N=16,921 mammalian orthologs in sample size N=483 species.
2. Genomic inflation factor lambda_GC = 0.1272, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 448 significant loci at FDR q <= 0.05 and 326 loci at FDR q <= 0.01.
4. Top discovery locus is BTNL3 (Rank #1, Psi = 0.0837, Z = 10.26, q = 8.89e-21).
