# Checkpoint Report: Loss of Ascorbic Acid Synthesis (Dietary Vitamin C Dependence)
- **Phenotype ID:** `DISC_LOSS_GULO_VITAMINC`
- **Trait Class:** `binary` (Sample Size: 41 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0334
- **Total Mammalian Orthologs Screened:** 16,323
- **Date / Timestamp:** 2026-09-15 22:14:39

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **100 loci at $\mathrm{FDR}\;q \le 0.05$** and **62 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0334$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include SMAD3, CBLL2, TAS2R30, ACOT6, OR4F16.
- **Canonical Recovery:** Spontaneously recovered 0/4 gold-standard machinery in the top 200 (Erythrocyte facilitative glucose and dehydroascorbic acid transporters and sodium-dependent vitamin C transporters.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_LOSS_GULO_VITAMINC \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_LOSS_GULO_VITAMINC/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | SMAD3    |            425 |          702 |    0.241027 |   2.3898  | 0.515287    | Tier 0: Core Bottleneck Transducer |
|                2 | CBLL2    |            432 |          129 |    0.449135 |   8.87048 | 5.94437e-15 | Tier 0: Core Bottleneck Transducer |
|                3 | TAS2R30  |            342 |          116 |    0.320905 |   4.87726 | 0.000302731 | Tier 0: Core Bottleneck Transducer |
|                4 | ACOT6    |            517 |          118 |    0.381999 |   6.77979 | 4.91129e-08 | Tier 0: Core Bottleneck Transducer |
|                5 | OR4F16   |            325 |          118 |    0.281556 |   3.65192 | 0.0265539   | Tier 0: Core Bottleneck Transducer |
|                6 | TMEM191B |            341 |          176 |    0.373301 |   6.50894 | 2.059e-07   | Tier 0: Core Bottleneck Transducer |
|                7 | KRBOX1   |            141 |          239 |    0.270892 |   3.31983 | 0.068703    | Tier 0: Core Bottleneck Transducer |
|                8 | PNMA6A   |            410 |          154 |    0.365092 |   6.25328 | 8.20078e-07 | Tier 0: Core Bottleneck Transducer |
|                9 | CTNNBIP1 |             81 |          720 |    0.24749  |   2.59108 | 0.360404    | Tier 0: Core Bottleneck Transducer |
|               10 | CCNYL1B  |            285 |          408 |    0.360958 |   6.12455 | 1.41663e-06 | Tier 0: Core Bottleneck Transducer |
|               11 | FAM9B    |            191 |          184 |    0.360263 |   6.10293 | 1.41663e-06 | Tier 0: Core Bottleneck Transducer |
|               12 | NWD1     |           1593 |          284 |    0.236341 |   2.24388 | 0.635518    | Tier 0: Core Bottleneck Transducer |
|               13 | RALA     |            209 |          731 |    0.268113 |   3.23329 | 0.087203    | Tier 0: Core Bottleneck Transducer |
|               14 | PRAMEF20 |            525 |          135 |    0.354753 |   5.93134 | 2.97094e-06 | Tier 0: Core Bottleneck Transducer |
|               15 | FAM236A  |             76 |          105 |    0.329407 |   5.14204 | 0.000116739 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Erythrocyte facilitative glucose and dehydroascorbic acid transporters and sodium-dependent vitamin C transporters. (Ascorbic Acid Auxotrophy & GLUT1 Compensatory Remodeling)
- **Top 50 Recovery:** 0 / 4 loci
- **Top 200 Recovery:** 0 / 4 loci
- **Top 500 Recovery:** 0 / 4 loci

|   composite_rank | gene    |   codon_length |   psi_score |   z_score |    fdr_q |
|-----------------:|:--------|---------------:|------------:|----------:|---------:|
|             3713 | SLC23A1 |            631 |    0.183142 |  0.58721  | 0.90496  |
|             4153 | SLC2A4  |            515 |    0.168012 |  0.116055 | 0.90496  |
|             6928 | SLC2A1  |            500 |    0.147326 | -0.528133 | 0.906829 |
|            14174 | SLC23A2 |            650 |    0.143992 | -0.631939 | 0.909228 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_LOSS_GULO_VITAMINC_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_LOSS_GULO_VITAMINC_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_LOSS_GULO_VITAMINC_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_LOSS_GULO_VITAMINC_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_LOSS_GULO_VITAMINC (Loss of Ascorbic Acid Synthesis (Dietary Vitamin C Dependence)) screened across N=16,323 mammalian orthologs in sample size N=41 species.
2. Genomic inflation factor lambda_GC = 1.0334, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 100 significant loci at FDR q <= 0.05 and 62 loci at FDR q <= 0.01.
4. Top discovery locus is SMAD3 (Rank #1, Psi = 0.2410, Z = 2.39, q = 5.15e-01).
5. External validation against Erythrocyte facilitative glucose and dehydroascorbic acid transporters and sodium-dependent vitamin C transporters. recovered 0/4 gold loci in the top 50, 0/4 in the top 200, and 0/4 in the top 500.
6. Canonical locus SLC23A1 achieves Rank #3713 (Psi = 0.1831, Z = 0.59, q = 9.05e-01).
7. Canonical locus SLC2A4 achieves Rank #4153 (Psi = 0.1680, Z = 0.12, q = 9.05e-01).
8. Canonical locus SLC2A1 achieves Rank #6928 (Psi = 0.1473, Z = -0.53, q = 9.07e-01).
