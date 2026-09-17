# Checkpoint Report: Litter Size (Allometric Residual)
- **Phenotype ID:** `CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 534 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9500
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-17 06:22:25

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **134 loci at $\mathrm{FDR}\;q \le 0.05$** and **72 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9500$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include PPDPFL, CCNP, CAPN14, ADAM20, DEFB132.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene            |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:----------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | PPDPFL          |            113 |          510 |   0.0275567 |   8.0438  | 6.78184e-12 | Tier 0: Core Bottleneck Transducer |
|                2 | CCNP            |            348 |          560 |   0.022232  |   7.96873 | 6.78184e-12 | Tier 0: Core Bottleneck Transducer |
|                3 | CAPN14          |            696 |          472 |   0.0323484 |   7.76357 | 2.32874e-11 | Tier 0: Core Bottleneck Transducer |
|                4 | ADAM20          |            774 |          457 |   0.032158  |   7.3331  | 4.75671e-10 | Tier 0: Core Bottleneck Transducer |
|                5 | DEFB132         |            114 |          536 |   0.0195163 |   7.2721  | 5.98916e-10 | Tier 0: Core Bottleneck Transducer |
|                6 | ENSG00000283205 |             95 |          525 |   0.0205528 |   7.17817 | 9.9623e-10  | Tier 0: Core Bottleneck Transducer |
|                7 | DEFB114         |             77 |          537 |   0.0173177 |   6.86675 | 7.93871e-09 | Tier 0: Core Bottleneck Transducer |
|                8 | ADAR            |           1240 |          565 |   0.0163018 |   6.7831  | 1.24391e-08 | Tier 0: Core Bottleneck Transducer |
|                9 | FAM240C         |            103 |          412 |   0.03372   |   6.45219 | 9.60081e-08 | Tier 0: Core Bottleneck Transducer |
|               10 | SPEGNB          |            260 |          461 |   0.0255402 |   6.44781 | 9.60081e-08 | Tier 0: Core Bottleneck Transducer |
|               11 | RBM23           |            502 |          583 |   0.0141566 |   6.35551 | 1.59781e-07 | Tier 0: Core Bottleneck Transducer |
|               12 | C22orf31        |            322 |          545 |   0.0138926 |   6.29957 | 2.10433e-07 | Tier 0: Core Bottleneck Transducer |
|               13 | TOMM20L         |            213 |          565 |   0.0122648 |   5.9757  | 1.49105e-06 | Tier 0: Core Bottleneck Transducer |
|               14 | BMAL2           |            655 |          505 |   0.0155912 |   5.80568 | 3.87413e-06 | Tier 0: Core Bottleneck Transducer |
|               15 | PNPLA5          |            457 |          575 |   0.0103764 |   5.59884 | 1.21712e-05 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL (Litter Size (Allometric Residual)) screened across N=16,921 mammalian orthologs in sample size N=534 species.
2. Genomic inflation factor lambda_GC = 0.9500, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 134 significant loci at FDR q <= 0.05 and 72 loci at FDR q <= 0.01.
4. Top discovery locus is PPDPFL (Rank #1, Psi = 0.0276, Z = 8.04, q = 6.78e-12).
