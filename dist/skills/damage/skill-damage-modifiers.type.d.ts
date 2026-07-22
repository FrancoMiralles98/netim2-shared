import { FightEffectId } from "../../fight/effects.types";
/**
 * Modificadores que alteran el daño de una skill.
 */
export type SkillDamageModifier = ChanceDamageModifier | WeightedDamageModifier | ConditionalDamageModifier;
/**
* Modificador de daño basado en una probabilidad simple.
*
* @remarks
* Si la chance se activa, el daño del golpe se multiplica por el valor definido.
*
* @property {'chance_multiplier'} type
* Tipo discriminante del modificador.
*
* @property {number} chance
* Probabilidad de activar el modificador, expresada en porcentaje.
*
* @property {number} multiplier
* Multiplicador aplicado al daño si el modificador se activa.
*
* @property {string} [description]
* Descripción opcional del efecto para mostrar en logs, tooltips o UI.
*/
export interface ChanceDamageModifier {
    type: 'chance_multiplier';
    chance: number;
    multiplier: number;
    description?: string;
}
/**
 * Modificador de daño basado en una tabla ponderada de resultados posibles.
 *
 * @remarks
 * Se elige una opción según su peso/chance.
 * Cada opción puede aplicar un multiplicador diferente al daño.
 *
 * Es útil para habilidades con daño variable especial, por ejemplo:
 * - 70% de chance de daño normal.
 * - 25% de chance de daño aumentado.
 * - 5% de chance de daño muy alto.
 *
 * @property {'weighted_multiplier'} type
 * Tipo discriminante del modificador.
 *
 * @property {{chance:number,multiplier:number,description?:string}[]} options
 * Lista de opciones posibles. Cada opción define su chance y el multiplicador
 * que aplicará al daño si resulta seleccionada.
 */
export interface WeightedDamageModifier {
    type: 'weighted_multiplier';
    options: {
        chance: number;
        multiplier: number;
        description?: string;
    }[];
}
/**
 * Modificador de daño que se aplica solo si se cumple una condición.
 *
 * @remarks
 * Sirve para efectos como:
 * - causar más daño si el objetivo está incendiado;
 * - causar más daño si el atacante tiene cierto buff;
 * - aumentar daño contra enemigos afectados por veneno, sangrado, etc.
 *
 * @property {'conditional_multiplier'} type
 * Tipo discriminante del modificador.
 *
 * @property {DamageCondition} condition
 * Condición necesaria para aplicar el modificador.
 *
 * @property {number} multiplier
 * Multiplicador aplicado al daño si la condición se cumple.
 *
 * @property {string} [description]
 * Descripción opcional del efecto para mostrar en logs, tooltips o UI.
 */
export interface ConditionalDamageModifier {
    type: 'conditional_multiplier';
    condition: DamageCondition;
    multiplier: number;
    description?: string;
}
/**
 * Condiciones que puede evaluar un modificador de daño.
 */
export type DamageCondition = {
    type: 'target_has_effect';
    effectId: FightEffectId;
} | {
    type: 'source_has_effect';
    effectId: FightEffectId;
};
/**
 * Modificadores que alteran la cantidad de golpes generados por una skill.
 *
 * @remarks
 * Estos modificadores no deberían multiplicar directamente el daño total.
 * Su función es generar múltiples instancias de golpe para que cada una pueda
 * calcular daño, crítico, bloqueo, evasión, efectos y métricas de forma independiente.
 */
export type SkillHitModifier = ChanceMultiHitModifier | WeightedHitCountModifier;
/**
 * Modificador que permite que una skill golpee varias veces según una chance.
 *
 * @remarks
 * Si el modificador se activa, la skill genera la cantidad de golpes definida
 * en `hits`. Cada golpe usa `damageMultiplierPerHit`.
 *
 * Esto permite comportamientos como:
 * - 30% de chance de golpear 3 veces;
 * - cada golpe puede calcularse por separado;
 * - cada golpe puede aplicar crítico, bloqueo, evasión o efectos.
 *
 * @property {'chance_multi_hit'} type
 * Tipo discriminante del modificador.
 *
 * @property {number} chance
 * Probabilidad de activar el multi-hit, expresada en porcentaje.
 *
 * @property {number} hits
 * Cantidad total de golpes generados si el modificador se activa.
 *
 * @property {number} damageMultiplierPerHit
 * Multiplicador de daño aplicado a cada golpe individual.
 *
 * @property {string} [description]
 * Descripción opcional del efecto para mostrar en logs, tooltips o UI.
 */
export interface ChanceMultiHitModifier {
    type: 'chance_multi_hit';
    /**
     * Chance de activar el multi-hit.
     */
    chance: number;
    /**
     * Cantidad total de golpes si se activa.
     */
    hits: number;
    /**
     * Multiplicador de daño de cada golpe.
     *
     * Si cada golpe pega al 100%, usar 1.
     * Si querés que 3 golpes dividan el daño base, usar 0.33.
     */
    damageMultiplierPerHit: number;
    description?: string;
}
/**
 * Modificador que define la cantidad de golpes mediante una tabla ponderada.
 *
 * @remarks
 * Se elige una opción según su peso/chance.
 * Cada opción define cuántos golpes genera la skill y cuánto daño hace cada golpe.
 *
 * Es útil para habilidades con comportamiento variable, por ejemplo:
 * - 60% de chance de golpear 1 vez;
 * - 30% de chance de golpear 2 veces;
 * - 10% de chance de golpear 4 veces.
 *
 * @property {'weighted_hit_count'} type
 * Tipo discriminante del modificador.
 *
 * @property {{chance:number,hits:number,damageMultiplierPerHit:number,description?:string}[]} options
 * Lista de opciones posibles. Cada opción define su chance, cantidad de golpes
 * y multiplicador de daño por golpe.
 */
export interface WeightedHitCountModifier {
    type: 'weighted_hit_count';
    options: {
        chance: number;
        hits: number;
        damageMultiplierPerHit: number;
        description?: string;
    }[];
}
