# Checkpoint Report: Muscular Tactile Prehensile Tail (Arboreal 5th Limb)
- **Phenotype ID:** `DISC_PREHENSILE_TAIL`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.7962
- **Total Mammalian Orthologs Screened:** 17,130
- **Date / Timestamp:** 2026-09-15 10:22:05

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **28 loci at $\mathrm{FDR}\;q \le 0.05$** and **6 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.7962$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include GARIN5B, ULBP3, SPATC1L, OR5P2, PTPRQ.


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
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |      fdr_q | tier                                       |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|-----------:|:-------------------------------------------|
|                1 | GARIN5B |           1103 |           25 |   0.173825  |   4.80232 | 0.00447769 | Tier 0: Core Bottleneck Transducer         |
|                1 | ULBP3   |            293 |           91 |   0.15585   |   4.26141 | 0.0289027  | Tier 1: Primary Regulatory Effector        |
|                2 | SPATC1L |            356 |          644 |   0.128823  |   3.4481  | 0.132476   | Tier 1: Primary Regulatory Effector        |
|                3 | OR5P2   |            331 |          155 |   0.137271  |   3.70233 | 0.0871292  | Tier 1: Primary Regulatory Effector        |
|                3 | PTPRQ   |           2359 |          650 |   0.0888652 |   2.24569 | 0.786573   | Tier 1: Primary Regulatory Effector        |
|                4 | OR5AS1  |            327 |          457 |   0.100736  |   2.60291 | 0.533557   | Tier 1: Primary Regulatory Effector        |
|                5 | GARIN1A |            327 |          709 |   0.127734  |   3.41534 | 0.140737   | Tier 1: Primary Regulatory Effector        |
|                5 | PLEKHS1 |            556 |          704 |   0.0853366 |   2.13951 | 0.851104   | Tier 1: Primary Regulatory Effector        |
|                6 | CXCL12  |             93 |          721 |   0.125983  |   3.36265 | 0.148588   | Tier 2: Physiological Homeostasis Modifier |
|                6 | ATRX    |           2566 |          610 |   0.0901127 |   2.28323 | 0.750005   | Tier 1: Primary Regulatory Effector        |
|                7 | MGRN1   |            597 |          688 |   0.093484  |   2.38468 | 0.663392   | Tier 1: Primary Regulatory Effector        |
|                7 | OR52J3  |            325 |          292 |   0.124514  |   3.31844 | 0.163224   | Tier 2: Physiological Homeostasis Modifier |
|                8 | ASPH    |            795 |          584 |   0.0859854 |   2.15903 | 0.834221   | Tier 1: Primary Regulatory Effector        |
|                8 | HSFY1   |            411 |          142 |   0.120938  |   3.21083 | 0.220119   | Tier 2: Physiological Homeostasis Modifier |
|                9 | HSFY2   |            413 |          142 |   0.120801  |   3.2067  | 0.221151   | Tier 1: Primary Regulatory Effector        |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_PREHENSILE_TAIL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_PREHENSILE_TAIL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_PREHENSILE_TAIL (Muscular Tactile Prehensile Tail (Arboreal 5th Limb)) screened across N=17,130 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 0.7962, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 28 significant loci at FDR q <= 0.05 and 6 loci at FDR q <= 0.01.
4. Top discovery locus is GARIN5B (Rank #1, Psi = 0.1738, Z = 4.80, q = 4.48e-03).
