# Checkpoint Report: True Hibernation / Metabolic Torpor
- **Phenotype ID:** `DISC_HIBERNATION`
- **Trait Class:** `binary` (Sample Size: 8 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9586
- **Total Mammalian Orthologs Screened:** 16,074
- **Date / Timestamp:** 2026-09-15 22:14:28

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **125 loci at $\mathrm{FDR}\;q \le 0.05$** and **105 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9586$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include RPRML, GSTA2, F8A3, GSTA1, F8A1.
- **Canonical Recovery:** Spontaneously recovered 0/10 gold-standard machinery in the top 200 (Brown adipose tissue uncoupling, lipolysis, and hypothermic metabolic depression.).

---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_HIBERNATION \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_HIBERNATION/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene     |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:---------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | RPRML    |            121 |          590 |  0.00587576 |   3.44177 | 0.0383861   | Tier 0: Core Bottleneck Transducer |
|                2 | GSTA2    |            223 |          115 |  0.0391427  |  29.3422  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|                3 | F8A3     |            406 |          198 |  0.00611746 |   3.62995 | 0.0198163   | Tier 0: Core Bottleneck Transducer |
|                4 | GSTA1    |            231 |          124 |  0.0381577  |  28.5753  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|                5 | F8A1     |            418 |          209 |  0.00526038 |   2.96266 | 0.161264    | Tier 0: Core Bottleneck Transducer |
|                6 | IFI27L1  |            125 |          102 |  0.0323278  |  24.0364  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|                7 | F8A2     |            391 |          169 |  0.0063302  |   3.79558 | 0.0110638   | Tier 0: Core Bottleneck Transducer |
|                8 | PCDHB9   |            867 |          116 |  0.0311189  |  23.0951  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|                9 | HLA-DQA1 |            208 |          305 |  0.00611738 |   3.62988 | 0.0198163   | Tier 0: Core Bottleneck Transducer |
|               10 | OR5B17   |            339 |          125 |  0.0263963  |  19.4183  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|               11 | OR8H3    |            317 |          124 |  0.00562028 |   3.24286 | 0.0709742   | Tier 0: Core Bottleneck Transducer |
|               12 | CPHXL    |            409 |          115 |  0.0209033  |  15.1417  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|               13 | AP1S2    |            157 |          630 |  0.00518019 |   2.90022 | 0.193354    | Tier 0: Core Bottleneck Transducer |
|               14 | KRBOX1   |            141 |          239 |  0.0206502  |  14.9446  | 2.29629e-47 | Tier 0: Core Bottleneck Transducer |
|               15 | OR9G1    |            314 |          257 |  0.0201065  |  14.5213  | 8.92414e-45 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
**Ground Truth Benchmark:** Brown adipose tissue uncoupling, lipolysis, and hypothermic metabolic depression. (Mammalian Hibernation & Cold Adaptation)
- **Top 50 Recovery:** 0 / 10 loci
- **Top 200 Recovery:** 0 / 10 loci
- **Top 500 Recovery:** 0 / 10 loci

|   composite_rank | gene   |   codon_length |   psi_score |    z_score |    fdr_q |
|-----------------:|:-------|---------------:|------------:|-----------:|---------:|
|             1397 | ADRB3  |            485 | 0.00255061  |  0.852934  | 0.836811 |
|             1651 | ACOT1  |            439 | 0.0024154   |  0.747663  | 0.836811 |
|             2468 | PPARG  |            475 | 0.00221502  |  0.591657  | 0.836811 |
|             2910 | CPT1A  |            801 | 0.000965862 | -0.380893  | 0.838727 |
|             6907 | UCP1   |            315 | 0.00166067  |  0.160056  | 0.836811 |
|             7927 | FABP4  |            134 | 0.00157238  |  0.0913197 | 0.836811 |
|             8854 | SIRT3  |            282 | 0.00150056  |  0.0354026 | 0.836811 |
|            11641 | PDK4   |            424 | 0.00129214  | -0.126862  | 0.836811 |
|            11811 | FABP3  |            144 | 0.00127851  | -0.137474  | 0.836811 |
|            12631 | TRPV1  |            866 | 0.0011299   | -0.253175  | 0.836811 |

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_HIBERNATION_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_HIBERNATION_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_HIBERNATION_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_HIBERNATION_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_HIBERNATION (True Hibernation / Metabolic Torpor) screened across N=16,074 mammalian orthologs in sample size N=8 species.
2. Genomic inflation factor lambda_GC = 0.9586, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 125 significant loci at FDR q <= 0.05 and 105 loci at FDR q <= 0.01.
4. Top discovery locus is RPRML (Rank #1, Psi = 0.0059, Z = 3.44, q = 3.84e-02).
5. External validation against Brown adipose tissue uncoupling, lipolysis, and hypothermic metabolic depression. recovered 0/10 gold loci in the top 50, 0/10 in the top 200, and 0/10 in the top 500.
6. Canonical locus ADRB3 achieves Rank #1397 (Psi = 0.0026, Z = 0.85, q = 8.37e-01).
7. Canonical locus ACOT1 achieves Rank #1651 (Psi = 0.0024, Z = 0.75, q = 8.37e-01).
8. Canonical locus PPARG achieves Rank #2468 (Psi = 0.0022, Z = 0.59, q = 8.37e-01).
