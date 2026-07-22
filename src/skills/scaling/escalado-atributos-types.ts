import { CharacterAttribute } from "../../character/character-stats.type";
/**
 *  @property {Partial<Record<CharacterAttribute, number>>} escaladoAtributos
 * Porcentaje de los atributos del personaje que se utilizan para potenciar los buffos.
 *
 * @description
 * Cada atributo indicado aporta un porcentaje de su valor total,
 * el cual se usa como % adicional sobre el valor final del buffo.
 *
 * @example
 * Si el personaje tiene:
 * - INT = 100
 * - escaladoAtributos = { INT: 10 }
 *
 * Entonces:
 * → se toma un 10% de INT (10)
 *
 */
export interface EscaladoAtributos {
    escaladoAtributos: Partial<Record<CharacterAttribute, number>>
}