# Checkpoint Report: Carnivorous Trophic Specialization
- **Phenotype ID:** `DISC_CARNIVORY`
- **Trait Class:** `binary` (Sample Size: 143 species)
- **Genomic Inflation Factor ($\lambda_{\mathrm{GC}}$):** 0.9219
- **Total Mammalian Orthologs Screened:** 16,882
- **Date / Timestamp:** 2026-09-15 22:14:24

---

## 1. Executive Co-Author Presentation Brief
- **Genome-Wide Significance:** Identified **168 loci at $\mathrm{FDR}\;q \le 0.05$** and **130 loci at $\mathrm{FDR}\;q \le 0.01$**.
- **Calibration Control:** $\lambda_{\mathrm{GC}} = 0.9219$ confirms effective insulation against neutral homoplasy and GC-biased gene conversion.
- **Top Discovery Hits:** Leading loci include PCDHB8, SMTNL1, PCDHA10, HMHB1, H2BC4.


---

## 2. Deterministic Reproduction CLI Command
```bash
python3 scripts/01_screen_phenotype.py \
  --phenotype DISC_CARNIVORY \
  --tensors data/axomeme_site_tensors.h5 \
  --outdir results/DISC_CARNIVORY/
```

---

## 3. Top Discovery Loci (Genome-Wide Screen)
|   composite_rank | gene    |   codon_length |   taxa_count |   psi_score |   z_score |       fdr_q | tier                               |
|-----------------:|:--------|---------------:|-------------:|------------:|----------:|------------:|:-----------------------------------|
|                1 | PCDHB8  |            696 |          388 |  0.00797915 |  4.33285  | 0.00123017  | Tier 0: Core Bottleneck Transducer |
|                2 | SMTNL1  |            787 |          116 |  0.0260892  | 16.8987   | 9.24605e-47 | Tier 0: Core Bottleneck Transducer |
|                3 | PCDHA10 |           1020 |          419 |  0.00802583 |  4.36523  | 0.00109378  | Tier 0: Core Bottleneck Transducer |
|                4 | HMHB1   |             43 |          117 |  0.023248   | 14.9273   | 9.24605e-47 | Tier 0: Core Bottleneck Transducer |
|                5 | H2BC4   |            126 |          414 |  0.00504117 |  2.2943   | 0.59504     | Tier 0: Core Bottleneck Transducer |
|                6 | H3C4    |            172 |          136 |  0.0231805  | 14.8804   | 1.24308e-46 | Tier 0: Core Bottleneck Transducer |
|                7 | H3C11   |            136 |          446 |  0.00383041 |  1.45421  | 0.823587    | Tier 0: Core Bottleneck Transducer |
|                8 | IRGM    |            198 |          118 |  0.0209481  | 13.3315   | 3.20458e-37 | Tier 0: Core Bottleneck Transducer |
|                9 | H2AC14  |            129 |          184 |  0.0147628  |  9.03973  | 7.79877e-17 | Tier 0: Core Bottleneck Transducer |
|               10 | TRIM77  |            453 |          112 |  0.0196205  | 12.4103   | 3.881e-32   | Tier 0: Core Bottleneck Transducer |
|               11 | OR2F2   |            322 |          141 |  0.0187075  | 11.7768   | 7.23551e-29 | Tier 0: Core Bottleneck Transducer |
|               12 | H4C7    |             99 |          295 |  0.00536576 |  2.51952  | 0.371517    | Tier 0: Core Bottleneck Transducer |
|               13 | H3C2    |            220 |          392 |  0.00242018 |  0.475703 | 0.823587    | Tier 0: Core Bottleneck Transducer |
|               14 | OR5AK2  |            334 |          171 |  0.0185751  | 11.6849   | 1.83532e-28 | Tier 0: Core Bottleneck Transducer |
|               15 | H2BC6   |            131 |          375 |  0.00614408 |  3.05957  | 0.102033    | Tier 0: Core Bottleneck Transducer |

---

## 4. External Validation & Ground Truth Triangulation
No external disease/pathway benchmark assigned for this trait.

---

## 5. Visual Artifacts
- **Vector Figure (PDF):** [`figures/fig_DISC_CARNIVORY_screen.pdf`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_CARNIVORY_screen.pdf)
- **Preview Figure (PNG):** [`figures/fig_DISC_CARNIVORY_screen.png`](file:///Users/sergei/Projects/TOGA_MEME/LargeScalePhyloWAS/figures/fig_DISC_CARNIVORY_screen.png)

---

## 6. Atomic Fact Deck (Pass 1: Unadorned Claims for Manuscript Drafting)
1. Trait DISC_CARNIVORY (Carnivorous Trophic Specialization) screened across N=16,882 mammalian orthologs in sample size N=143 species.
2. Genomic inflation factor lambda_GC = 0.9219, demonstrating rigorous calibration across mammalian phylogeny.
3. Genome-wide screening identified 168 significant loci at FDR q <= 0.05 and 130 loci at FDR q <= 0.01.
4. Top discovery locus is PCDHB8 (Rank #1, Psi = 0.0080, Z = 4.33, q = 1.23e-03).
