import { UtilityBaseType } from "./utility-base.type";
/**
 * Representa una poción que restaura HP o maná.
 *
 * Las pociones normales definen efectos con cantidades; las de reserva indican los recursos que restauran.
 * @property {'poción'} type_utility - Identificador del tipo de utilidad.
 */
export type PocionType = NormalPotion | ReservePotion;
/** Propiedades comunes a las pociones normales y de reserva. */
export interface PotionBase extends UtilityBaseType {
    type_utility: 'poción';
}
/**
 * Poción normal sin reserva interna.
 *
 * @property {PotionEffect[]} effect - Recursos y cantidades que restaura cada activación.
 */
export interface NormalPotion extends PotionBase {
    potionType: 'normal';
    effect: PotionEffect[];
}
/**
 * Poción con una reserva compartida por los recursos que puede restaurar.
 *
 * @property {'reserve'} potionType - Identificador de las pociones con reserva.
 * @property {('hp' | 'mana')[]} resource - Recursos que puede restaurar desde su reserva.
 * @property {PotionReserve} reserve - Capacidad inicial y saldo restante de la poción.
 */
export interface ReservePotion extends PotionBase {
    potionType: 'reserve';
    resource: ('hp' | 'mana')[];
    reserve: PotionReserve;
}
/**
 * Reserva de restauración de una poción.
 *
 * @property {number} max - Valor inicial de la reserva.
 * @property {number} actual - Saldo restante, que disminuye al restaurar HP o maná.
 * Debe mantenerse entre 0 y max.
 */
export type PotionReserve = {
    max: number;
    actual: number;
};
/**
 * Describe la restauración de un recurso al utilizar una poción.
 *
 * @property {number} amount - Cantidad de recurso que restaura cada activación.
 * @property {'hp' | 'mana'} resource - Recurso que restaura el efecto.
 * @example
 * // Restaura 500 HP por activación.
 * { amount: 500, resource: 'hp' }
 */
export type PotionEffect = {
    amount: number;
    resource: 'hp' | 'mana';
};
