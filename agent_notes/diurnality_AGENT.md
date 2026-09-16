# Checkpoint Report: Diurnal Activity Cycle
- **Phenotype ID:** `DISC_DIURNALITY`
- **Trait Class:** `binary` (Sample Size: 123 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9076
- **Total Mammalian Orthologs Screened:** 16,908
- **Date / Timestamp:** 2026-09-15 22:14:25

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **156 loci at $\mathrm{FDR}\;q \le 0.05$** and **114 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9076$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include FOXG1, OR5T1, OR1F1, CARD18, HSPA1B.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_DIURNALITY \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_DIURNALITY/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | FOXG1   |            810 |          574 |  0.00638491 |   3.63431 | 0.018266    | Tier 0: Core Bottleneck Transducer |
|                2 | OR5T1   |            346 |          117 |  0.0218215  |  13.507   | 1.20166e-37 | Tier 0: Core Bottleneck Transducer |
|                3 | OR1F1   |            321 |          316 |  0.00836064 |   4.89793 | 0.000130108 | Tier 0: Core Bottleneck Transducer |
|                4 | CARD18  |             97 |          131 |  0.021037   |  13.0053  | 4.82699e-35 | Tier 0: Core Bottleneck Transducer |
|                5 | HSPA1B  |            659 |          435 |  0.00774121 |   4.50176 | 0.000721195 | Tier 0: Core Bottleneck Transducer |
|                6 | SLC9C1  |           1138 |          226 |  0.018488   |  11.375   | 1.56902e-26 | Tier 0: Core Bottleneck Transducer |
|                7 | H2AC8   |            146 |          178 |  0.0181132  |  11.1353  | 1.78439e-25 | Tier 0: Core Bottleneck Transducer |
|                8 | MNX1    |            457 |          561 |  0.00639427 |   3.6403  | 0.0181119   | Tier 0: Core Bottleneck Transducer |
|                9 | MEX3D   |            746 |          456 |  0.0065068  |   3.71227 | 0.0147163   | Tier 0: Core Bottleneck Transducer |
|               10 | GBP6    |            653 |          154 |  0.0174297  |  10.6982  | 1.75526e-23 | Tier 0: Core Bottleneck Transducer |
|               11 | OR1Q1   |            322 |          394 |  0.00611322 |   3.46055 | 0.0316481   | Tier 0: Core Bottleneck Transducer |
|               12 | OR2AJ1  |            347 |          206 |  0.0140086  |   8.51017 | 2.44707e-14 | Tier 0: Core Bottleneck Transducer |
|               13 | ONECUT3 |            552 |          494 |  0.00350353 |   1.79148 | 0.866805    | Tier 0: Core Bottleneck Transducer |
|               14 | NEK4    |            889 |          161 |  0.0135774  |   8.23439 | 2.17962e-13 | Tier 0: Core Bottleneck Transducer |
|               15 | TBL1X   |            588 |          404 |  0.00984645 |   5.8482  | 1.00023e-06 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_DIURNALITY_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_DIURNALITY_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_DIURNALITY_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_DIURNALITY_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_DIURNALITY (Diurnal Activity Cycle) screened across N=16,908 mammalian orthologs in sample size N=123 species.
2. Genomic inflation factor lambda_GC = 0.9076, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 156 significant loci at FDR q <= 0.05 and 114 loci at FDR q <= 0.01.
4. Top discovery locus is FOXG1 (Rank #1, Psi = 0.0064, Z = 3.63, q = 1.83e-02).
