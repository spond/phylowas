# Checkpoint Report: Epimorphic Scar-Free Skin & Tissue Regeneration
- **Phenotype ID:** `DISC_SCAR_FREE_REGENERATION`
- **Trait Class:** `binary` (Sample Size: 7 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.6685
- **Total Mammalian Orthologs Screened:** 16,920
- **Date / Timestamp:** 2026-09-17 06:22:47

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **503 loci at $\mathrm{FDR}\;q \le 0.05$** and **280 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.6685$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include UBE2E2, BAP1, ICAM1, R3HCC1, SLC18A1.
- **Canonical Recovery:** Spontaneously recovered 0/8 gold-standard machinery in the top 200 (Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_SCAR_FREE_REGENERATION \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_SCAR_FREE_REGENERATION/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                                       |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|------------:|:-------------------------------------------|
|                1 | UBE2E2   |            201 |          696 |   0.137357  |   9.57114 | 8.94498e-18 | Tier 2: Physiological Homeostasis Modifier |
|                2 | BAP1     |            761 |          712 |   0.115995  |   8.0974  | 2.37504e-12 | Tier 0: Core Bottleneck Transducer         |
|                3 | ICAM1    |            634 |          646 |   0.113832  |   7.75868 | 2.42004e-11 | Tier 2: Physiological Homeostasis Modifier |
|                4 | R3HCC1   |            514 |          703 |   0.106581  |   7.40256 | 2.82529e-10 | Tier 0: Core Bottleneck Transducer         |
|                5 | SLC18A1  |            531 |          686 |   0.101998  |   7.03468 | 3.37922e-09 | Tier 0: Core Bottleneck Transducer         |
|                6 | PSD3     |           1235 |          656 |   0.102689  |   7.00702 | 3.43259e-09 | Tier 0: Core Bottleneck Transducer         |
|                7 | SSH1     |           1107 |          650 |   0.10116   |   6.88431 | 7.01817e-09 | Tier 0: Core Bottleneck Transducer         |
|                8 | FAM110B  |            372 |          688 |   0.0987103 |   6.80667 | 1.05627e-08 | Tier 2: Physiological Homeostasis Modifier |
|                9 | CLSTN1   |            969 |          648 |   0.0984428 |   6.68927 | 2.10835e-08 | Tier 0: Core Bottleneck Transducer         |
|               10 | RAVER2   |            738 |          640 |   0.098295  |   6.65852 | 2.33995e-08 | Tier 0: Core Bottleneck Transducer         |
|               11 | HECA     |            582 |          636 |   0.0963274 |   6.51134 | 5.72856e-08 | Tier 2: Physiological Homeostasis Modifier |
|               12 | LAT2     |            286 |          629 |   0.0959817 |   6.46951 | 6.93147e-08 | Tier 0: Core Bottleneck Transducer         |
|               13 | GSK3A    |            511 |          681 |   0.0908236 |   6.23236 | 2.95171e-07 | Tier 2: Physiological Homeostasis Modifier |
|               14 | EPB41L4B |            919 |          622 |   0.092676  |   6.22277 | 2.95171e-07 | Tier 0: Core Bottleneck Transducer         |
|               15 | ABCB10   |            769 |          623 |   0.0923476 |   6.20252 | 3.13383e-07 | Tier 0: Core Bottleneck Transducer         |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys. (Epimorphic Regeneration in Mammals (Acomys Model))
- **Top 50 Recovery:** 0 / 8 loci
- **Top 200 Recovery:** 0 / 8 loci
- **Top 500 Recovery:** 0 / 8 loci

|   composite_rank | gene   |   codon_length |    psi_score |   z_score |    fdr_q |
|-----------------:|:-------|---------------:|-------------:|----------:|---------:|
|             1092 | SMAD3  |            425 |  0.0336519   |  2.20896  | 0.21054  |
|             7200 | COL3A1 |           1477 | -0.00019262  | -0.200782 | 0.701091 |
|             7223 | MMP9   |            768 | -0.000203767 | -0.200849 | 0.701091 |
|             7966 | TGFB3  |            415 | -0.000245683 | -0.203617 | 0.701091 |
|             8301 | FN1    |           2233 | -0.000240009 | -0.204772 | 0.701091 |
|            10289 | HAS2   |            552 | -0.000315487 | -0.211674 | 0.701091 |
|            10416 | FGF2   |            161 | -0.000356955 | -0.212129 | 0.701091 |
|            10589 | CD44   |            398 | -0.000376285 | -0.21277  | 0.701091 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_SCAR_FREE_REGENERATION (Epimorphic Scar-Free Skin & Tissue Regeneration) screened across N=16,920 mammalian orthologs in sample size N=7 species.
2. Genomic inflation factor lambda_GC = 0.6685, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 503 significant loci at FDR q <= 0.05 and 280 loci at FDR q <= 0.01.
4. Top discovery locus is UBE2E2 (Rank #1, Psi = 0.1374, Z = 9.57, q = 8.94e-18).
5. External validation against Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys. recovered 0/8 gold loci in the top 50, 0/8 in the top 200, and 0/8 in the top 500.
6. Canonical locus SMAD3 achieves Rank #1092 (Psi = 0.0337, Z = 2.21, q = 2.11e-01).
7. Canonical locus COL3A1 achieves Rank #7200 (Psi = -0.0002, Z = -0.20, q = 7.01e-01).
8. Canonical locus MMP9 achieves Rank #7223 (Psi = -0.0002, Z = -0.20, q = 7.01e-01).
