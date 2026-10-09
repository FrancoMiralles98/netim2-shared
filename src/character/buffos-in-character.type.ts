import { BonusInItem } from "../bonus/bonus-in-item.type";

/**
 * Representa un buffo activo aplicado a un personaje.
 *
 * @description
 * Contiene la información necesaria para calcular su efecto y mostrarlo en cliente.
 *
 * @property {number} buff_duration
 * Duración total del buffo en segundos.
 *
 * @property {number} buff_base_duration
 * Duración original del buffo (sin modificaciones).
 *
 * @property {number} id_buff
 * Identificador único del buffo.
 *
 * @property {number} buff_inicialization
 * Timestamp del momento en que se aplicó el buffo.
 *
 * @property {string} buff_description
 * Descripción del efecto del buffo.
 *
 * @property {string} buff_name
 * Nombre del buffo.
 */
export interface AppliedBuffos {
  implicitBonus: BonusInItem[]
  corruptBonus: BonusInItem[]
  buff_duration: number;
  buff_base_duration: number;
  id_buff: number;
  buff_inicialization: number;
  buff_description: string;
  buff_name: string;
}