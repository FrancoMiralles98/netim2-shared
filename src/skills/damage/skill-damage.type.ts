import { BonusRefKeys, RoutStatKey } from "../../bonus/bonus-index";
import { SkillDamageModifier, SkillHitModifier } from "./skill-damage-modifiers.type";
import { DamageType } from "./damage-config.type";
import { DamageTag } from "./damage-tag.types";
import { MechanicsEffectsKeys } from "./mechanics-effect.type";
import { SkillDamageFlags } from "./skill-damage-tags.type";
import { StatusEffectsKeys } from "./status-effects.type";
import { SkillBase } from "../skill-base.type";
import { TypeWeapon } from "../../item/entities-props/equip.type";
import type { DamageSkillValueScaling } from "../scaling/skillDamageValueScaling";

/**
 * Representa una habilidad de daño.
 *
 * @extends SkillBase
 *
 * @remarks
 * La habilidad usa un único componente con su rango, tipo de daño y reglas.
 * Los golpes adicionales se controlan mediante hitModifiers y usan ese mismo componente.
 *
 * @property {'damage'} type
 * Tipo discriminante de la skill.
 * 
 * @property {TypeWeapon[]} weaponRestricted
 * Las armas que esta habilitadas para que pueda usar la habilidad, si no se añade
 * se puede usar la habilidad sin tener un arma equipada
 *
 * @property {SkillDamageComponents} components
 * Único componente de daño de la habilidad.
 *
 * @property {SkillHitModifier} [hitModifiers]
 * Modificadores opcionales que alteran la cantidad de golpes generados
 * por la skill.
 *
 * @property {SkillDamageModifier} [damageModifiers]
 * Modificador opcional que altera el daño de cada golpe.
 * @property {DamageSkillValueScaling} escalado - Configuración para calcular los valores de la habilidad.
 */
export interface SkillDamage extends SkillBase {
    type: 'damage'
    weaponRestricted: TypeWeapon[]
    components: SkillDamageComponents;
    hitModifiers?: SkillHitModifier;
    damageModifiers?: SkillDamageModifier;
    statusEffects?: Partial<Record<StatusEffectsKeys, number>>
    mechanicsEffects?: Partial<Record<MechanicsEffectsKeys, number>>
    escalado: DamageSkillValueScaling
}

/**
 * Componente único de daño utilizado por los golpes de una habilidad.
 *
 * @property {{min:number,max:number}} range
 * Rango de daño del componente.
 *
 * @property {DamageType} damageType
 * Tipo principal de daño del componente.
 *
 * Define cómo se calcula o mitiga el daño.
 * Por ejemplo: daño físico, mágico o verdadero.
 *
 * @property {DamageTag[]} tags
 * Etiquetas descriptivas del componente.
 *
 * Sirven para que bonus, pasivas, condiciones o modificadores puedan detectar
 * características del daño sin depender de lógica hardcodeada por skill.
 *
 * @property {SkillDamageFlags} [flags]
 * Reglas opcionales del componente.
 *
 * Indican si el daño puede hacer crítico, fallar, ser bloqueado
 * o ser esquivado.
 *
 * @property {StatsScaling[]} [statsScaling]
 * Escalados adicionales por stats del luchador.
 *
 */
export interface SkillDamageComponents {
    range: { min: number, max: number }
    damageType: DamageType;
    tags: DamageTag[];
    flags?: SkillDamageFlags
    statsScaling?: StatsScaling[]
}

/**
 * Define un escalado adicional de daño basado en una stat o bonus del luchador.
 *
 * @remarks
 * Se utiliza para que una skill pueda sumar daño extra en base a una stat
 * específica del personaje.
 *
 * @property {BonusRefKeys} stat
 * Stat o bonus usado como fuente del escalado.
 *
 * @property {number} ratio
 * Proporción del valor de la stat que se convierte en daño adicional.
 *
 * @example
 * Si `stat = 'vm'`, `ratio = 0.5` y el personaje tiene 50 de vm:
 *
 * ```ts
 * dañoExtra = 50 * 0.5 // 25
 * ```
 */
export interface StatsScaling {
    stat: BonusRefKeys;
    ratio: number;
    target: RoutStatKey;
    power?: number;
}


