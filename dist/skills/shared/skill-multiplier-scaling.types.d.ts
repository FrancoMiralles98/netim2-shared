import type { DamageCondition } from '../damage/skill-damage-modifiers.type';
import type { SkillScalingUnlock } from './skill-progression.types';
import type { SkillValueScaling, SkillWeightedOptionScaling } from './skill-value-scaling.types';
export interface SkillChanceDamageModifierScaling extends SkillScalingUnlock {
    type: 'chance_multiplier';
    /** Probabilidad calculada en puntos porcentuales, limitada a [0, 100]. */
    chance: SkillValueScaling;
    /** Factor >= 0: 1 = daño normal, 2 = doble. También puede progresar por nivel/umbrales. */
    multiplier: SkillValueScaling;
    description?: string;
}
export interface SkillWeightedDamageOptionScaling extends SkillWeightedOptionScaling {
    multiplier: SkillValueScaling;
}
export interface SkillWeightedDamageModifierScaling {
    type: 'weighted_multiplier';
    /** Una sola opción por selección. Incluir multiplicador 1 si debe existir daño normal. */
    options: readonly [SkillWeightedDamageOptionScaling, ...SkillWeightedDamageOptionScaling[]];
}
export interface SkillConditionalDamageModifierScaling extends SkillScalingUnlock {
    type: 'conditional_multiplier';
    condition: DamageCondition;
    multiplier: SkillValueScaling;
    description?: string;
}
export type SkillDamageModifierScaling = SkillChanceDamageModifierScaling | SkillWeightedDamageModifierScaling | SkillConditionalDamageModifierScaling;
