# Checkpoint Report: Geographic Range Size (km2)
- **Phenotype ID:** `CONT_GEOGRAPHICRANGE_KM2`
- **Trait Class:** `continuous` (Sample Size: 520 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.8493
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:24

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **52 loci at $\mathrm{FDR}\;q \le 0.05$** and **19 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.8493$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TOMM20L, FCGR3B, C3orf49, PNPLA5, RPRML.


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
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TOMM20L |            213 |          565 |   0.0273649 |   6.77446 | 1.01824e-07 | Tier 0: Core Bottleneck Transducer |
|                2 | FCGR3B  |            241 |          584 |   0.026859  |   6.67892 | 1.01824e-07 | Tier 0: Core Bottleneck Transducer |
|                3 | C3orf49 |            329 |          583 |   0.0245154 |   6.20991 | 1.49507e-06 | Tier 0: Core Bottleneck Transducer |
|                4 | PNPLA5  |            457 |          575 |   0.0223518 |   5.77485 | 1.62912e-05 | Tier 0: Core Bottleneck Transducer |
|                5 | RPRML   |            121 |          590 |   0.0217373 |   5.65631 | 2.61699e-05 | Tier 0: Core Bottleneck Transducer |
|                6 | THAP3   |            272 |          593 |   0.0211679 |   5.54328 | 4.18592e-05 | Tier 0: Core Bottleneck Transducer |
|                7 | BTNL2   |            506 |          554 |   0.0209091 |   5.47991 | 5.14333e-05 | Tier 0: Core Bottleneck Transducer |
|                8 | SERHL2  |            349 |          551 |   0.0195638 |   5.20992 | 0.000199799 | Tier 0: Core Bottleneck Transducer |
|                9 | TPD52L3 |            147 |          476 |   0.0194547 |   5.16169 | 0.000230057 | Tier 0: Core Bottleneck Transducer |
|               10 | IQCF3   |            192 |          588 |   0.0183696 |   4.98219 | 0.000531889 | Tier 0: Core Bottleneck Transducer |
|               11 | DISC1   |            922 |          553 |   0.0181926 |   4.93631 | 0.000556318 | Tier 0: Core Bottleneck Transducer |
|               12 | BMAL2   |            655 |          505 |   0.0182277 |   4.9272  | 0.000556318 | Tier 0: Core Bottleneck Transducer |
|               13 | SLX4IP  |            447 |          576 |   0.0180882 |   4.92242 | 0.000556318 | Tier 0: Core Bottleneck Transducer |
|               14 | PPDPFL  |            113 |          510 |   0.0175597 |   4.79538 | 0.00098122  | Tier 0: Core Bottleneck Transducer |
|               15 | C9orf50 |            518 |          525 |   0.0172021 |   4.72907 | 0.00122857  | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 0.8493, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 52 significant loci at FDR q <= 0.05 and 19 loci at FDR q <= 0.01.
4. Top discovery locus is TOMM20L (Rank #1, Psi = 0.0274, Z = 6.77, q = 1.02e-07).
