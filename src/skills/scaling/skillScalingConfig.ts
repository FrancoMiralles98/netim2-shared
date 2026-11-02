import type { AuraSkillValueScaling } from './skillAuraValueScaling';
import type { BuffSkillValueScaling } from './skillBuffValueScaling';
import type { DamageSkillValueScaling } from './skillDamageValueScaling';
import type { HealSkillValueScaling } from './skillHealValueScaling';

/**
 * Configuración completa de escalado de una skill, discriminada por type.
 * Al comprobar damage/aura/buff/heal, TypeScript infiere las propiedades
 * específicas del contrato correspondiente, sin casts.
 */
export type SkillScalingConfig =
    | DamageSkillValueScaling
    | AuraSkillValueScaling
    | BuffSkillValueScaling
    | HealSkillValueScaling;
