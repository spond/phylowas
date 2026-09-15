# Pan-Mammalian Directional Tensor Phenomics (PhyloWAS) Portal

This repository provides the complete, interactive web portal and data repository for **Directional Foundation Tensors Resolve the Molecular Architecture of Convergent Phenotypes Across the Mammalian Phenome**.

Deployed via **GitHub Pages**: [https://spond.github.io/PhyloWAS-Portal/](https://spond.github.io/PhyloWAS-Portal/) (or local fork).

---

## 1. Portal Architecture & Overview

- **742 Mammalian Genomes:** High-coverage assemblies from the Vertebrate Genomes Project (VGP) annotated via TOGA.
- **15,035 Filtered Orthologs:** Robust bilateral representation filter (≥ 100 taxa, ≥ 15 microbats, ≥ 15 odontocetes).
- **27 Screened Phenotypes:** 9 continuous life-history traits (allometric residuals) and 18 discrete macroevolutionary innovations.
- **Decoupled Dual-Track Testing:** Peak sitewise concordance (Track A, ρ_max) and whole-gene distributed remodeling (Track B, Ψ).
- **Sub-unitary Calibration:** λ_GC = 0.4931 in flagship echolocation screen.
- **Omnigenic Pan-Mammalian Matrix:** Uncovers 157 multi-trait frequent fliers and dedicated specialists (PSI ≥ 0.75).

---

## 2. Directory Structure

```
phylowas_portal/
├── index.html                  # Landing page & searchable catalog of 27 phenotypes
├── matrix.html                 # Cross-phenotype pan-mammalian synthesis matrix & frequent fliers
├── phenotypes/                 # Dedicated interactive pages for all 27 phenotypes
│   ├── echolocation.html       # Flagship biosonar study with contrasts & co-evolving communities
│   ├── aquatic_marine.html     # Deep diving & hypoxia adaptation
│   ├── maximum_lifespan.html   # Longevity allometric residual & DNA repair hubs
│   └── ... (27 phenotypes)
├── agent_notes/                # Markdown AGENT.md analysis notes for each phenotype
├── data/                       # Downloadable screening CSVs and fast JSON tables
│   ├── screens/                # Complete genome-wide screen CSV files
│   ├── json/                   # Top 250 ranked loci, communities, and pathway JSONs
│   ├── contrasts/              # Factorial sister-clade contrast matrix CSV
│   ├── communities/            # APC co-selection epistatic communities CSV (all 27 phenotypes)
│   ├── pathways/               # Canonical pathway enrichment CSV (all 27 phenotypes)
│   └── synthesis/              # Gene × phenotype score and specificity matrices
└── assets/
    ├── css/style.css           # Publication-grade responsive styles
    ├── js/app.js               # Client-side table search, sorting, and pagination
    └── figures/                # Publication-grade PNG preview plots & vector PDFs
```

---

## 3. GitHub Pages Deployment Instructions

To publish this portal to GitHub Pages:

```bash
# 1. Initialize git (already done in this repo)
git init
git add .
git commit -m "Initial commit of PhyloWAS web portal and data repository"

# 2. Add your GitHub remote
git remote add origin git@github.com:<your-username>/<your-repo-name>.git

# 3. Push to main branch
git branch -M main
git push -u origin main

# 4. Activate GitHub Pages
# In GitHub: Repository Settings -> Pages -> Source: 'Deploy from a branch' -> Branch: 'main' / Folder: '/ (root)' -> Save.
```

The site will automatically deploy at `https://<your-username>.github.io/<your-repo-name>/`.

---

## 4. Local Preview

To preview the portal locally without installing any web server dependencies:

```bash
# Using Python 3 built-in HTTP server
python3 -m http.server 8000
# Then open http://localhost:8000 in your web browser.
```

---

## 5. Citation & Literature Attribution

```bibtex
@article{pond2026directional,
  title={Directional Foundation Tensors Resolve the Molecular Architecture of Convergent Phenotypes Across the Mammalian Phenome},
  author={Kosakovsky Pond, Sergei L.},
  journal={Bioinformatics / Science},
  year={2026}
}
```
