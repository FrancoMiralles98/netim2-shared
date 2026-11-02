import type { AuraTag } from '../aura/aura-tags.types';
import type { SkillCooldownScaling, SkillDurationScaling, SkillManaCostScaling, SkillStatModifierScaling } from '../shared/skill-common-scaling.types';
/**
 * Configuración de un aura: coste, duración y cada modificador progresan independientemente.
 * Cada value permite base, nivel/maestría, umbrales y aportes por atributos/stats.
 * No contiene duración restante, cooldown activo ni stats calculadas del personaje.
 */
export interface AuraSkillValueScaling {
    type: 'aura';
    mana: SkillManaCostScaling;
    cd: SkillCooldownScaling;
    /** Duración explícita: turnos escalables o mantenimiento hasta quedarse sin maná. */
    duration: SkillDurationScaling;
    /** Cada modificador indica su destino, operación y valor escalable. */
    statsModifiers: readonly SkillStatModifierScaling[];
    tags: readonly AuraTag[];
}
