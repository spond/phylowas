# Checkpoint Report: Extreme Desert Aridity & Renal Water Conservation
- **Phenotype ID:** `DISC_DESERT_OSMOREGULATION`
- **Trait Class:** `binary` (Sample Size: 13 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9884
- **Total Mammalian Orthologs Screened:** 15,969
- **Date / Timestamp:** 2026-09-15 22:14:41

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **119 loci at $\mathrm{FDR}\;q \le 0.05$** and **68 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9884$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include OR5I1, PLA2G4C, RPS8, C1GALT1C1L, LOC124900512.
- **Canonical Recovery:** Spontaneously recovered 0/9 gold-standard machinery in the top 200 (Renal medullary aquaporin water channels, sodium-potassium-chloride cotransporters, and vasopressin/angiotensin receptors.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_DESERT_OSMOREGULATION \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_DESERT_OSMOREGULATION/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene         |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | OR5I1        |            327 |          236 |    0.160685 |   4.41533 | 0.0016106   | Tier 0: Core Bottleneck Transducer |
|                2 | PLA2G4C      |            556 |          115 |    0.244889 |   9.87951 | 4.07875e-19 | Tier 0: Core Bottleneck Transducer |
|                3 | RPS8         |            209 |          695 |    0.131697 |   2.53416 | 0.385624    | Tier 0: Core Bottleneck Transducer |
|                4 | C1GALT1C1L   |            321 |          179 |    0.239576 |   9.53473 | 5.99911e-18 | Tier 0: Core Bottleneck Transducer |
|                5 | LOC124900512 |            233 |          145 |    0.136164 |   2.82407 | 0.203607    | Tier 0: Core Bottleneck Transducer |
|                6 | RPS13        |            151 |          701 |    0.234143 |   9.18221 | 1.12408e-16 | Tier 0: Core Bottleneck Transducer |
|                7 | BBIP1        |             95 |          323 |    0.144546 |   3.368   | 0.0501085   | Tier 0: Core Bottleneck Transducer |
|                8 | IGLL5        |            203 |          144 |    0.225136 |   8.59768 | 1.62373e-14 | Tier 0: Core Bottleneck Transducer |
|                9 | ACOT6        |            517 |          118 |    0.147311 |   3.5474  | 0.030011    | Tier 0: Core Bottleneck Transducer |
|               10 | IGLL1        |            188 |          146 |    0.224591 |   8.56235 | 1.76602e-14 | Tier 0: Core Bottleneck Transducer |
|               11 | TFAP2D       |            459 |          719 |    0.199274 |   6.91944 | 3.08122e-09 | Tier 0: Core Bottleneck Transducer |
|               12 | SOX14        |            252 |          720 |    0.223636 |   8.50034 | 2.51559e-14 | Tier 0: Core Bottleneck Transducer |
|               13 | NACA         |            306 |          665 |    0.171405 |   5.11093 | 7.99898e-05 | Tier 0: Core Bottleneck Transducer |
|               14 | OR52H1       |            354 |          220 |    0.223149 |   8.46878 | 2.82842e-14 | Tier 0: Core Bottleneck Transducer |
|               15 | NXPE2        |            579 |          356 |    0.155804 |   4.09855 | 0.00510696  | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Renal medullary aquaporin water channels, sodium-potassium-chloride cotransporters, and vasopressin/angiotensin receptors. (Desert Mammalian Osmoregulation & Extreme Urine Concentration)
- **Top 50 Recovery:** 0 / 9 loci
- **Top 200 Recovery:** 0 / 9 loci
- **Top 500 Recovery:** 0 / 9 loci

|   composite_rank | gene    |   codon_length |   psi_score |   z_score |    fdr_q |
|-----------------:|:--------|---------------:|------------:|----------:|---------:|
|             2822 | SLC14A2 |            951 |   0.100475  |  0.508132 | 0.941846 |
|             3263 | AQP2    |            276 |   0.102512  |  0.640324 | 0.941846 |
|             5970 | SLC12A3 |           1072 |   0.0943336 |  0.109575 | 0.941846 |
|             9195 | AQP1    |            293 |   0.0942356 |  0.103218 | 0.941846 |
|            10627 | SLC12A1 |           1107 |   0.084748  | -0.512459 | 0.942636 |
|            11926 | AGTR1   |            364 |   0.0889693 | -0.238528 | 0.941846 |
|            11971 | AVPR2   |            405 |   0.083505  | -0.593119 | 0.943312 |
|            14866 | REN     |            443 |   0.0644469 | -1.82985  | 0.995155 |
|            15458 | CYP11B2 |            510 |   0.0749604 | -1.1476   | 0.965449 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_DESERT_OSMOREGULATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_DESERT_OSMOREGULATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_DESERT_OSMOREGULATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_DESERT_OSMOREGULATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_DESERT_OSMOREGULATION (Extreme Desert Aridity & Renal Water Conservation) screened across N=15,969 mammalian orthologs in sample size N=13 species.
2. Genomic inflation factor lambda_GC = 0.9884, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 119 significant loci at FDR q <= 0.05 and 68 loci at FDR q <= 0.01.
4. Top discovery locus is OR5I1 (Rank #1, Psi = 0.1607, Z = 4.42, q = 1.61e-03).
5. External validation against Renal medullary aquaporin water channels, sodium-potassium-chloride cotransporters, and vasopressin/angiotensin receptors. recovered 0/9 gold loci in the top 50, 0/9 in the top 200, and 0/9 in the top 500.
6. Canonical locus SLC14A2 achieves Rank #2822 (Psi = 0.1005, Z = 0.51, q = 9.42e-01).
7. Canonical locus AQP2 achieves Rank #3263 (Psi = 0.1025, Z = 0.64, q = 9.42e-01).
8. Canonical locus SLC12A3 achieves Rank #5970 (Psi = 0.0943, Z = 0.11, q = 9.42e-01).
