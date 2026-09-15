# AGENT.md: PhyloWAS Analysis Protocol & Co-Author Presentation Notes

This document provides guidelines and atomic fact decks for presenting directional tensor phenomics results to co-authors and reviewers.

## 1. Methodological Principles
1. **Directional Foundation Tensors:** Precomputed tensors (A = α · δ, 5.6 GB) from HyphAeon eliminate the computational bottleneck of re-fitting phylogenetic substitution models de novo.
2. **Decoupled Dual-Track Resolution:**
   - Track A (Peak Sitewise Concordance, ρ_max) aggregates extreme value Cauchy tests to liberate focal multi-domain structural loci from gene-length dilution (e.g. PCDH15, 2,003 codons).
   - Track B (Whole-Gene Remodeling, Ψ) captures distributed polygenic adaptation.
3. **Factorial Sister-Clade Contrasts:** Disentangles true bilateral convergence (Golden Quadrant) from unilateral flight demands and parallel sensory decay.
4. **Average Product-Corrected (APC) Modularity:** Removes phylogenetic background covariance to expose direct physical and functional co-selection networks.
5. **Pan-Phenotypic Synthesis:** Resolves the omnigenic division between 157 multi-trait frequent fliers (cellular stress buffers) and dedicated specialist effectors (PSI ≥ 0.75).

## 2. Phenotype Index & Checkpoint Files
- **Adult Body Mass (Scaling & Gigantism)** (`CONT_ADULTBODYMASS_G`): [`agent_notes/adult_body_mass_AGENT.md`](agent_notes/adult_body_mass_AGENT.md)
- **Geographic Range Size (km²)** (`CONT_GEOGRAPHICRANGE_KM2`): [`agent_notes/geographic_range_AGENT.md`](agent_notes/geographic_range_AGENT.md)
- **Gestation Length (Allometric Residual)** (`CONT_GESTATIONLENGTH_D_ALLOMETRIC_RESIDUAL`): [`agent_notes/gestation_length_AGENT.md`](agent_notes/gestation_length_AGENT.md)
- **Litter Size (Allometric Residual)** (`CONT_LITTERSIZE_ALLOMETRIC_RESIDUAL`): [`agent_notes/litter_size_AGENT.md`](agent_notes/litter_size_AGENT.md)
- **Maximum Lifespan (Allometric Residual)** (`CONT_MAXLONGEVITY_M_ALLOMETRIC_RESIDUAL`): [`agent_notes/maximum_lifespan_AGENT.md`](agent_notes/maximum_lifespan_AGENT.md)
- **Environmental Precipitation (mm)** (`CONT_MEANPRECIPITATION_MM`): [`agent_notes/mean_precipitation_AGENT.md`](agent_notes/mean_precipitation_AGENT.md)
- **Environmental Temperature (°C)** (`CONT_MEANTEMPERATURE_C`): [`agent_notes/mean_temperature_AGENT.md`](agent_notes/mean_temperature_AGENT.md)
- **Sexual Maturity Age (Allometric Residual)** (`CONT_SEXUALMATURITYAGE_D_ALLOMETRIC_RESIDUAL`): [`agent_notes/sexual_maturity_age_AGENT.md`](agent_notes/sexual_maturity_age_AGENT.md)
- **Weaning Age (Allometric Residual)** (`CONT_WEANINGAGE_D_ALLOMETRIC_RESIDUAL`): [`agent_notes/weaning_age_AGENT.md`](agent_notes/weaning_age_AGENT.md)
- **Marine Diving & Prolonged Apnea** (`DISC_AQUATIC_MARINE`): [`agent_notes/aquatic_marine_AGENT.md`](agent_notes/aquatic_marine_AGENT.md)
- **Carnivorous Trophic Specialization** (`DISC_CARNIVORY`): [`agent_notes/carnivory_AGENT.md`](agent_notes/carnivory_AGENT.md)
- **Diurnal Activity Cycle** (`DISC_DIURNALITY`): [`agent_notes/diurnality_AGENT.md`](agent_notes/diurnality_AGENT.md)
- **Ultrasonic Echolocation (Biosonar)** (`DISC_ECHOLOCATION`): [`agent_notes/echolocation_AGENT.md`](agent_notes/echolocation_AGENT.md)
- **Herbivorous Trophic Specialization** (`DISC_HERBIVORY`): [`agent_notes/herbivory_AGENT.md`](agent_notes/herbivory_AGENT.md)
- **True Hibernation & Metabolic Torpor** (`DISC_HIBERNATION`): [`agent_notes/hibernation_AGENT.md`](agent_notes/hibernation_AGENT.md)
- **Nocturnal Activity Cycle** (`DISC_NOCTURNALITY`): [`agent_notes/nocturnality_AGENT.md`](agent_notes/nocturnality_AGENT.md)
- **Subterranean Hypoxia & Hypercapnia Adaptation** (`DISC_SUBTERRANEAN`): [`agent_notes/subterranean_hypoxia_AGENT.md`](agent_notes/subterranean_hypoxia_AGENT.md)
- **Spontaneous Decidualization & Menstruation** (`DISC_SPONTANEOUS_MENSTRUATION`): [`agent_notes/spontaneous_menstruation_AGENT.md`](agent_notes/spontaneous_menstruation_AGENT.md)
- **Dermal Armor, Osteoderms & Modified Spines** (`DISC_PHYSICAL_BODY_ARMOR`): [`agent_notes/physical_body_armor_AGENT.md`](agent_notes/physical_body_armor_AGENT.md)
- **Obligate Myrmecophagy & Tooth Reduction** (`DISC_MYRMECOPHAGY`): [`agent_notes/myrmecophagy_AGENT.md`](agent_notes/myrmecophagy_AGENT.md)
- **Bipedal Saltatory Hopping Locomotion** (`DISC_BIPEDAL_SALTATION`): [`agent_notes/bipedal_saltation_AGENT.md`](agent_notes/bipedal_saltation_AGENT.md)
- **Muscular Tactile Prehensile Tail (Fifth Limb)** (`DISC_PREHENSILE_TAIL`): [`agent_notes/prehensile_tail_AGENT.md`](agent_notes/prehensile_tail_AGENT.md)
- **Natural Neurotoxin & Snake/Scorpion Venom Resistance** (`DISC_VENOM_RESISTANCE`): [`agent_notes/venom_resistance_AGENT.md`](agent_notes/venom_resistance_AGENT.md)
- **Subterranean Eye Regression & Microphthalmia** (`DISC_SUBTERRANEAN_VISION_LOSS`): [`agent_notes/subterranean_vision_loss_AGENT.md`](agent_notes/subterranean_vision_loss_AGENT.md)
- **Pre-Gastric Foregut Fermentation** (`DISC_FOREGUT_FERMENTATION`): [`agent_notes/foregut_fermentation_AGENT.md`](agent_notes/foregut_fermentation_AGENT.md)
- **Metabolic Hyper-Glucotolerance & Frugivory** (`DISC_HIGH_SUGAR_FRUGIVORY`): [`agent_notes/high_sugar_frugivory_AGENT.md`](agent_notes/high_sugar_frugivory_AGENT.md)
- **Epimorphic Scar-Free Skin & Tissue Regeneration** (`DISC_SCAR_FREE_REGENERATION`): [`agent_notes/scar_free_regeneration_AGENT.md`](agent_notes/scar_free_regeneration_AGENT.md)
