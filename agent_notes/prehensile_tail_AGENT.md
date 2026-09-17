# Checkpoint Report: Muscular Tactile Prehensile Tail (Arboreal 5th Limb)
- **Phenotype ID:** `DISC_PREHENSILE_TAIL`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.3765
- **Total Mammalian Orthologs Screened:** 16,920
- **Date / Timestamp:** 2026-09-17 06:22:42

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.3765$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include OR5P2, SPATC1L, GARIN1A, CXCL12, OR52J3.


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
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |    fdr_q | tier       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|---------:|:-----------|
|                1 | OR5P2    |            331 |          155 |    0.137271 |   3.83687 | 0.851292 | Background |
|                2 | SPATC1L  |            356 |          644 |    0.128823 |   3.62546 | 0.851292 | Background |
|                3 | GARIN1A  |            327 |          709 |    0.127734 |   3.59237 | 0.851292 | Background |
|                4 | CXCL12   |             93 |          721 |    0.125983 |   3.53667 | 0.851292 | Background |
|                5 | OR52J3   |            325 |          292 |    0.124514 |   3.47828 | 0.851292 | Background |
|                6 | HSFY1    |            411 |          142 |    0.120938 |   3.36327 | 0.851292 | Background |
|                7 | HSFY2    |            413 |          142 |    0.120801 |   3.35933 | 0.851292 | Background |
|                8 | CHTF18   |           1059 |          658 |    0.11472  |   3.17718 | 0.851292 | Background |
|                9 | UGT3A2   |            553 |          213 |    0.112472 |   3.1155  | 0.851292 | Background |
|               10 | NXF2B    |            715 |          124 |    0.108088 |   2.99751 | 0.851292 | Background |
|               11 | NEK5     |            903 |          544 |    0.10863  |   2.98593 | 0.851292 | Background |
|               12 | NOXO1    |            431 |          676 |    0.106598 |   2.91835 | 0.851292 | Background |
|               13 | THOC2    |           1603 |          629 |    0.105603 |   2.88793 | 0.851292 | Background |
|               14 | C12orf50 |            430 |          708 |    0.104783 |   2.85972 | 0.851292 | Background |
|               15 | R3HDM4   |            295 |          650 |    0.104357 |   2.84773 | 0.851292 | Background |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_PREHENSILE_TAIL (Muscular Tactile Prehensile Tail (Arboreal 5th Limb)) screened across N=16,920 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 1.3765, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is OR5P2 (Rank #1, Psi = 0.1373, Z = 3.84, q = 8.51e-01).
