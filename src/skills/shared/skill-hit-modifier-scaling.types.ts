import type { SkillScalingUnlock } from './skill-progression.types';
import type { SkillValueScaling, SkillWeightedOptionScaling } from './skill-value-scaling.types';

export interface SkillChanceMultiHitScaling extends SkillScalingUnlock {
    type: 'chance_multi_hit';
    /** Probabilidad en [0, 100]. Si no se activa, un golpe con multiplicador 1. */
    chance: SkillValueScaling;
    /** Cantidad total de golpes, no golpes adicionales; entero >= 1. */
    hits: SkillValueScaling;
    damageMultiplierPerHit: SkillValueScaling;
    description?: string;
}

export interface SkillWeightedHitOptionScaling extends SkillWeightedOptionScaling {
    hits: SkillValueScaling;
    damageMultiplierPerHit: SkillValueScaling;
}

export interface SkillWeightedHitCountScaling {
    type: 'weighted_hit_count';
    options: readonly [SkillWeightedHitOptionScaling, ...SkillWeightedHitOptionScaling[]];
}

export type SkillHitModifierScaling = SkillChanceMultiHitScaling | SkillWeightedHitCountScaling;
