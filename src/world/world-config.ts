import { AttributesRefKeys, BonusRefKeys } from "../bonus/bonus-index"

/**
 * estos valores sirven para multiplicar el valor que tiene en timer_lv el character
 */
export const base_timers_pvm_multiplier = {
    mob: 1,
    netims: 2,
    boss: 4,
}

//Este es el timer unico de PVP, siempre es el mismo independientemente del nivel (en milisegundos)
export const timer_pvp = 5 * 60 * 1000 //ahora mismo 5 minutos


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
export const ATTRIBUTE_EFFECTS_CONFIG: Record<AttributesRefKeys, Partial<Record<BonusRefKeys, number>>> = {
    VIT: { hp: 1 },
    INT: { ap: 1.5, vh: 0.3 },
    STR: { ad: 2 },
    DEX: { ad: 1, va: 0.3 },
}