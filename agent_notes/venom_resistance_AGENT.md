# Checkpoint Report: Natural Neurotoxin & Scorpion/Snake Venom Resistance
- **Phenotype ID:** `DISC_VENOM_RESISTANCE`
- **Trait Class:** `binary` (Sample Size: 7 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 1.0083
- **Total Mammalian Orthologs Screened:** 14,145
- **Date / Timestamp:** 2026-09-15 22:14:34

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **3 loci at $\mathrm{FDR}\;q \le 0.05$** and **1 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 1.0083$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include FAM193A, UCN3, PCDHGA3, MCTS1, C4orf51.
- **Canonical Recovery:** Spontaneously recovered 0/7 gold-standard machinery in the top 200 (Alpha-neurotoxin targets and endogenous antiproteases conferring resistance to snake and scorpion venoms.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_VENOM_RESISTANCE \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_VENOM_RESISTANCE/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | FAM193A  |           1610 |          557 |   0.108151  |   4.12439 | 0.0525785   | Tier 0: Core Bottleneck Transducer |
|                2 | UCN3     |            173 |          696 |   0.131137  |   5.26542 | 0.000989241 | Tier 0: Core Bottleneck Transducer |
|                3 | PCDHGA3  |           1035 |          584 |   0.0749955 |   2.47862 | 0.606345    | Tier 0: Core Bottleneck Transducer |
|                4 | MCTS1    |            181 |          681 |   0.111846  |   4.30781 | 0.0488809   | Tier 0: Core Bottleneck Transducer |
|                5 | C4orf51  |            233 |          611 |   0.0783482 |   2.64504 | 0.559765    | Tier 0: Core Bottleneck Transducer |
|                6 | GCA      |            237 |          709 |   0.110819  |   4.25683 | 0.0488809   | Tier 0: Core Bottleneck Transducer |
|                7 | SIRPD    |            200 |          299 |   0.0759751 |   2.52724 | 0.597737    | Tier 0: Core Bottleneck Transducer |
|                8 | MGST3    |            167 |          713 |   0.108866  |   4.15991 | 0.0525785   | Tier 0: Core Bottleneck Transducer |
|                9 | BPIFB4   |            637 |          642 |   0.0721916 |   2.33943 | 0.729529    | Tier 0: Core Bottleneck Transducer |
|               10 | ACSF3    |            615 |          647 |   0.10509   |   3.97248 | 0.0838428   | Tier 0: Core Bottleneck Transducer |
|               11 | MYH1     |           2003 |          502 |   0.0639466 |   1.93016 | 0.869698    | Tier 0: Core Bottleneck Transducer |
|               12 | CD300E   |            224 |          468 |   0.0829373 |   2.87284 | 0.438394    | Tier 0: Core Bottleneck Transducer |
|               13 | AJUBA    |            557 |          696 |   0.103268  |   3.88205 | 0.104652    | Tier 0: Core Bottleneck Transducer |
|               14 | NUTM2G   |            515 |          215 |   0.100451  |   3.74222 | 0.161257    | Tier 0: Core Bottleneck Transducer |
|               15 | KRTAP2-4 |            165 |          466 |   0.0728199 |   2.37062 | 0.690078    | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Alpha-neurotoxin targets and endogenous antiproteases conferring resistance to snake and scorpion venoms. (Venom Resistance Molecular Target Database)
- **Top 50 Recovery:** 0 / 7 loci
- **Top 200 Recovery:** 0 / 7 loci
- **Top 500 Recovery:** 0 / 7 loci

|   composite_rank | gene     |   codon_length |   psi_score |    z_score |    fdr_q |
|-----------------:|:---------|---------------:|------------:|-----------:|---------:|
|             4532 | SERPINC1 |            481 |   0.0370276 |  0.593933  | 0.869698 |
|             7162 | CHRNA1   |            472 |   0.0195052 | -0.275859  | 0.869698 |
|             8158 | F2       |            680 |   0.0241333 | -0.0461242 | 0.869698 |
|             8432 | CHRNB1   |            518 |   0.0245428 | -0.0257994 | 0.869698 |
|             9622 | CHRND    |            529 |   0.0234839 | -0.078361  | 0.869698 |
|            14048 | A2M      |           1525 |  -0.0374483 | -3.10297   | 1        |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_VENOM_RESISTANCE_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_VENOM_RESISTANCE_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_VENOM_RESISTANCE_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_VENOM_RESISTANCE_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_VENOM_RESISTANCE (Natural Neurotoxin & Scorpion/Snake Venom Resistance) screened across N=14,145 mammalian orthologs in sample size N=7 species.
2. Genomic inflation factor lambda_GC = 1.0083, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 3 significant loci at FDR q <= 0.05 and 1 loci at FDR q <= 0.01.
4. Top discovery locus is FAM193A (Rank #1, Psi = 0.1082, Z = 4.12, q = 5.26e-02).
5. External validation against Alpha-neurotoxin targets and endogenous antiproteases conferring resistance to snake and scorpion venoms. recovered 0/7 gold loci in the top 50, 0/7 in the top 200, and 0/7 in the top 500.
6. Canonical locus SERPINC1 achieves Rank #4532 (Psi = 0.0370, Z = 0.59, q = 8.70e-01).
7. Canonical locus CHRNA1 achieves Rank #7162 (Psi = 0.0195, Z = -0.28, q = 8.70e-01).
8. Canonical locus F2 achieves Rank #8158 (Psi = 0.0241, Z = -0.05, q = 8.70e-01).
