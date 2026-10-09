import { BonusInItem } from "../../bonus/bonus-in-item.type";
import { UtilityBaseType } from "./utility-base.type";


/**
 * @description Representa un objeto de tipo "buff" (mejora temporal) en el sistema.
 * @extends UtilityBaseType - Hereda propiedades base de un ítem común.
 * @property {'buff'} type_utility - Tipo fijo que identifica como buff (para sistemas de búsqueda).
 * @property {number} duration - Duración del buff, menciona la cantidad de minutos que dura el buffo
 * @property {number} idBuff - Ruta/URL del icono visual del buff.
 * @property {'utility'} type - id del buff, se utiliza para no poder acomular mismo tipo de buffo de diferente items
 * @property {[number, BonusRefKeys]} implicitBonus - Efecto principal del buff.
 *  @exmaple dupla donde: [valorDelBonus, atributoAfectado]. Ejemplo: [15, 'vm'].
 *
 */
export interface BuffType extends UtilityBaseType {
  type_utility: 'buff';
  duration: number;
  type: 'utility';
  idBuff: number;
  implicitBonus: BonusInItem[];
  corruptBonus: BonusInItem[]
}
