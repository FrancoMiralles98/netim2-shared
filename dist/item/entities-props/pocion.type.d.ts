import { UtilityBaseType } from "./utility-base.type";
/**
 * Representa una poción que restaura HP o maná.
 *
 * @property {PotionEffect[]} effect - Efectos de restauración de la poción.
 * @property {'poción'} type_utility - Identificador del tipo de utilidad.
 */
export interface PocionType extends UtilityBaseType {
    effect: PotionEffect[];
    type_utility: 'poción';
}
/**
 * Describe la restauración de un recurso al utilizar una poción.
 *
 * @property {number} amount - Cantidad de recurso que restaura cada activación.
 * @property {'hp' | 'mana'} resource - Recurso que restaura el efecto.
 * @property {number} [reserve] - Reserva restante disponible para restaurar el recurso.
 * Cada activación descuenta de esta reserva la cantidad restaurada.
 * Si no se define, el efecto no utiliza una reserva interna.
 *
 * @example
 * // Restaura 500 HP por activación desde una reserva inicial de 100.000 HP.
 * { amount: 500, resource: 'hp', reserve: 100000 }
 */
export type PotionEffect = {
    amount: number;
    resource: 'hp' | 'mana';
    reserve?: number;
};
