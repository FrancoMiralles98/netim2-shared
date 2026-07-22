import { UNIQUE_ID_SKILLS } from "../skills/unique-id-skill.enum";
import { FightEffectId } from "./effects.types";

export type FightMetric =
    | 'ad_realizado'
    | 'ap_realizado'
    | 'critico_realizado'
    | 'penetracion_realizado'
    | 'ataque_basico_realizado'
    | 'curacion_cortada'
    | 'reflejo_realizado'
    | 'ataques_bloqueados'
    | 'ataques_esquivados'
    | `${FightEffectId}_realizado`
    | `${FightEffectId}_aplicado`;


export type FightDetailsCounters = Partial<Record<FightMetric, number>>;

/**
 * Estadísticas registradas de una skill de daño durante un combate.
 *
 * @property {boolean} isLearned
 * Indica si la skill está aprendida por el personaje.
 *
 * @property {number} cdSkill
 * Cooldown actual de la skill durante el combate.
 *
 * @property {number} maxDmg
 * Mayor daño realizado por la skill de las veces usadas
 * 
 * @property {number} timesUsed
 * Cantidad de veces que la skill fue utilizada.
 *
 * @property {number} Dps
 * Daño por segundo registrado para la skill.
 *
 * @property {number} idSkill
 * ID único de la skill.
 */
export interface SkillDamageInFight {
    isLearned: boolean;
    cdSkill: number;
    maxDmg: number;
    timesUsed: number;
    Dps: number;
    idSkill: UNIQUE_ID_SKILLS;
}


export interface FightDetails {
    counters: FightDetailsCounters;
    skills_used: SkillDamageInFight[];
}

