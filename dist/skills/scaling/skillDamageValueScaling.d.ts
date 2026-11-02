import type { DamageType } from '../damage/damage-config.type';
import type { DamageTag } from '../damage/damage-tag.types';
import type { MechanicsEffectsKeys } from '../damage/mechanics-effect.type';
import type { SkillDamageFlags } from '../damage/skill-damage-tags.type';
import type { SkillCooldownScaling, SkillManaCostScaling } from '../shared/skill-common-scaling.types';
import type { SkillDamageValueScaling } from '../shared/skill-damage-value-scaling.types';
import type { SkillHitModifierScaling } from '../shared/skill-hit-modifier-scaling.types';
import type { SkillDamageModifierScaling } from '../shared/skill-multiplier-scaling.types';
import type { SkillStatusEffectsScaling } from '../shared/skill-status-effect-scaling.types';
import type { SkillValueScaling } from '../shared/skill-value-scaling.types';
/** Un componente AD/AP/verdadero; no representa un golpe adicional. */
export interface DamageComponentScaling {
    /** Tipo de daño usado para resolver mitigaciones. */
    damageType: DamageType;
    /** Mínimo y máximo obligatorios; cada extremo admite daño base y aportes por stats/atributos. */
    damage: SkillDamageValueScaling;
    tags: readonly DamageTag[];
    flags?: SkillDamageFlags;
}
/**
 * Configuración de escalado completa de una habilidad de daño.
 * Compone los contratos genéricos de skills/shared; no contiene valores calculados
 * ni estado activo, nivel o maestría del personaje. Estos llegan en el contexto del evaluador.
 */
export interface DamageSkillValueScaling {
    type: 'damage';
    mana: SkillManaCostScaling;
    cd: SkillCooldownScaling;
    /** Un único componente de daño, compartido por todos los golpes de la habilidad. */
    components: DamageComponentScaling;
    /** Escalado de la cantidad de golpes y su multiplicador por golpe. */
    hitModifiers?: SkillHitModifierScaling;
    /** Escalado de multiplicadores de daño por probabilidad, pesos o condiciones. */
    damageModifiers?: SkillDamageModifierScaling;
    /** Aplicaciones de efectos de la habilidad; su frecuencia la define el resolver de combate. */
    statusEffects?: SkillStatusEffectsScaling;
    /** Valores porcentuales de mecánicas como vampirismo o penetración de habilidad. */
    mechanicsEffects?: Partial<Record<MechanicsEffectsKeys, SkillValueScaling>>;
}
