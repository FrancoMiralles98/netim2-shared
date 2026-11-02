import type { BuffConsumeTrigger, BuffTags } from '../buff/skill-buff.types';
import type { UNIQUE_ID_SKILLS } from '../unique-id-skill.enum';
import type {
    SkillCooldownScaling, SkillDurationScaling, SkillManaCostScaling, SkillStatModifierScaling,
} from '../shared/skill-common-scaling.types';
import type { SkillScalingUnlock } from '../shared/skill-progression.types';
import type { SkillValueScaling } from '../shared/skill-value-scaling.types';

/** Efecto consumible: el multiplicador y la cantidad de usos tienen escalados propios. */
export interface BuffNextSkillDamageMultiplierScaling extends SkillScalingUnlock {
    type: 'next_skill_damage_multiplier';
    /** Al menos una habilidad habilitada; los IDs no modifican la progresión del valor. */
    allowedSkillIds: readonly [UNIQUE_ID_SKILLS, ...UNIQUE_ID_SKILLS[]];
    /** Factor de daño: 1 conserva el daño y 2 lo duplica. */
    multiplier: SkillValueScaling;
    /** Usos iniciales enteros >= 1; remainingUses pertenece al estado de combate. */
    uses: SkillValueScaling;
    /** Evento que consume un uso del efecto. */
    consumeOn: BuffConsumeTrigger;
    description?: string;
}

/** Unión ampliable con nuevos comportamientos concretos, sin propiedades opcionales ajenas. */
export type BuffEffectValueScaling = BuffNextSkillDamageMultiplierScaling;

/**
 * Configuración completa de un buff, tanto de stats como de efectos consumibles.
 * effects y statsModifiers pueden estar vacíos individualmente según su comportamiento.
 * No contiene estado activo ni nivel/maestría; estos los proporciona el evaluador.
 */
export interface BuffSkillValueScaling {
    type: 'buff';
    mana: SkillManaCostScaling;
    cd: SkillCooldownScaling;
    duration: SkillDurationScaling;
    /** Modificadores de estadísticas activos mientras dura el buff. */
    statsModifiers: readonly SkillStatModifierScaling[];
    /** Efectos consumibles y sus reglas de uso. */
    effects: readonly BuffEffectValueScaling[];
    tags?: readonly BuffTags[];
}
