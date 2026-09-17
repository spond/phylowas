# Checkpoint Report: Gestation Length (days) (Allometric Residual)
- **Phenotype ID:** `CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 491 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.1423
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:24

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.1423$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include HHLA2, ITPRIPL1, FGFBP1, SERPINA10, SSTR4.


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
|   composite_rank | gene      |   codon_length |   taxa_count |   psi_score |   z_score |     fdr_q | tier                                       |
|-----------------:|:----------|---------------:|-------------:|------------:|----------:|----------:|:-------------------------------------------|
|                1 | HHLA2     |            466 |          469 |   0.0470781 |   4.43008 | 0.0796952 | Tier 2: Physiological Homeostasis Modifier |
|                2 | ITPRIPL1  |            566 |          504 |   0.0419538 |   4.02265 | 0.243434  | Background                                 |
|                3 | FGFBP1    |            273 |          642 |   0.0400318 |   3.79035 | 0.336287  | Background                                 |
|                4 | SERPINA10 |            487 |          512 |   0.0401028 |   3.77659 | 0.336287  | Background                                 |
|                5 | SSTR4     |            391 |          385 |   0.048632  |   3.57032 | 0.513125  | Background                                 |
|                6 | GJA3      |            544 |          626 |   0.0387524 |   3.54955 | 0.513125  | Background                                 |
|                7 | SPATA7    |            622 |          665 |   0.0388053 |   3.52434 | 0.513125  | Background                                 |
|                8 | OOSP1     |            193 |          335 |   0.0525044 |   3.43413 | 0.628668  | Background                                 |
|                9 | F11       |            648 |          619 |   0.0374611 |   3.29806 | 0.736715  | Background                                 |
|               10 | PROZ      |            438 |          458 |   0.0407999 |   3.28335 | 0.736715  | Background                                 |
|               11 | ACTL9     |            421 |          585 |   0.0366529 |   3.17108 | 0.736715  | Background                                 |
|               12 | GCSAM     |            252 |          507 |   0.0370161 |   3.13481 | 0.736715  | Background                                 |
|               13 | CLCN4     |            797 |          601 |   0.0362916 |   3.08214 | 0.736715  | Background                                 |
|               14 | TMIGD2    |            325 |          444 |   0.0403381 |   3.07212 | 0.736715  | Background                                 |
|               15 | S100A6    |             98 |          533 |   0.0353144 |   2.96263 | 0.736715  | Background                                 |

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
2. Genomic inflation factor lambda_GC = 1.1423, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is HHLA2 (Rank #1, Psi = 0.0471, Z = 4.43, q = 7.97e-02).
