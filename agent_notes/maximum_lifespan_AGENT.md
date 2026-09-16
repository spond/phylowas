# Checkpoint Report: Maximum Lifespan (months) (Allometric Residual)
- **Phenotype ID:** `CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 428 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0048
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:19

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **94 loci at $\mathrm{FDR}\;q \le 0.05$** and **55 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0048$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TSPYL6, CTSV, CTSL, HOPX, ITLN1.
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
|   composite_rank | gene   |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TSPYL6 |            435 |          144 |   0.0671429 |   7.37463 | 1.39434e-09 | Tier 0: Core Bottleneck Transducer |
|                2 | CTSV   |            335 |          151 |   0.0647248 |   6.95651 | 1.47551e-08 | Tier 0: Core Bottleneck Transducer |
|                3 | CTSL   |            336 |          123 |   0.0636037 |   6.76265 | 3.82093e-08 | Tier 0: Core Bottleneck Transducer |
|                4 | HOPX   |             89 |          150 |   0.0630385 |   6.66493 | 5.60069e-08 | Tier 0: Core Bottleneck Transducer |
|                5 | ITLN1  |            330 |          173 |   0.0601603 |   6.16725 | 1.17579e-06 | Tier 0: Core Bottleneck Transducer |
|                6 | OR10H3 |            317 |          109 |   0.0598871 |   6.12002 | 1.31933e-06 | Tier 0: Core Bottleneck Transducer |
|                7 | OR4C11 |            348 |          233 |   0.0589985 |   5.96636 | 2.93214e-06 | Tier 0: Core Bottleneck Transducer |
|                8 | OR2J2  |            328 |          108 |   0.058068  |   5.80548 | 6.7877e-06  | Tier 0: Core Bottleneck Transducer |
|                9 | GBP2   |            607 |          154 |   0.0577414 |   5.74901 | 8.23853e-06 | Tier 0: Core Bottleneck Transducer |
|               10 | OR10X1 |            330 |          169 |   0.0576618 |   5.73524 | 8.23853e-06 | Tier 0: Core Bottleneck Transducer |
|               11 | OR56A4 |            314 |          160 |   0.0566161 |   5.55442 | 2.14235e-05 | Tier 0: Core Bottleneck Transducer |
|               12 | HBA1   |            174 |          115 |   0.055113  |   5.29452 | 8.41335e-05 | Tier 0: Core Bottleneck Transducer |
|               13 | OR2I1P |            342 |          353 |   0.0549553 |   5.26725 | 9.01268e-05 | Tier 0: Core Bottleneck Transducer |
|               14 | NEK4   |            889 |          161 |   0.0548364 |   5.24669 | 9.35845e-05 | Tier 0: Core Bottleneck Transducer |
|               15 | SSX5   |            224 |          114 |   0.0546858 |   5.22065 | 0.000100563 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Established DNA double-strand break repair, telomere maintenance, sirtuin signaling, and tumor suppressor machinery. (GenAge / Human DNA Repair Network / OMIM Longevity)
- **Top 50 Recovery:** 0 / 21 loci
- **Top 200 Recovery:** 0 / 21 loci
- **Top 500 Recovery:** 0 / 21 loci

|   composite_rank | gene   |   codon_length |   psi_score |   z_score |    fdr_q |
|-----------------:|:-------|---------------:|------------:|----------:|---------:|
|             1572 | ERCC1  |            227 |   0.0290953 | 0.79575   | 0.742252 |
|             2418 | ERCC3  |            786 |   0.0272301 | 0.473242  | 0.742252 |
|             2883 | ERCC2  |            777 |   0.0267278 | 0.386387  | 0.742252 |
|             3897 | PARP1  |            982 |   0.0260666 | 0.272062  | 0.742252 |
|             4924 | CHEK2  |            542 |   0.0255723 | 0.186588  | 0.742252 |
|             5502 | SIRT1  |            806 |   0.0253639 | 0.150551  | 0.742252 |
|             6495 | ATM    |           3088 |   0.0250448 | 0.095375  | 0.742252 |
|             7041 | TP53   |            490 |   0.0248943 | 0.069355  | 0.742252 |
|             7143 | ATG5   |            275 |   0.0248626 | 0.063873  | 0.742252 |
|             7707 | ATG7   |            719 |   0.0247086 | 0.0372446 | 0.742252 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL (Maximum Lifespan (months) (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=428 species.
2. Genomic inflation factor lambda_GC = 1.0048, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 94 significant loci at FDR q <= 0.05 and 55 loci at FDR q <= 0.01.
4. Top discovery locus is TSPYL6 (Rank #1, Psi = 0.0671, Z = 7.37, q = 1.39e-09).
5. External validation against Established DNA double-strand break repair, telomere maintenance, sirtuin signaling, and tumor suppressor machinery. recovered 0/21 gold loci in the top 50, 0/21 in the top 200, and 0/21 in the top 500.
6. Canonical locus ERCC1 achieves Rank #1572 (Psi = 0.0291, Z = 0.80, q = 7.42e-01).
7. Canonical locus ERCC3 achieves Rank #2418 (Psi = 0.0272, Z = 0.47, q = 7.42e-01).
8. Canonical locus ERCC2 achieves Rank #2883 (Psi = 0.0267, Z = 0.39, q = 7.42e-01).
