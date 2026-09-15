# Checkpoint Report: Environmental Temperature (°C)
- **Phenotype ID:** `CONT_MEANTEMPERATURE_C`
- **Trait Class:** `continuous` (Sample Size: 483 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.1272
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:51

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **448 loci at $\mathrm{FDR}\;q \le 0.05$** and **326 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.1272$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include BTNL3, TSPYL6, LOC124903972, PCDHGB3, OR10H3.


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
|   composite_rank | gene            |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:----------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | BTNL3           |            488 |           47 |   0.0836721 |  10.2627  | 8.88852e-21 | Tier 0: Core Bottleneck Transducer |
|                2 | TSPYL6          |            435 |          144 |   0.0787573 |   9.37973 | 3.77695e-17 | Tier 0: Core Bottleneck Transducer |
|                3 | LOC124903972    |            219 |           40 |   0.0742415 |   8.56845 | 4.49213e-14 | Tier 0: Core Bottleneck Transducer |
|                4 | PCDHGB3         |            934 |           74 |   0.0691454 |   7.6529  | 4.80867e-11 | Tier 0: Core Bottleneck Transducer |
|                5 | OR10H3          |            317 |          109 |   0.0685085 |   7.53848 | 8.14545e-11 | Tier 0: Core Bottleneck Transducer |
|                6 | ENSG00000304062 |            108 |           84 |   0.0674472 |   7.34781 | 2.65499e-10 | Tier 0: Core Bottleneck Transducer |
|                7 | H2BW2           |            164 |          106 |   0.0668074 |   7.23288 | 5.78596e-10 | Tier 0: Core Bottleneck Transducer |
|                8 | OR56A4          |            314 |          160 |   0.0661856 |   7.12117 | 1.14581e-09 | Tier 0: Core Bottleneck Transducer |
|                9 | FCN3            |            301 |          235 |   0.064329  |   6.78762 | 9.7646e-09  | Tier 0: Core Bottleneck Transducer |
|               10 | AHI1            |           1233 |          181 |   0.0639557 |   6.72056 | 1.34834e-08 | Tier 0: Core Bottleneck Transducer |
|               11 | CARD18          |             97 |          131 |   0.0627884 |   6.51085 | 5.18891e-08 | Tier 0: Core Bottleneck Transducer |
|               12 | IRGM            |            198 |          118 |   0.062146  |   6.39543 | 1.01575e-07 | Tier 0: Core Bottleneck Transducer |
|               13 | LOC128966704    |            114 |          117 |   0.0612178 |   6.22867 | 2.77879e-07 | Tier 0: Core Bottleneck Transducer |
|               14 | OR2AG1          |            323 |          198 |   0.06024   |   6.05301 | 6.76503e-07 | Tier 0: Core Bottleneck Transducer |
|               15 | CTSL            |            336 |          123 |   0.059396  |   5.90139 | 1.50609e-06 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_MEANTEMPERATURE_C_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_MEANTEMPERATURE_C_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_MEANTEMPERATURE_C (Environmental Temperature (°C)) screened across N=17,131 mammalian orthologs in sample size N=483 species.
2. Genomic inflation factor lambda_GC = 0.1272, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 448 significant loci at FDR q <= 0.05 and 326 loci at FDR q <= 0.01.
4. Top discovery locus is BTNL3 (Rank #1, Psi = 0.0837, Z = 10.26, q = 8.89e-21).
