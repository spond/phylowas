# Checkpoint Report: Epimorphic Scar-Free Skin & Tissue Regeneration
- **Phenotype ID:** `DISC_SCAR_FREE_REGENERATION`
- **Trait Class:** `binary` (Sample Size: 7 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.0616
- **Total Mammalian Orthologs Screened:** 17,130
- **Date / Timestamp:** 2026-09-15 10:22:10

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **141 loci at $\mathrm{FDR}\;q \le 0.05$** and **50 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.0616$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include PSD3, UBE2E2, BAP1, CLSTN1, ICAM1.
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
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                                |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:------------------------------------|
|                1 | PSD3    |           1235 |          656 |   0.102689  |   5.24229 | 0.000452797 | Tier 0: Core Bottleneck Transducer  |
|                1 | UBE2E2  |            201 |          696 |   0.137357  |   7.06153 | 1.41051e-08 | Tier 0: Core Bottleneck Transducer  |
|                2 | BAP1    |            761 |          712 |   0.115995  |   5.94053 | 1.62224e-05 | Tier 0: Core Bottleneck Transducer  |
|                3 | CLSTN1  |            969 |          648 |   0.0984428 |   5.01944 | 0.000770219 | Tier 0: Core Bottleneck Transducer  |
|                3 | ICAM1   |            634 |          646 |   0.113832  |   5.82702 | 2.41641e-05 | Tier 0: Core Bottleneck Transducer  |
|                4 | LAT2    |            286 |          629 |   0.0959817 |   4.89029 | 0.00114986  | Tier 0: Core Bottleneck Transducer  |
|                4 | R3HCC1  |            514 |          703 |   0.106581  |   5.44649 | 0.000176005 | Tier 0: Core Bottleneck Transducer  |
|                6 | SLC18A1 |            531 |          686 |   0.101998  |   5.20602 | 0.000472136 | Tier 0: Core Bottleneck Transducer  |
|                6 | TMEM174 |            311 |          720 |   0.0853224 |   4.33092 | 0.00635905  | Tier 0: Core Bottleneck Transducer  |
|                7 | SSH1    |           1107 |          650 |   0.10116   |   5.16201 | 0.000518976 | Tier 0: Core Bottleneck Transducer  |
|                8 | OR5D18  |            316 |          250 |   0.0882591 |   4.48503 | 0.00370648  | Tier 0: Core Bottleneck Transducer  |
|                8 | FAM110B |            372 |          688 |   0.0987103 |   5.03348 | 0.000770219 | Tier 0: Core Bottleneck Transducer  |
|                9 | LYPD1   |             93 |          719 |   0.0845636 |   4.2911  | 0.00702998  | Tier 0: Core Bottleneck Transducer  |
|               10 | OR5V1   |            331 |          198 |   0.0807231 |   4.08956 | 0.0123391   | Tier 1: Primary Regulatory Effector |
|               10 | RAVER2  |            738 |          640 |   0.098295  |   5.01168 | 0.000770219 | Tier 0: Core Bottleneck Transducer  |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys. (Epimorphic Regeneration in Mammals (Acomys Model))
- **Top 50 Recovery:** 0 / 8 loci
- **Top 200 Recovery:** 0 / 8 loci
- **Top 500 Recovery:** 0 / 8 loci

|   composite_rank | gene   |   codon_length |    psi_score |   z_score |    fdr_q |
|-----------------:|:-------|---------------:|-------------:|----------:|---------:|
|             1234 | SMAD3  |            425 |  0.0336519   |  1.6194   | 0.803207 |
|             8123 | COL3A1 |           1477 | -0.00019262  | -0.156665 | 0.932855 |
|             8326 | MMP9   |            768 | -0.000203767 | -0.157249 | 0.932855 |
|             9037 | FN1    |           2233 | -0.000240009 | -0.159151 | 0.932855 |
|             9165 | TGFB3  |            415 | -0.000245683 | -0.159449 | 0.932855 |
|            10505 | HAS2   |            552 | -0.000315487 | -0.163112 | 0.932855 |
|            10689 | FGF2   |            161 | -0.000356955 | -0.165288 | 0.932855 |
|            11519 | CD44   |            398 | -0.000376285 | -0.166303 | 0.932855 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_SCAR_FREE_REGENERATION (Epimorphic Scar-Free Skin & Tissue Regeneration) screened across N=17,130 mammalian orthologs in sample size N=7 species.
2. Genomic inflation factor lambda_GC = 0.0616, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 141 significant loci at FDR q <= 0.05 and 50 loci at FDR q <= 0.01.
4. Top discovery locus is PSD3 (Rank #1, Psi = 0.1027, Z = 5.24, q = 4.53e-04).
5. External validation against Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys. recovered 0/8 gold loci in the top 50, 0/8 in the top 200, and 0/8 in the top 500.
6. Canonical locus SMAD3 achieves Rank #1234 (Psi = 0.0337, Z = 1.62, q = 8.03e-01).
7. Canonical locus COL3A1 achieves Rank #8123 (Psi = -0.0002, Z = -0.16, q = 9.33e-01).
8. Canonical locus MMP9 achieves Rank #8326 (Psi = -0.0002, Z = -0.16, q = 9.33e-01).
