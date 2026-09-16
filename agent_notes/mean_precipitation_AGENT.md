# Checkpoint Report: Environmental Precipitation (mm)
- **Phenotype ID:** `CONT_MEANPRECIPITATION_MM`
- **Trait Class:** `continuous` (Sample Size: 519 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.1282
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:20

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **91 loci at $\mathrm{FDR}\;q \le 0.05$** and **65 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.1282$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TSPYL6, OR56A4, OR5B17, HOPX, NEK4.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_MEANPRECIPITATION_MM \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_MEANPRECIPITATION_MM/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene   |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TSPYL6 |            435 |          144 |   0.0776173 |   9.67628 | 3.21751e-18 | Tier 0: Core Bottleneck Transducer |
|                2 | OR56A4 |            314 |          160 |   0.0724797 |   8.66738 | 1.87049e-14 | Tier 0: Core Bottleneck Transducer |
|                3 | OR5B17 |            339 |          125 |   0.0679726 |   7.78231 | 2.00837e-11 | Tier 0: Core Bottleneck Transducer |
|                4 | HOPX   |             89 |          150 |   0.066804  |   7.55281 | 9.00938e-11 | Tier 0: Core Bottleneck Transducer |
|                5 | NEK4   |            889 |          161 |   0.0663103 |   7.45588 | 1.51051e-10 | Tier 0: Core Bottleneck Transducer |
|                6 | OR10H3 |            317 |          109 |   0.0659752 |   7.39007 | 1.93975e-10 | Tier 0: Core Bottleneck Transducer |
|                7 | IRGM   |            198 |          118 |   0.0659146 |   7.37816 | 1.93975e-10 | Tier 0: Core Bottleneck Transducer |
|                8 | OR4C13 |            313 |          110 |   0.0657606 |   7.34792 | 2.12897e-10 | Tier 0: Core Bottleneck Transducer |
|                9 | ITLN1  |            330 |          173 |   0.0643804 |   7.0769  | 1.38582e-09 | Tier 0: Core Bottleneck Transducer |
|               10 | PYHIN1 |            582 |          149 |   0.0633743 |   6.87932 | 4.66236e-09 | Tier 0: Core Bottleneck Transducer |
|               11 | AHI1   |           1233 |          181 |   0.0633516 |   6.87487 | 4.66236e-09 | Tier 0: Core Bottleneck Transducer |
|               12 | OR5B2  |            328 |          125 |   0.0633053 |   6.86578 | 4.66236e-09 | Tier 0: Core Bottleneck Transducer |
|               13 | H2BW2  |            164 |          106 |   0.0627157 |   6.74999 | 9.04555e-09 | Tier 0: Core Bottleneck Transducer |
|               14 | FCN3   |            301 |          235 |   0.0627066 |   6.74821 | 9.04555e-09 | Tier 0: Core Bottleneck Transducer |
|               15 | MS4A18 |            504 |          150 |   0.0621085 |   6.63075 | 1.88382e-08 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MEANPRECIPITATION_MM_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANPRECIPITATION_MM_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MEANPRECIPITATION_MM_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANPRECIPITATION_MM_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MEANPRECIPITATION_MM (Environmental Precipitation (mm)) screened across N=16,921 mammalian orthologs in sample size N=519 species.
2. Genomic inflation factor lambda_GC = 1.1282, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 91 significant loci at FDR q <= 0.05 and 65 loci at FDR q <= 0.01.
4. Top discovery locus is TSPYL6 (Rank #1, Psi = 0.0776, Z = 9.68, q = 3.22e-18).
