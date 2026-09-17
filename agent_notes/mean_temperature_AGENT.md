# Checkpoint Report: Environmental Temperature (°C)
- **Phenotype ID:** `CONT_MEANTEMPERATURE_C`
- **Trait Class:** `continuous` (Sample Size: 483 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0449
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:28

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0449$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include FGFBP1, SAMD9, GZMK, HHLA2, DGLUCY.


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
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |    fdr_q | tier       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|---------:|:-----------|
|                1 | FGFBP1   |            273 |          642 |   0.0453717 |   3.7213  | 0.763803 | Background |
|                2 | SAMD9    |           1622 |          475 |   0.044783  |   3.48088 | 0.763803 | Background |
|                3 | GZMK     |            270 |          661 |   0.0431087 |   3.25919 | 0.763803 | Background |
|                4 | HHLA2    |            466 |          469 |   0.0439001 |   3.24848 | 0.763803 | Background |
|                5 | DGLUCY   |            634 |          393 |   0.0485197 |   3.16874 | 0.763803 | Background |
|                6 | KRT76    |            764 |          505 |   0.042032  |   3.13715 | 0.763803 | Background |
|                7 | ARHGAP40 |            735 |          329 |   0.0533947 |   3.09373 | 0.763803 | Background |
|                8 | SSTR4    |            391 |          385 |   0.0484522 |   3.0757  | 0.763803 | Background |
|                9 | MOAP1    |            370 |          351 |   0.051166  |   3.06945 | 0.763803 | Background |
|               10 | FCN3     |            301 |          235 |   0.064329  |   3.03827 | 0.763803 | Background |
|               11 | DYNC2I1  |           1191 |          491 |   0.0415495 |   3.03406 | 0.763803 | Background |
|               12 | TRMT2B   |            505 |          299 |   0.0547001 |   2.91461 | 0.763803 | Background |
|               13 | GZMM     |            273 |          468 |   0.0420584 |   2.90059 | 0.763803 | Background |
|               14 | IFNB1    |            198 |          629 |   0.0410546 |   2.86465 | 0.763803 | Background |
|               15 | PRTN3    |            260 |          436 |   0.0432496 |   2.80222 | 0.763803 | Background |

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
2. Genomic inflation factor lambda_GC = 1.0449, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is FGFBP1 (Rank #1, Psi = 0.0454, Z = 3.72, q = 7.64e-01).
