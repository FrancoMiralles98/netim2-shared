import { subTypeEquip } from "../../item/entities-props/equip.type";
import type { BonusEffect } from "../bonus-effect.type";
import { allFullNameBonusList } from "./bonus-list-full-name.enum";
import { BonusRefKeys } from "./ref-bonus-name.type";

/**
 * Categorías de bonus disponibles en el sistema.
 *
 * Define a qué pool pertenece un bonus y cómo debe ser tratado
 * durante su generación.
 *
 * - `generic` → Bonus estándar que utilizan tiers numéricos (1–4).
 * - `corrupt` → Bonus especiales corruptos con reglas propias.
 * - `bonus6_7` → Bonus especiales de alto nivel (slots 6 y 7).
 */
export type BonusCategory = Generic | Corrupt | Bonus6_7


/**
 * Niveles de tier para bonus genéricos.
 *
 * Representa la calidad o potencia del bonus.
 * A mayor tier, mejores valores dentro de su rango.
 *
 * Solo aplica para bonus de categoría `generic`.
 */
export type BonusTierLv = 1 | 2 | 3 | 4

/**
 * Categoría de bonus genéricos.
 *
 * @property {'generic'} type - Identificador de la categoría.
 * @property {BonusTierLv} tier - Nivel del bonus, del 1 al 4 cuanto mas alto mejor el bonus, y mas dificl de conseguirlo
 * 
 */
export type Generic = {
  type: 'generic';
  tier: BonusTierLv;
}

/**
 * Categoría de bonus corruptos.
 *
 * @property {'corrupt'} type - Identificador de la categoría.
 * @property {'corrupt_item_acc' | 'none'} sub_type - Comportamiento del bonus corrupto:
 * - `corrupt_item_acc` → El valor del bonus se suma una vez por cada pieza de equipo corrupto equipada.
 * - `none` → El valor del bonus se aplica una sola vez, y no tiene nigun agregado especial adicional 
 */
export type Corrupt = {
  type: 'corrupt';
  sub_type: 'corrupt_item_acc' | 'none';
}

/**
 * Categoría de bonus especiales de los slots 6 y 7.
 *
 * @property {'bonus6_7'} type - Identificador de la categoría.
 */
export type Bonus6_7 = {
  type: 'bonus6_7';
}


/**
 * Representa un bonus completo dentro del sistema.
 *
 * @property full_name - Nombre visual del bonus mostrado al cliente.
 *
 * @property bonus_ref_name - Clave interna utilizada en el código
 * para referenciar el bonus
 *
 * @property {BonusCategory} category - Categoría del bonus: `Generic`, `Corrupt` o `Bonus6_7`.
 * @property category.type - Identificador de la categoría: `generic`, `corrupt` o `bonus6_7`.
 * @property {BonusTierLv} category.tier - Nivel del bonus, del 1 al 4.
 * Obligatorio únicamente cuando `category.type` es `generic`.
 * @property category.sub_type - Comportamiento del bonus corrupto: `corrupt_item_acc` o `none`.
 * Obligatorio únicamente cuando `category.type` es `corrupt`.
 *
 * @property {{min: number, max: number}} values - Rango de valores del bonus [mínimo, máximo].
 * 
 * @property {subTypeEquip[]} valid - Tipos de items que pueden tener este bonus (arma, amadura, botas).
 * @property {BonusEffect} effects - Efectos que aplica el bonus sobre estadísticas,
 * modificadores condicionales o límites. Cada efecto define su destino y operación.
 *
 */


export interface BonusType {
  full_name: allFullNameBonusList;
  bonus_ref_name: BonusRefKeys;
  category: BonusCategory;
  values: { min: number, max: number };
  valid: subTypeEquip[];
  effects: BonusEffect;
}
