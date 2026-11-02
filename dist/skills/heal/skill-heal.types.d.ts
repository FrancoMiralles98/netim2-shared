import { TypeWeapon } from "../../item/entities-props/equip.type";
import type { HealSkillValueScaling } from "../scaling/skillHealValueScaling";
import { SkillBase } from "../skill-base.type";
/**
 * Habilidad con un único componente de curación.
 *
 * @property {SkillHealComponents} components - Rango y etiquetas de la curación calculada.
 * @property {SkillHealFlags} [flags] - Reglas de crítico de la curación.
 * @property {HealSkillValueScaling} escalado - Configuración de progresión y aportes del personaje.
 */
export interface SkillHeal extends SkillBase {
    type: 'heal';
    weaponRestricted: TypeWeapon[];
    components: SkillHealComponents;
    flags?: SkillHealFlags;
    escalado: HealSkillValueScaling;
}
/** Rango mínimo/máximo y etiquetas del único componente de curación. */
export interface SkillHealComponents {
    range: {
        min: number;
        max: number;
    };
    tags: HealTag[];
}
export type HealTag = 'heal' | 'skill ';
/** Reglas que utiliza el resolver al aplicar una curación. */
export interface SkillHealFlags {
    /** Permite que la curación sea crítica. */
    canCrit: boolean;
}
