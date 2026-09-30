import { AttributesRefKeys, BonusRefKeys } from "../bonus/bonus-index";
/**
 * estos valores sirven para multiplicar el valor que tiene en timer_lv el character
 */
export declare const base_timers_pvm_multiplier: {
    mob: number;
    netims: number;
    boss: number;
};
export declare const timer_pvp: number;
/**
 * Configuración de los efectos que aporta cada atributo del personaje sobre las estadisticas
 *
 * Cada atributo modifica una o más stats base del personaje
 * El valor numérico representa cuánto incrementa esa stat por cada punto del atributo
 *
 * Importante:
 * Unicamente en el atributo de VIT, el valor de hp se interpreta como un porcentaje
 * @example
 * - VIT: { hp: 1 }
 *   - Cada punto de VIT otorga +1% de vida maxima
 */
export declare const ATTRIBUTE_EFFECTS_CONFIG: Record<AttributesRefKeys, Partial<Record<BonusRefKeys, number>>>;
