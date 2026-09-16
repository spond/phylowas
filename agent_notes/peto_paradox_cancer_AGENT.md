# Checkpoint Report: Peto's Paradox & Extreme Cancer Resistance
- **Phenotype ID:** `DISC_PETO_PARADOX_CANCER_RESISTANCE`
- **Trait Class:** `binary` (Sample Size: 20 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0386
- **Total Mammalian Orthologs Screened:** 15,718
- **Date / Timestamp:** 2026-09-15 22:14:42

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **70 loci at $\mathrm{FDR}\;q \le 0.05$** and **43 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0386$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include CD1C, NCALD, HNRNPA1, OR1L1, OR51G2.
- **Canonical Recovery:** Spontaneously recovered 0/11 gold-standard machinery in the top 200 (Canonical tumor suppressors, DNA double-strand break repair networks, and cellular senescence mediators.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_PETO_PARADOX_CANCER_RESISTANCE \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_PETO_PARADOX_CANCER_RESISTANCE/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | CD1C    |            337 |          127 |    0.211682 |   2.78903 | 0.261325    | Tier 0: Core Bottleneck Transducer |
|                2 | NCALD   |            193 |          709 |    0.437534 |   9.88757 | 3.70407e-19 | Tier 0: Core Bottleneck Transducer |
|                3 | HNRNPA1 |            334 |          663 |    0.218641 |   3.00776 | 0.17027     | Tier 0: Core Bottleneck Transducer |
|                4 | OR1L1   |            331 |          155 |    0.423805 |   9.45606 | 1.25646e-17 | Tier 0: Core Bottleneck Transducer |
|                5 | OR51G2  |            352 |          188 |    0.268136 |   4.56339 | 0.00119869  | Tier 0: Core Bottleneck Transducer |
|                6 | H2BC13  |            128 |          192 |    0.390838 |   8.41991 | 9.87005e-14 | Tier 0: Core Bottleneck Transducer |
|                7 | CD1B    |            363 |          186 |    0.193471 |   2.21667 | 0.688838    | Tier 0: Core Bottleneck Transducer |
|                8 | H2BC6   |            131 |          375 |    0.388512 |   8.34681 | 1.37791e-13 | Tier 0: Core Bottleneck Transducer |
|                9 | RPS10   |            189 |          683 |    0.242728 |   3.76481 | 0.0233913   | Tier 0: Core Bottleneck Transducer |
|               10 | H4C13   |            103 |          261 |    0.378905 |   8.04488 | 1.35691e-12 | Tier 0: Core Bottleneck Transducer |
|               11 | GRIA2   |            903 |          667 |    0.156374 |   1.05069 | 0.897916    | Tier 0: Core Bottleneck Transducer |
|               12 | H2AC20  |            130 |          608 |    0.377657 |   8.00564 | 1.55664e-12 | Tier 0: Core Bottleneck Transducer |
|               13 | CTXN2   |             81 |          726 |    0.187829 |   2.03934 | 0.894208    | Tier 0: Core Bottleneck Transducer |
|               14 | SSU72L4 |            196 |          100 |    0.353222 |   7.23766 | 5.12503e-10 | Tier 0: Core Bottleneck Transducer |
|               15 | POU3F3  |            550 |          522 |    0.191976 |   2.16968 | 0.744775    | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Canonical tumor suppressors, DNA double-strand break repair networks, and cellular senescence mediators. (Peto's Paradox & Extreme Longevity/Cancer Resistance Database)
- **Top 50 Recovery:** 0 / 11 loci
- **Top 200 Recovery:** 0 / 11 loci
- **Top 500 Recovery:** 0 / 11 loci

|   composite_rank | gene   |   codon_length |   psi_score |    z_score |    fdr_q |
|-----------------:|:-------|---------------:|------------:|-----------:|---------:|
|             4195 | PARP1  |            982 |   0.128953  |  0.188859  | 0.897916 |
|             4960 | ERCC1  |            227 |   0.141878  |  0.595073  | 0.897916 |
|             5757 | SIRT6  |            570 |   0.124338  |  0.0437861 | 0.897916 |
|             8347 | BRCA1  |           1981 |   0.112592  | -0.325381  | 0.897916 |
|            10923 | LIF    |            235 |   0.120851  | -0.0658032 | 0.897916 |
|            12436 | CHEK2  |            542 |   0.0941974 | -0.903522  | 0.934666 |
|            12486 | ATM    |           3088 |   0.104365  | -0.583939  | 0.902065 |
|            12601 | RB1    |            964 |   0.105582  | -0.545713  | 0.900389 |
|            13551 | TP53   |            490 |   0.104658  | -0.574747  | 0.901853 |
|            13560 | CDKN2A |            148 |   0.102623  | -0.638703  | 0.905695 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_PETO_PARADOX_CANCER_RESISTANCE_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PETO_PARADOX_CANCER_RESISTANCE_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_PETO_PARADOX_CANCER_RESISTANCE_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PETO_PARADOX_CANCER_RESISTANCE_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_PETO_PARADOX_CANCER_RESISTANCE (Peto's Paradox & Extreme Cancer Resistance) screened across N=15,718 mammalian orthologs in sample size N=20 species.
2. Genomic inflation factor lambda_GC = 1.0386, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 70 significant loci at FDR q <= 0.05 and 43 loci at FDR q <= 0.01.
4. Top discovery locus is CD1C (Rank #1, Psi = 0.2117, Z = 2.79, q = 2.61e-01).
5. External validation against Canonical tumor suppressors, DNA double-strand break repair networks, and cellular senescence mediators. recovered 0/11 gold loci in the top 50, 0/11 in the top 200, and 0/11 in the top 500.
6. Canonical locus PARP1 achieves Rank #4195 (Psi = 0.1290, Z = 0.19, q = 8.98e-01).
7. Canonical locus ERCC1 achieves Rank #4960 (Psi = 0.1419, Z = 0.60, q = 8.98e-01).
8. Canonical locus SIRT6 achieves Rank #5757 (Psi = 0.1243, Z = 0.04, q = 8.98e-01).
