# Checkpoint Report: Bipedal Saltatory Hopping Locomotion
- **Phenotype ID:** `DISC_BIPEDAL_SALTATION`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9419
- **Total Mammalian Orthologs Screened:** 11,127
- **Date / Timestamp:** 2026-09-15 22:14:33

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **47 loci at $\mathrm{FDR}\;q \le 0.05$** and **25 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9419$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include HYAL3, CEP295NL, FGL2, SERPINC1, ASTL.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_BIPEDAL_SALTATION \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_BIPEDAL_SALTATION/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | HYAL3    |            421 |          682 |    0.170702 |   6.50826 | 4.22969e-07 | Tier 0: Core Bottleneck Transducer |
|                2 | CEP295NL |            528 |          241 |    0.134655 |   4.91102 | 0.00121724  | Tier 0: Core Bottleneck Transducer |
|                3 | FGL2     |            470 |          708 |    0.15767  |   5.93083 | 8.38423e-06 | Tier 0: Core Bottleneck Transducer |
|                4 | SERPINC1 |            481 |          715 |    0.126296 |   4.54067 | 0.00311972  | Tier 0: Core Bottleneck Transducer |
|                5 | ASTL     |            482 |          658 |    0.1392   |   5.11242 | 0.000589828 | Tier 0: Core Bottleneck Transducer |
|                6 | SQLE     |            621 |          712 |    0.120709 |   4.29311 | 0.00544557  | Tier 0: Core Bottleneck Transducer |
|                7 | IZUMO1R  |            262 |          702 |    0.133818 |   4.87394 | 0.00121724  | Tier 0: Core Bottleneck Transducer |
|                8 | DNASE2B  |            373 |          686 |    0.129625 |   4.68815 | 0.00173276  | Tier 0: Core Bottleneck Transducer |
|                9 | TM2D2    |            219 |          716 |    0.132171 |   4.80098 | 0.00146404  | Tier 0: Core Bottleneck Transducer |
|               10 | ENO2     |            450 |          705 |    0.121021 |   4.30691 | 0.00541792  | Tier 0: Core Bottleneck Transducer |
|               11 | TNNC1    |            161 |          717 |    0.12168  |   4.33612 | 0.00523286  | Tier 0: Core Bottleneck Transducer |
|               12 | CST7     |            148 |          707 |    0.12959  |   4.68663 | 0.00173276  | Tier 0: Core Bottleneck Transducer |
|               13 | CYSLTR2  |            363 |          679 |    0.129548 |   4.68475 | 0.00173276  | Tier 0: Core Bottleneck Transducer |
|               14 | RRP36    |            292 |          707 |    0.115083 |   4.04382 | 0.0112528   | Tier 0: Core Bottleneck Transducer |
|               15 | MSANTD2  |            609 |          643 |    0.108188 |   3.73831 | 0.030315    | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_BIPEDAL_SALTATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_BIPEDAL_SALTATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_BIPEDAL_SALTATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_BIPEDAL_SALTATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_BIPEDAL_SALTATION (Bipedal Saltatory Hopping Locomotion) screened across N=11,127 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 0.9419, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 47 significant loci at FDR q <= 0.05 and 25 loci at FDR q <= 0.01.
4. Top discovery locus is HYAL3 (Rank #1, Psi = 0.1707, Z = 6.51, q = 4.23e-07).
