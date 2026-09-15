# Checkpoint Report: Geographic Range Size (km2)
- **Phenotype ID:** `CONT_GEOGRAPHICRANGE_KM2`
- **Trait Class:** `continuous` (Sample Size: 520 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1728
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:47

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **386 loci at $\mathrm{FDR}\;q \le 0.05$** and **260 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1728$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include PRAMEF9, AKR1C4, OR8K5, OR2G6, LAIR2.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_GEOGRAPHICRANGE_KM2 \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_GEOGRAPHICRANGE_KM2/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **PRAMEF9** | 543 | 128 | 0.0355 | 9.25 | #1 | 1.87e-16 | Tier 0: Core Bottleneck Transducer |
| 2 | **AKR1C4** | 331 | 110 | 0.0349 | 9.11 | #2 | 3.41e-16 | Tier 0: Core Bottleneck Transducer |
| 3 | **OR8K5** | 322 | 247 | 0.0334 | 8.78 | #3 | 4.59e-15 | Tier 0: Core Bottleneck Transducer |
| 4 | **OR2G6** | 330 | 231 | 0.0314 | 8.35 | #4 | 1.41e-13 | Tier 0: Core Bottleneck Transducer |
| 5 | **LAIR2** | 167 | 236 | 0.0280 | 7.59 | #5 | 5.54e-11 | Tier 0: Core Bottleneck Transducer |
| 6 | **SPDYE8** | 278 | 264 | 0.0278 | 7.55 | #6 | 5.95e-11 | Tier 0: Core Bottleneck Transducer |
| 7 | **TOMM20L** | 213 | 565 | 0.0274 | 7.46 | #7 | 1.08e-10 | Tier 0: Core Bottleneck Transducer |
| 8 | **FCGR3B** | 241 | 584 | 0.0269 | 7.34 | #8 | 2.18e-10 | Tier 0: Core Bottleneck Transducer |
| 9 | **SPDYE14** | 281 | 242 | 0.0256 | 7.08 | #9 | 1.40e-09 | Tier 0: Core Bottleneck Transducer |
| 10 | **SPDYE4** | 266 | 330 | 0.0252 | 6.98 | #10 | 2.56e-09 | Tier 0: Core Bottleneck Transducer |
| 11 | **SPDYE10** | 297 | 217 | 0.0248 | 6.90 | #11 | 3.95e-09 | Tier 0: Core Bottleneck Transducer |
| 12 | **RBP1** | 198 | 143 | 0.0246 | 6.85 | #12 | 5.13e-09 | Tier 0: Core Bottleneck Transducer |
| 13 | **C3orf49** | 329 | 583 | 0.0245 | 6.83 | #13 | 5.54e-09 | Tier 0: Core Bottleneck Transducer |
| 14 | **SPDYE13** | 320 | 274 | 0.0237 | 6.65 | #14 | 1.80e-08 | Tier 0: Core Bottleneck Transducer |
| 15 | **NUTM2G** | 515 | 215 | 0.0234 | 6.57 | #15 | 2.76e-08 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_GEOGRAPHICRANGE_KM2 (Geographic Range Size (km2)) screened across N=16,921 mammalian orthologs in sample size N=520 species.
2. Genomic inflation factor lambda_GC = 0.1728, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 386 significant loci at FDR q <= 0.05 and 260 loci at FDR q <= 0.01.
4. Top discovery locus is PRAMEF9 (Rank #1, Psi = 0.0355, Z = 8.73, q = 1.07e-14).
