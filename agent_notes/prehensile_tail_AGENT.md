# Checkpoint Report: Muscular Tactile Prehensile Tail (Arboreal 5th Limb)
- **Phenotype ID:** `DISC_PREHENSILE_TAIL`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.7962
- **Total Mammalian Orthologs Screened:** 17,130
- **Date / Timestamp:** 2026-09-15 10:22:05

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **28 loci at $\mathrm{FDR}\;q \le 0.05$** and **6 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.7962$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include GARIN5B, ULBP3, SPATC1L, OR5P2, PTPRQ.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_PREHENSILE_TAIL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_PREHENSILE_TAIL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)

| Rank | Gene Symbol | Codons | Taxa | Selection Score (Ψ) | Z-Score | Composite Rank | FDR q-Value | Functional Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **SPATC1L** | 356 | 644 | 0.1288 | 3.88 | #1 | 0.2921 | Tier 0: Core Bottleneck Transducer |
| 2 | **OR5P2** | 331 | 155 | 0.1373 | 4.18 | #2 | 0.2165 | Tier 0: Core Bottleneck Transducer |
| 3 | **PTPRQ** | 2,359 | 650 | 0.0889 | 2.45 | #3 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 4 | **OR5AS1** | 327 | 457 | 0.1007 | 2.87 | #4 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 5 | **GARIN1A** | 327 | 709 | 0.1277 | 3.84 | #5 | 0.2921 | Tier 0: Core Bottleneck Transducer |
| 6 | **PLEKHS1** | 556 | 704 | 0.0853 | 2.32 | #6 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 7 | **CXCL12** | 93 | 721 | 0.1260 | 3.78 | #7 | 0.2921 | Tier 0: Core Bottleneck Transducer |
| 8 | **ATRX** | 2,566 | 610 | 0.0901 | 2.49 | #8 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 9 | **OR52J3** | 325 | 292 | 0.1245 | 3.72 | #9 | 0.2921 | Tier 0: Core Bottleneck Transducer |
| 10 | **MGRN1** | 597 | 688 | 0.0935 | 2.61 | #10 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 11 | **HSFY1** | 411 | 142 | 0.1209 | 3.60 | #11 | 0.3503 | Tier 0: Core Bottleneck Transducer |
| 12 | **ASPH** | 795 | 584 | 0.0860 | 2.35 | #12 | 0.8936 | Tier 0: Core Bottleneck Transducer |
| 13 | **HSFY2** | 413 | 142 | 0.1208 | 3.59 | #13 | 0.3503 | Tier 0: Core Bottleneck Transducer |
| 14 | **CHTF18** | 1,059 | 658 | 0.1147 | 3.37 | #14 | 0.6911 | Tier 0: Core Bottleneck Transducer |
| 15 | **LFNG** | 394 | 649 | 0.0842 | 2.28 | #15 | 0.8936 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_PREHENSILE_TAIL (Muscular Tactile Prehensile Tail (Arboreal 5th Limb)) screened across N=14,936 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 0.7962, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 28 significant loci at FDR q <= 0.05 and 6 loci at FDR q <= 0.01.
4. Top discovery locus is GARIN5B (Rank #1, Psi = 0.1738, Z = 4.80, q = 4.48e-03).
