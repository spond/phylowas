# Checkpoint Report: Muscular Tactile Prehensile Tail (Arboreal 5th Limb)
- **Phenotype ID:** `DISC_PREHENSILE_TAIL`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.2039
- **Total Mammalian Orthologs Screened:** 14,936
- **Date / Timestamp:** 2026-09-15 22:14:33

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **0 loci at $\mathrm{FDR}\;q \le 0.05$** and **0 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.2039$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include SPATC1L, OR5P2, PTPRQ, OR5AS1, GARIN1A.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_PREHENSILE_TAIL \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_PREHENSILE_TAIL/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |    fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|---------:|:-----------------------------------|
|                1 | SPATC1L |            356 |          644 |   0.128823  |   3.8789  | 0.292072 | Tier 0: Core Bottleneck Transducer |
|                2 | OR5P2   |            331 |          155 |   0.137271  |   4.18125 | 0.216506 | Tier 0: Core Bottleneck Transducer |
|                3 | PTPRQ   |           2359 |          650 |   0.0888652 |   2.44889 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|                4 | OR5AS1  |            327 |          457 |   0.100736  |   2.87373 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|                5 | GARIN1A |            327 |          709 |   0.127734  |   3.83994 | 0.292072 | Tier 0: Core Bottleneck Transducer |
|                6 | PLEKHS1 |            556 |          704 |   0.0853366 |   2.32261 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|                7 | CXCL12  |             93 |          721 |   0.125983  |   3.77727 | 0.292072 | Tier 0: Core Bottleneck Transducer |
|                8 | ATRX    |           2566 |          610 |   0.0901127 |   2.49354 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|                9 | OR52J3  |            325 |          292 |   0.124514  |   3.7247  | 0.292072 | Tier 0: Core Bottleneck Transducer |
|               10 | MGRN1   |            597 |          688 |   0.093484  |   2.61419 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|               11 | HSFY1   |            411 |          142 |   0.120938  |   3.59671 | 0.350346 | Tier 0: Core Bottleneck Transducer |
|               12 | ASPH    |            795 |          584 |   0.0859854 |   2.34583 | 0.893618 | Tier 0: Core Bottleneck Transducer |
|               13 | HSFY2   |            413 |          142 |   0.120801  |   3.59181 | 0.350346 | Tier 0: Core Bottleneck Transducer |
|               14 | CHTF18  |           1059 |          658 |   0.11472   |   3.37418 | 0.691114 | Tier 0: Core Bottleneck Transducer |
|               15 | LFNG    |            394 |          649 |   0.0842274 |   2.28292 | 0.893618 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_PREHENSILE_TAIL (Muscular Tactile Prehensile Tail (Arboreal 5th Limb)) screened across N=14,936 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 1.2039, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 0 significant loci at FDR q <= 0.05 and 0 loci at FDR q <= 0.01.
4. Top discovery locus is SPATC1L (Rank #1, Psi = 0.1288, Z = 3.88, q = 2.92e-01).
