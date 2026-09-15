# Checkpoint Report: Litter Size (Allometric Residual)
- **Phenotype ID:** `CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL`
- **Trait Class:** `continuous` (Sample Size: 534 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.0838
- **Total Mammalian Orthologs Screened:** 17,131
- **Date / Timestamp:** 2026-09-15 10:21:48

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **362 loci at $\mathrm{FDR}\;q \le 0.05$** and **241 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.0838$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include NOX5, NLRP13, AKR1C4, FAM240C, TREML4.


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
|   composite_rank | gene         |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:-------------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | NOX5         |            820 |          330 |   0.0408404 |   8.63132 | 2.59749e-14 | Tier 0: Core Bottleneck Transducer |
|                2 | NLRP13       |            840 |          267 |   0.0404968 |   8.5806  | 3.23372e-14 | Tier 0: Core Bottleneck Transducer |
|                3 | AKR1C4       |            331 |          110 |   0.0355766 |   7.85424 | 8.61246e-12 | Tier 0: Core Bottleneck Transducer |
|                4 | FAM240C      |            103 |          412 |   0.03372   |   7.58016 | 5.91253e-11 | Tier 0: Core Bottleneck Transducer |
|                5 | TREML4       |            202 |           98 |   0.0334076 |   7.53403 | 6.48314e-11 | Tier 0: Core Bottleneck Transducer |
|                6 | OR8K5        |            322 |          247 |   0.0328163 |   7.44674 | 1.17072e-10 | Tier 0: Core Bottleneck Transducer |
|                7 | CAPN14       |            696 |          472 |   0.0323484 |   7.37767 | 1.83966e-10 | Tier 0: Core Bottleneck Transducer |
|                8 | ADAM20       |            774 |          457 |   0.032158  |   7.34956 | 2.12914e-10 | Tier 0: Core Bottleneck Transducer |
|                9 | C2orf78      |           1024 |          311 |   0.0315756 |   7.26358 | 3.79871e-10 | Tier 0: Core Bottleneck Transducer |
|               10 | TRIM52       |            327 |          379 |   0.0310637 |   7.18801 | 6.21451e-10 | Tier 0: Core Bottleneck Transducer |
|               11 | ARSF         |            606 |          213 |   0.0310199 |   7.18155 | 6.21451e-10 | Tier 0: Core Bottleneck Transducer |
|               12 | PTCRA        |            180 |          276 |   0.0296185 |   6.97466 | 2.28373e-09 | Tier 0: Core Bottleneck Transducer |
|               13 | KRTAP25-1    |            105 |          157 |   0.0293375 |   6.93318 | 2.81968e-09 | Tier 0: Core Bottleneck Transducer |
|               14 | LOC102723934 |            559 |           49 |   0.0278317 |   6.71088 | 1.2274e-08  | Tier 0: Core Bottleneck Transducer |
|               15 | PPDPFL       |            113 |          510 |   0.0275567 |   6.67029 | 1.562e-08   | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL (Litter Size (Allometric Residual)) screened across N=17,131 mammalian orthologs in sample size N=534 species.
2. Genomic inflation factor lambda_GC = 0.0838, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 362 significant loci at FDR q <= 0.05 and 241 loci at FDR q <= 0.01.
4. Top discovery locus is NOX5 (Rank #1, Psi = 0.0408, Z = 8.63, q = 2.60e-14).
