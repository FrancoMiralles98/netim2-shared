import { BonusRefKeys } from "../../bonus/bonus-index";
import { SkillDamageModifier, SkillHitModifier } from "./skill-damage-modifiers.type";
import { DamageType } from "./damage-config.type";
import { DamageTag } from "./damage-tag.types";
import { MechanicsEffectsKeys } from "./mechanics-effect.type";
import { SkillDamageFlags } from "./skill-damage-tags.type";
import { StatusEffectsKeys } from "./status-effects.type";
import { SkillBase } from "../skill-base.type";
/**
 * Representa una habilidad de daño.
 *
 * @extends SkillBase
 *
 * @remarks
 * Una skill de daño puede estar compuesta por uno o varios componentes.
 * Cada componente puede tener su propio tipo de daño, rango, tags, flags,
 * escalados, efectos de estado y mecánicas especiales.
 *
 * Esto permite representar habilidades simples, físicas, mágicas, mixtas,
 * con daño verdadero o con varios golpes sin tener que crear una estructura
 * distinta para cada caso.
 *
 * @property {'damage'} type
 * Tipo discriminante de la skill.
 *
 * @property {SkillDamageComponents[]} components
 * Lista de componentes de daño que componen la habilidad.
 *
 * @property {SkillHitModifier[]} [hitModifiers]
 * Modificadores opcionales que alteran la cantidad de golpes generados
 * por la skill.
 *
 * @property {SkillDamageModifier[]} [damageModifiers]
 * Modificadores opcionales que alteran el daño de cada golpe o componente.
 */
export interface SkillDamage extends SkillBase {
    type: 'damage';
    components: SkillDamageComponents[];
    hitModifiers?: SkillHitModifier[];
    damageModifiers?: SkillDamageModifier[];
}
/**
 * Representa un componente individual de daño dentro de una skill.
 *
 * @remarks
 * Cada componente se calcula de forma independiente.
 * Esto permite que una misma skill tenga, por ejemplo, una parte física
 * y una parte mágica con reglas distintas.
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
 * @property {Partial<Record<StatusEffectsKeys, number>>} [statusEffects]
 * Efectos de estado que este componente puede aplicar.
 *
 * El valor normalmente representa la chance de aplicar el efecto,
 * expresada en porcentaje.
 *
 * @property {Partial<Record<MechanicsEffectsKeys, number>>} [mechanicsEffects]
 * Mecánicas especiales que este componente puede aplicar.
 */
export interface SkillDamageComponents {
    range: {
        min: number;
        max: number;
    };
    damageType: DamageType;
    tags: DamageTag[];
    flags?: SkillDamageFlags;
    statsScaling?: StatsScaling[];
    statusEffects?: Partial<Record<StatusEffectsKeys, number>>;
    mechanicsEffects?: Partial<Record<MechanicsEffectsKeys, number>>;
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
}
