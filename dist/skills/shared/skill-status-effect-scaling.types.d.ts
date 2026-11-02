import type { StatusEffectsKeys } from '../damage/status-effects.type';
import type { SkillScalingUnlock } from './skill-progression.types';
import type { SkillValueScaling } from './skill-value-scaling.types';
/**
 * Escala la aplicación de un efecto; no es su estado activo ni su definición global.
 * Chance y duración pueden tener progresión y contribuciones diferentes.
 */
export interface SkillStatusEffectScaling extends SkillScalingUnlock {
    effectId: StatusEffectsKeys;
    /** Probabilidad en puntos porcentuales [0, 100], previa a resistencias del objetivo. */
    chance: SkillValueScaling;
    /** Turnos enteros >= 1. Omitir conserva la duración de la configuración global del efecto. */
    duration?: SkillValueScaling;
}
export type SkillStatusEffectsScaling = readonly SkillStatusEffectScaling[];
