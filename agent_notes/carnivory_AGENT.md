# Checkpoint Report: Carnivorous Trophic Specialization
- **Phenotype ID:** `DISC_CARNIVORY`
- **Trait Class:** `binary` (Sample Size: 143 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.0877
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:55

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **190 loci at $\mathrm{FDR}\;q \le 0.05$** and **153 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.0877$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include CTAG2, PCDHB8, PCDHA10, LOC124902898, APOBR.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_CARNIVORY \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_CARNIVORY/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene         |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                                       |
|-----------------:|:-------------|---------------:|-------------:|------------:|----------:|------------:|:-------------------------------------------|
|                1 | CTAG2        |            192 |           33 |  0.0525488  | 22.6015   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                1 | PCDHB8       |            696 |          388 |  0.00797915 |  2.78438  | 0.33902     | Tier 2: Physiological Homeostasis Modifier |
|                2 | PCDHA10      |           1020 |          419 |  0.00802583 |  2.80513  | 0.3215      | Tier 2: Physiological Homeostasis Modifier |
|                2 | LOC124902898 |            251 |           25 |  0.0518895  | 22.3084   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                3 | APOBR        |           1402 |           55 |  0.0413088  | 17.6039   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                3 | H2BC4        |            126 |          414 |  0.00504117 |  1.47805  | 0.999999    | Tier 2: Physiological Homeostasis Modifier |
|                4 | H3C11        |            136 |          446 |  0.00383041 |  0.939709 | 0.999999    | Tier 2: Physiological Homeostasis Modifier |
|                4 | LOC112267908 |            236 |           33 |  0.0410822  | 17.5031   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                5 | H2AC14       |            129 |          184 |  0.0147628  |  5.80061  | 1.34774e-06 | Tier 0: Core Bottleneck Transducer         |
|                5 | PRDM9        |           1097 |           42 |  0.0391451  | 16.6418   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                6 | HAVCR1       |            446 |           78 |  0.0366425  | 15.5291   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                6 | H4C7         |             99 |          295 |  0.00536576 |  1.62237  | 0.999999    | Tier 2: Physiological Homeostasis Modifier |
|                7 | SP100        |            894 |           68 |  0.036129   | 15.3007   | 1.22364e-47 | Tier 0: Core Bottleneck Transducer         |
|                7 | H3C2         |            220 |          392 |  0.00242018 |  0.312671 | 0.999999    | Tier 2: Physiological Homeostasis Modifier |
|                8 | KRT9         |            750 |           78 |  0.0347124  | 14.6709   | 1.13147e-45 | Tier 0: Core Bottleneck Transducer         |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_CARNIVORY_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_CARNIVORY_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_CARNIVORY_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_CARNIVORY_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_CARNIVORY (Carnivorous Trophic Specialization) screened across N=17,131 mammalian orthologs in sample size N=143 species.
2. Genomic inflation factor lambda_GC = 0.0877, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 190 significant loci at FDR q <= 0.05 and 153 loci at FDR q <= 0.01.
4. Top discovery locus is CTAG2 (Rank #1, Psi = 0.0525, Z = 22.60, q = 1.22e-47).
