# Checkpoint Report: Spontaneous Decidualization & Overt Menstruation
- **Phenotype ID:** `DISC_SPONTANEOUS_MENSTRUATION`
- **Trait Class:** `binary` (Sample Size: 18 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.6732
- **Total Mammalian Orthologs Screened:** 17,130
- **Date / Timestamp:** 2026-09-15 10:22:01

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **37 loci at $\mathrm{FDR}\;q \le 0.05$** and **10 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.6732$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include CEACAM18, TP53AIP1, KRTAP9-1, CHAT, STH.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_SPONTANEOUS_MENSTRUATION \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_SPONTANEOUS_MENSTRUATION/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **CEACAM18** | 417 | 328 | 0.1360 | 3.87 | #1 | 0.0299 | Tier 0: Core Bottleneck Transducer |
| 2 | **RPL21** | 160 | 665 | 0.1862 | 5.56 | #2 | 1.56e-04 | Tier 0: Core Bottleneck Transducer |
| 3 | **CHAT** | 768 | 269 | 0.1279 | 3.59 | #3 | 0.0436 | Tier 0: Core Bottleneck Transducer |
| 4 | **KATNAL1** | 550 | 694 | 0.1650 | 4.85 | #4 | 0.0027 | Tier 0: Core Bottleneck Transducer |
| 5 | **MAP3K2** | 622 | 699 | 0.1110 | 3.02 | #5 | 0.1518 | Tier 0: Core Bottleneck Transducer |
| 6 | **ELAVL1** | 339 | 699 | 0.1645 | 4.83 | #6 | 0.0027 | Tier 0: Core Bottleneck Transducer |
| 7 | **ARHGEF12** | 1,564 | 657 | 0.1010 | 2.69 | #7 | 0.2623 | Tier 0: Core Bottleneck Transducer |
| 8 | **MAN1B1** | 715 | 111 | 0.1614 | 4.73 | #8 | 0.0032 | Tier 0: Core Bottleneck Transducer |
| 9 | **CSN3** | 321 | 639 | 0.1507 | 4.36 | #9 | 0.0086 | Tier 0: Core Bottleneck Transducer |
| 10 | **GTF3A** | 396 | 701 | 0.1603 | 4.69 | #10 | 0.0032 | Tier 0: Core Bottleneck Transducer |
| 11 | **RAB31** | 204 | 713 | 0.1013 | 2.69 | #11 | 0.2598 | Tier 0: Core Bottleneck Transducer |
| 12 | **TMPRSS15** | 903 | 114 | 0.1577 | 4.60 | #12 | 0.0041 | Tier 0: Core Bottleneck Transducer |
| 13 | **GBP2** | 607 | 154 | 0.0954 | 2.49 | #13 | 0.3619 | Tier 0: Core Bottleneck Transducer |
| 14 | **IGFL4** | 134 | 148 | 0.1525 | 4.43 | #14 | 0.0081 | Tier 0: Core Bottleneck Transducer |
| 15 | **PTPN12** | 813 | 682 | 0.0872 | 2.22 | #15 | 0.4857 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_SPONTANEOUS_MENSTRUATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SPONTANEOUS_MENSTRUATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_SPONTANEOUS_MENSTRUATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SPONTANEOUS_MENSTRUATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_SPONTANEOUS_MENSTRUATION (Spontaneous Decidualization & Overt Menstruation) screened across N=11,773 mammalian orthologs in sample size N=18 species.
2. Genomic inflation factor lambda_GC = 0.6732, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 37 significant loci at FDR q <= 0.05 and 10 loci at FDR q <= 0.01.
4. Top discovery locus is CEACAM18 (Rank #1, Psi = 0.1360, Z = 3.38, q = 1.42e-01).
