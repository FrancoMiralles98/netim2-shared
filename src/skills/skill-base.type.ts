import { MasteryLvRank } from "./skill-lv-rank.types";
import { UNIQUE_ID_SKILLS } from "./unique-id-skill.enum";

/**
 * Propiedades base compartidas por todas las habilidades.
 *
 * @remarks
 * Define la información común necesaria para identificar una skill,
 * mostrarla en la UI y resolver sus costos/cooldowns durante el combate.
 *
 * @property {UNIQUE_ID_SKILLS} id
 * Identificador único de la habilidad.
 *
 * @property {number | MasteryLvRank} lv
 * Nivel actual de la habilidad.
 *
 * Puede ser un número normal o un rango especial de maestría.
 *
 * @property {string} nombre
 * Nombre visible de la habilidad.
 *
 * @property {string} description
 * Descripción de la habilidad.
 *
 * @property {SkillManaCost} mana
 * Configuración del costo de maná de la habilidad.
 *
 * @property {SkillCooldownConfig} cd
 * Configuración de cooldown de la habilidad.
 */
export interface SkillBase {
    id: UNIQUE_ID_SKILLS,
    lv: number | MasteryLvRank
    nombre: string;
    description: string;
    mana: SkillManaCost
    cd: SkillCooldownConfig
}

/**
 * Configuración de cooldown de una habilidad.
 *
 * @remarks
 * Permite definir distintos momentos en los que una habilidad entra en cooldown.
 *
 * Es especialmente útil para auras o habilidades mantenidas:
 * - `onActivate`: cooldown aplicado al activar o usar la habilidad.
 * - `onDeactivate`: cooldown aplicado cuando la habilidad se desactiva.
 *
 * Para skills instantáneas de daño, normalmente se usa `onActivate`.
 * Para auras mantenidas, normalmente conviene usar `onDeactivate`.
 *
 * @property {number} [onActivate]
 * Cantidad de turnos de cooldown aplicados al activar o usar la habilidad.
 *
 * @property {number} [onDeactivate]
 * Cantidad de turnos de cooldown aplicados al desactivar la habilidad.
 */
export interface SkillCooldownConfig {
    onActivate?: number;
    onDeactivate?: number;
}

/**
 * Tipos posibles de costo de maná de una habilidad.
 *
 * @remarks
 * Permite representar habilidades sin costo, habilidades con costo instantáneo
 * y habilidades mantenidas que consumen maná por turno.
 */
export type SkillManaCost =
    | InstantManaCost
    | UpkeepManaCost
    | NoManaCost;

/**
* Configuración para habilidades sin costo de maná.
*
* @remarks
* Se utiliza para habilidades gratuitas, pasivas o acciones que no consumen maná.
*
* @property {'none'} type
* Tipo discriminante del costo de maná.
*/
export interface NoManaCost {
    type: 'none';
}

/**
 * Configuración para habilidades con costo instantáneo de maná.
 *
 * @remarks
 * El maná se consume una sola vez al usar la habilidad.
 *
 * Es el caso típico de habilidades de daño, curación o buffs instantáneos.
 *
 * @property {'instant'} type
 * Tipo discriminante del costo de maná.
 *
 * @property {number} amount
 * Cantidad de maná consumida al usar la habilidad.
 */
export interface InstantManaCost {
    type: 'instant';
    amount: number;
}

/**
 * Configuración para habilidades con costo de mantenimiento.
 *
 * @remarks
 * Se utiliza principalmente para auras o habilidades activas que permanecen
 * funcionando durante varios turnos.
 *
 * Puede tener un costo inicial al activarse y un costo recurrente por turno.
 *
 * @property {'upkeep'} type
 * Tipo discriminante del costo de maná.
 *
 * @property {number} [initialAmount]
 * Costo inicial de maná al activar la habilidad.
 *
 * Si no se define, la habilidad no consume maná inicial.
 *
 * @property {number} amountPerTurn
 * Cantidad de maná consumida por turno mientras la habilidad esté activa.
 */
export interface UpkeepManaCost {
    type: 'upkeep';
    initialAmount?: number;
    amountPerTurn: number;
}