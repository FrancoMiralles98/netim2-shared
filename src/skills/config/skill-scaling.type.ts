import { UNIQUE_ID_SKILLS } from "../props/unique-id-skill.enum";
import { SkillDamageEscalado } from "./skill-damage-escalado.type";
import { SkillAuraEscalado } from "./skill-aura-escalado.type";
import { CharacterSpeciality } from "../../character/character-stats.type";



/**
 * Estrucutura de las (config) listas de escalados de las skills para las clases 
 */
export type StructureCharacterSkillScaling = SpecialitySkillsScaling

export type SpecialitySkillsScaling = Partial<Record<CharacterSpeciality,DescriptionScaling>>

export type DescriptionScaling = Partial<Record<UNIQUE_ID_SKILLS,SkillDamageEscalado|SkillAuraEscalado>>