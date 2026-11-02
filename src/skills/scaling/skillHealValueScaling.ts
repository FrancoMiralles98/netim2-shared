import type { HealTag, SkillHealFlags } from '../heal/skill-heal.types';
import type { SkillCooldownScaling, SkillManaCostScaling } from '../shared/skill-common-scaling.types';
import type { SkillRangeScaling } from '../shared/skill-value-scaling.types';

/** Un componente de curación con mínimo y máximo obligatorios, incluso para cantidades fijas. */
export interface HealComponentScaling {
    /** Cada extremo admite base, progreso por nivel/maestría y aportes por atributos/stats. */
    healing: SkillRangeScaling;
    tags: readonly HealTag[];
}

/**
 * Configuración de una habilidad con un único componente de curación.
 * Usa reglas de curación, no flags de bloqueo/evasión propias de daño.
 * No contiene recursos actuales, resultados calculados ni estado de combate.
 */
export interface HealSkillValueScaling {
    type: 'heal';
    mana: SkillManaCostScaling;
    cd: SkillCooldownScaling;
    /** Rango y etiquetas de la curación; sus valores se calculan con el contexto del personaje. */
    components: HealComponentScaling;
    /** Reglas de crítico aplicables a la curación calculada. */
    flags?: SkillHealFlags;
}
