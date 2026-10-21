import { UtilityBaseType } from "./utility-base.type";
/**
 * Representa una poción que restaura HP o maná.
 *
 * @property {PotionEffect[]} effect - Efectos de restauración de la poción.
 * @property {'poción'} type_utility - Identificador del tipo de utilidad.
 */
export type PocionType = NormalPotion | ReservePotion;

/** Propiedades comunes a las pociones normales y de reserva. */
export interface PotionBase extends UtilityBaseType {
  effect: PotionEffect[];
  type_utility: 'poción';
}

/** Poción normal sin reserva interna. */
export interface NormalPotion extends PotionBase {
  potionType: 'normal';
}

/**
 * Poción con una reserva compartida por sus efectos de restauración.
 *
 * @property {'reserve'} potionType - Identificador de las pociones con reserva.
 * @property {PotionReserve} reserve - Capacidad inicial y saldo restante de la poción.
 */
export interface ReservePotion extends PotionBase {
  potionType: 'reserve';
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
}
