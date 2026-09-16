# Checkpoint Report: Litter Size (Allometric Residual)
- **Phenotype ID:** `CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 534 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9520
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:18

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **236 loci at $\mathrm{FDR}\;q \le 0.05$** and **166 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9520$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include NOX5, NLRP13, AKR1C4, FAM240C, OR8K5.


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
|   composite_rank | gene      |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:----------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | NOX5      |            820 |          330 |   0.0408404 |   9.19136 | 2.70731e-16 | Tier 0: Core Bottleneck Transducer |
|                2 | NLRP13    |            840 |          267 |   0.0404968 |   9.13735 | 2.70731e-16 | Tier 0: Core Bottleneck Transducer |
|                3 | AKR1C4    |            331 |          110 |   0.0355766 |   8.36387 | 1.71168e-13 | Tier 0: Core Bottleneck Transducer |
|                4 | FAM240C   |            103 |          412 |   0.03372   |   8.072   | 1.46276e-12 | Tier 0: Core Bottleneck Transducer |
|                5 | OR8K5     |            322 |          247 |   0.0328163 |   7.92992 | 3.71044e-12 | Tier 0: Core Bottleneck Transducer |
|                6 | CAPN14    |            696 |          472 |   0.0323484 |   7.85637 | 5.57569e-12 | Tier 0: Core Bottleneck Transducer |
|                7 | ADAM20    |            774 |          457 |   0.032158  |   7.82644 | 6.06591e-12 | Tier 0: Core Bottleneck Transducer |
|                8 | C2orf78   |           1024 |          311 |   0.0315756 |   7.73488 | 1.09456e-11 | Tier 0: Core Bottleneck Transducer |
|                9 | TRIM52    |            327 |          379 |   0.0310637 |   7.65441 | 1.7334e-11  | Tier 0: Core Bottleneck Transducer |
|               10 | ARSF      |            606 |          213 |   0.0310199 |   7.64753 | 1.7334e-11  | Tier 0: Core Bottleneck Transducer |
|               11 | PTCRA     |            180 |          276 |   0.0296185 |   7.42721 | 8.5306e-11  | Tier 0: Core Bottleneck Transducer |
|               12 | KRTAP25-1 |            105 |          157 |   0.0293375 |   7.38304 | 1.09082e-10 | Tier 0: Core Bottleneck Transducer |
|               13 | PPDPFL    |            113 |          510 |   0.0275567 |   7.10309 | 7.93978e-10 | Tier 0: Core Bottleneck Transducer |
|               14 | PRAMEF20  |            525 |          135 |   0.0267273 |   6.97271 | 1.87885e-09 | Tier 0: Core Bottleneck Transducer |
|               15 | SPEGNB    |            260 |          461 |   0.0255402 |   6.78607 | 6.49915e-09 | Tier 0: Core Bottleneck Transducer |

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
2. Genomic inflation factor lambda_GC = 0.9520, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 236 significant loci at FDR q <= 0.05 and 166 loci at FDR q <= 0.01.
4. Top discovery locus is NOX5 (Rank #1, Psi = 0.0408, Z = 9.19, q = 2.71e-16).
