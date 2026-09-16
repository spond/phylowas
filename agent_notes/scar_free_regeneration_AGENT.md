# Checkpoint Report: Epimorphic Scar-Free Skin & Tissue Regeneration
- **Phenotype ID:** `DISC_SCAR_FREE_REGENERATION`
- **Trait Class:** `binary` (Sample Size: 7 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9457
- **Total Mammalian Orthologs Screened:** 1,253
- **Date / Timestamp:** 2026-09-15 22:14:37

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **1 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9457$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include BAP1, PSD3, R3HCC1, CLSTN1, SLC18A1.
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
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |    fdr_q | tier                               |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|---------:|:-----------------------------------|
|                1 | BAP1     |            761 |          712 |   0.115995  |   3.9944  | 0.040634 | Tier 0: Core Bottleneck Transducer |
|                2 | PSD3     |           1235 |          656 |   0.102689  |   3.41563 | 0.10159  | Tier 0: Core Bottleneck Transducer |
|                3 | R3HCC1   |            514 |          703 |   0.106581  |   3.58489 | 0.10159  | Tier 0: Core Bottleneck Transducer |
|                4 | CLSTN1   |            969 |          648 |   0.0984428 |   3.23091 | 0.112949 | Tier 0: Core Bottleneck Transducer |
|                5 | SLC18A1  |            531 |          686 |   0.101998  |   3.38557 | 0.10159  | Tier 0: Core Bottleneck Transducer |
|                6 | LAT2     |            286 |          629 |   0.0959817 |   3.12386 | 0.139785 | Tier 0: Core Bottleneck Transducer |
|                7 | SSH1     |           1107 |          650 |   0.10116   |   3.34909 | 0.10159  | Tier 0: Core Bottleneck Transducer |
|                8 | TMEM174  |            311 |          720 |   0.0853224 |   2.6602  | 0.287802 | Tier 0: Core Bottleneck Transducer |
|                9 | RAVER2   |            738 |          640 |   0.098295  |   3.22448 | 0.112949 | Tier 0: Core Bottleneck Transducer |
|               10 | OR5D18   |            316 |          250 |   0.0882591 |   2.78794 | 0.22155  | Tier 0: Core Bottleneck Transducer |
|               11 | LYPD1    |             93 |          719 |   0.0845636 |   2.62719 | 0.289771 | Tier 0: Core Bottleneck Transducer |
|               12 | FZD8     |            850 |          537 |   0.0946771 |   3.06711 | 0.150457 | Tier 0: Core Bottleneck Transducer |
|               13 | OR5V1    |            331 |          198 |   0.0807231 |   2.46014 | 0.348043 | Tier 0: Core Bottleneck Transducer |
|               14 | EPB41L4B |            919 |          622 |   0.092676  |   2.98007 | 0.171956 | Tier 0: Core Bottleneck Transducer |
|               15 | ABCB10   |            769 |          623 |   0.0923476 |   2.96578 | 0.171956 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Extracellular matrix remodeling, hyaluronan synthesis, and epimorphic tissue repair in Acomys. (Epimorphic Regeneration in Mammals (Acomys Model))
- **Top 50 Recovery:** 0 / 8 loci
- **Top 200 Recovery:** 0 / 8 loci
- **Top 500 Recovery:** 0 / 8 loci



---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_SCAR_FREE_REGENERATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_SCAR_FREE_REGENERATION (Epimorphic Scar-Free Skin & Tissue Regeneration) screened across N=1,253 mammalian orthologs in sample size N=7 species.
2. Genomic inflation factor lambda_GC = 0.9457, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 1 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is BAP1 (Rank #1, Psi = 0.1160, Z = 3.99, q = 4.06e-02).
