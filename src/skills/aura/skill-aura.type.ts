import { BonusRefKeys } from "../../bonus/bonus-index";
import { AuraTag } from "./aura-tags.types";
import { SkillBase } from "../skill-base.type";

/**
 * Representa una habilidad de tipo aura.
 *
 * @extends SkillBase
 *
 * @remarks
 * Una aura es una habilidad que, al activarse, aplica beneficios o penalizaciones
 * durante una duración determinada o mientras pueda mantenerse activa.
 * 
 * @property {'aura'} type
 * Tipo discriminante de la skill.
 *
 * @property {DurationConfig} [duration]
 * Duración opcional del aura.
 *
 * Si no se define, el sistema puede interpretarla como una aura instantánea,
 * pasiva o mantenida según la lógica del combate.
 *
 * @property {Partial<Record<BonusRefKeys, number>>} buffos
 * Bonus aplicados por el aura mientras está activa.
 *
 * @property {AuraTag[]} tags
 * Etiquetas que describen el comportamiento del aura.
 *
 * Sirven para clasificarla como ofensiva, defensiva, buff, debuff, etc.
 */
export interface SkillAura extends SkillBase {
    type: 'aura';
    duration?: DurationConfig,
    buffos: Partial<Record<BonusRefKeys, number>>,
    tags: AuraTag[]
}

/**
 * Configuración de duración posible para una aura.
 *
 * @remarks
 * Define si el aura dura una cantidad fija de turnos o si permanece activa
 * hasta que el personaje no pueda seguir manteniéndola por falta de maná.
 */
export type DurationConfig = TurnsDuration | UntilNoManaDuration

/**
 * Duración fija por cantidad de turnos.
 *
 * @remarks
 * El aura permanece activa durante la cantidad de turnos indicada.
 * Al llegar a 0 turnos restantes, el aura se desactiva.
 *
 * @property {'turns'} type
 * Tipo discriminante de duración.
 *
 * @property {number} turns
 * Cantidad de turnos que dura el aura.
 */
export interface TurnsDuration {
    type: 'turns';
    turns: number
}

/**
 * Duración mantenida hasta quedarse sin maná.
 *
 * @remarks
 * El aura permanece activa mientras el personaje pueda pagar su coste de
 * mantenimiento. Cuando no tenga maná suficiente, el aura se desactiva.
 *
 * @property {'until_no_mana'} type
 * Tipo discriminante de duración.
 */
export interface UntilNoManaDuration {
    type: 'until_no_mana'
}
