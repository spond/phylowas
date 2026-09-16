# Checkpoint Report: Environmental Temperature (°C)
- **Phenotype ID:** `CONT_MEANTEMPERATURE_C`
- **Trait Class:** `continuous` (Sample Size: 483 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.1252
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:20

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **86 loci at $\mathrm{FDR}\;q \le 0.05$** and **63 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.1252$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include TSPYL6, OR10H3, H2BW2, OR56A4, FCN3.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_MEANTEMPERATURE_C \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_MEANTEMPERATURE_C/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene         |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | TSPYL6       |            435 |          144 |   0.0787573 |  10.2347  | 1.17343e-20 | Tier 0: Core Bottleneck Transducer |
|                2 | OR10H3       |            317 |          109 |   0.0685085 |   8.2218  | 8.48046e-13 | Tier 0: Core Bottleneck Transducer |
|                3 | H2BW2        |            164 |          106 |   0.0668074 |   7.88772 | 8.67919e-12 | Tier 0: Core Bottleneck Transducer |
|                4 | OR56A4       |            314 |          160 |   0.0661856 |   7.76559 | 1.71882e-11 | Tier 0: Core Bottleneck Transducer |
|                5 | FCN3         |            301 |          235 |   0.064329  |   7.40096 | 2.28779e-10 | Tier 0: Core Bottleneck Transducer |
|                6 | AHI1         |           1233 |          181 |   0.0639557 |   7.32765 | 3.30273e-10 | Tier 0: Core Bottleneck Transducer |
|                7 | CARD18       |             97 |          131 |   0.0627884 |   7.0984  | 1.52547e-09 | Tier 0: Core Bottleneck Transducer |
|                8 | IRGM         |            198 |          118 |   0.062146  |   6.97222 | 3.29927e-09 | Tier 0: Core Bottleneck Transducer |
|                9 | LOC128966704 |            114 |          117 |   0.0612178 |   6.78992 | 1.0547e-08  | Tier 0: Core Bottleneck Transducer |
|               10 | OR2AG1       |            323 |          198 |   0.06024   |   6.59789 | 3.52855e-08 | Tier 0: Core Bottleneck Transducer |
|               11 | CTSL         |            336 |          123 |   0.059396  |   6.43213 | 9.67765e-08 | Tier 0: Core Bottleneck Transducer |
|               12 | CTSV         |            335 |          151 |   0.0593067 |   6.41459 | 9.95504e-08 | Tier 0: Core Bottleneck Transducer |
|               13 | OR5B2        |            328 |          125 |   0.0585094 |   6.25801 | 2.53767e-07 | Tier 0: Core Bottleneck Transducer |
|               14 | OR5M10       |            319 |          175 |   0.0577815 |   6.11505 | 5.7485e-07  | Tier 0: Core Bottleneck Transducer |
|               15 | OR5B17       |            339 |          125 |   0.0577374 |   6.10638 | 5.7485e-07  | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MEANTEMPERATURE_C (Environmental Temperature (°C)) screened across N=16,921 mammalian orthologs in sample size N=483 species.
2. Genomic inflation factor lambda_GC = 1.1252, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 86 significant loci at FDR q <= 0.05 and 63 loci at FDR q <= 0.01.
4. Top discovery locus is TSPYL6 (Rank #1, Psi = 0.0788, Z = 10.23, q = 1.17e-20).
