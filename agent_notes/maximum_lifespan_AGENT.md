# Checkpoint Report: Maximum Lifespan (months) (Allometric Residual)
- **Phenotype ID:** `CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 428 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9596
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:26

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **1 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9596$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include F11, PGLYRP4, H4C16, SLC17A3, SH2D7.
- **Canonical Recovery:** Spontaneously recovered 0/21 gold-standard machinery in the top 200 (Established DNA double-strand break repair, telomere maintenance, sirtuin signaling, and tumor suppressor machinery.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |     fdr_q | tier                                       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|----------:|:-------------------------------------------|
|                1 | F11      |            648 |          619 |   0.047646  |   4.62328 | 0.0319571 | Tier 1: Primary Regulatory Effector        |
|                2 | PGLYRP4  |            390 |          518 |   0.0460603 |   4.29265 | 0.0557688 | Tier 2: Physiological Homeostasis Modifier |
|                3 | H4C16    |            103 |          519 |   0.0456899 |   4.23423 | 0.0557688 | Tier 2: Physiological Homeostasis Modifier |
|                4 | SLC17A3  |            436 |          510 |   0.0462066 |   4.20277 | 0.0557688 | Tier 2: Physiological Homeostasis Modifier |
|                5 | SH2D7    |            510 |          637 |   0.0452521 |   4.13863 | 0.0591196 | Tier 2: Physiological Homeostasis Modifier |
|                6 | FAM240A  |            105 |          636 |   0.0447918 |   4.04689 | 0.0731879 | Tier 2: Physiological Homeostasis Modifier |
|                7 | CELA2A   |            285 |          475 |   0.0478368 |   4.00328 | 0.0755045 | Tier 2: Physiological Homeostasis Modifier |
|                8 | ANKRD34C |            547 |          603 |   0.0439755 |   3.89461 | 0.104019  | Background                                 |
|                9 | IZUMO4   |            239 |          624 |   0.0437058 |   3.83358 | 0.105727  | Background                                 |
|               10 | TAS2R41  |            319 |          503 |   0.0447237 |   3.82432 | 0.105727  | Background                                 |
|               11 | PRPS1L1  |            321 |          522 |   0.0432636 |   3.78343 | 0.105727  | Background                                 |
|               12 | FAM228A  |            326 |          475 |   0.0465402 |   3.78332 | 0.105727  | Background                                 |
|               13 | PARP10   |           1247 |          484 |   0.045722  |   3.75799 | 0.105727  | Background                                 |
|               14 | UMOD     |            651 |          626 |   0.0433046 |   3.75268 | 0.105727  | Background                                 |
|               15 | ACSM2A   |            590 |          499 |   0.0440946 |   3.65584 | 0.140199  | Background                                 |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Established DNA double-strand break repair, telomere maintenance, sirtuin signaling, and tumor suppressor machinery. (GenAge / Human DNA Repair Network / OMIM Longevity)
- **Top 50 Recovery:** 0 / 21 loci
- **Top 200 Recovery:** 0 / 21 loci
- **Top 500 Recovery:** 0 / 21 loci

|   composite_rank | gene   |   codon_length |   psi_score |   z_score |    fdr_q |
|-----------------:|:-------|---------------:|------------:|----------:|---------:|
|             1345 | ERCC1  |            227 |   0.0290953 | 0.90104   | 0.768484 |
|             2351 | ERCC3  |            786 |   0.0272301 | 0.513884  | 0.768484 |
|             2780 | ERCC2  |            777 |   0.0267278 | 0.429695  | 0.768484 |
|             3900 | PARP1  |            982 |   0.0260666 | 0.28677   | 0.768484 |
|             4947 | CHEK2  |            542 |   0.0255723 | 0.188191  | 0.768484 |
|             5496 | SIRT1  |            806 |   0.0253639 | 0.149106  | 0.768484 |
|             6293 | ATM    |           3088 |   0.0250448 | 0.0949609 | 0.768484 |
|             7198 | TP53   |            490 |   0.0248943 | 0.0469979 | 0.768484 |
|             7337 | ATG5   |            275 |   0.0248626 | 0.038755  | 0.768484 |
|             7676 | ATG7   |            719 |   0.0247086 | 0.0195153 | 0.768484 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL (Maximum Lifespan (months) (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=428 species.
2. Genomic inflation factor lambda_GC = 0.9596, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 1 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is F11 (Rank #1, Psi = 0.0476, Z = 4.62, q = 3.20e-02).
5. External validation against Established DNA double-strand break repair, telomere maintenance, sirtuin signaling, and tumor suppressor machinery. recovered 0/21 gold loci in the top 50, 0/21 in the top 200, and 0/21 in the top 500.
6. Canonical locus ERCC1 achieves Rank #1345 (Psi = 0.0291, Z = 0.90, q = 7.68e-01).
7. Canonical locus ERCC3 achieves Rank #2351 (Psi = 0.0272, Z = 0.51, q = 7.68e-01).
8. Canonical locus ERCC2 achieves Rank #2780 (Psi = 0.0267, Z = 0.43, q = 7.68e-01).
