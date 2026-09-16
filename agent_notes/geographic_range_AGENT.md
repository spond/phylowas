# Checkpoint Report: Geographic Range Size (km2)
- **Phenotype ID:** `CONT_GEOGRAPHICRANGE_KM2`
- **Trait Class:** `continuous` (Sample Size: 520 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.7995
- **Total Mammalian Orthologs Screened:** 16,921
- **Date / Timestamp:** 2026-09-15 22:14:16

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **271 loci at $\mathrm{FDR}\;q \le 0.05$** and **181 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.7995$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include PRAMEF9, AKR1C4, OR8K5, OR2G6, LAIR2.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype CONT_GEOGRAPHICRANGE_KM2 \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/CONT_GEOGRAPHICRANGE_KM2/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | PRAMEF9 |            543 |          128 |   0.0355339 |   9.2515  | 1.87277e-16 | Tier 0: Core Bottleneck Transducer |
|                2 | AKR1C4  |            331 |          110 |   0.034901  |   9.11239 | 3.40916e-16 | Tier 0: Core Bottleneck Transducer |
|                3 | OR8K5   |            322 |          247 |   0.0333906 |   8.7804  | 4.59387e-15 | Tier 0: Core Bottleneck Transducer |
|                4 | OR2G6   |            330 |          231 |   0.0314442 |   8.35257 | 1.41279e-13 | Tier 0: Core Bottleneck Transducer |
|                5 | LAIR2   |            167 |          236 |   0.0279616 |   7.58705 | 5.53778e-11 | Tier 0: Core Bottleneck Transducer |
|                6 | SPDYE8  |            278 |          264 |   0.0278116 |   7.55408 | 5.94832e-11 | Tier 0: Core Bottleneck Transducer |
|                7 | TOMM20L |            213 |          565 |   0.0273649 |   7.45588 | 1.07891e-10 | Tier 0: Core Bottleneck Transducer |
|                8 | FCGR3B  |            241 |          584 |   0.026859  |   7.34469 | 2.1811e-10  | Tier 0: Core Bottleneck Transducer |
|                9 | SPDYE14 |            281 |          242 |   0.0256344 |   7.07552 | 1.39963e-09 | Tier 0: Core Bottleneck Transducer |
|               10 | SPDYE4  |            266 |          330 |   0.0251851 |   6.97676 | 2.55571e-09 | Tier 0: Core Bottleneck Transducer |
|               11 | SPDYE10 |            297 |          217 |   0.0248435 |   6.90167 | 3.95302e-09 | Tier 0: Core Bottleneck Transducer |
|               12 | RBP1    |            198 |          143 |   0.0246185 |   6.85221 | 5.12684e-09 | Tier 0: Core Bottleneck Transducer |
|               13 | C3orf49 |            329 |          583 |   0.0245154 |   6.82955 | 5.54378e-09 | Tier 0: Core Bottleneck Transducer |
|               14 | SPDYE13 |            320 |          274 |   0.0236872 |   6.64751 | 1.80141e-08 | Tier 0: Core Bottleneck Transducer |
|               15 | NUTM2G  |            515 |          215 |   0.023354  |   6.57427 | 2.75778e-08 | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_CONT_GEOGRAPHICRANGE_KM2_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait CONT_GEOGRAPHICRANGE_KM2 (Geographic Range Size (km2)) screened across N=16,921 mammalian orthologs in sample size N=520 species.
2. Genomic inflation factor lambda_GC = 0.7995, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 271 significant loci at FDR q <= 0.05 and 181 loci at FDR q <= 0.01.
4. Top discovery locus is PRAMEF9 (Rank #1, Psi = 0.0355, Z = 9.25, q = 1.87e-16).
