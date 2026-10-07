import type { CombatStatKey } from "../fight/activeAura/active-aura.type";
import type { BonusCondition } from "./bonus-condition.type";
import type { RoutStatKey } from "./rout-stat-key";
import type { AttributesRefKeys, BonusRefKeys } from "./bonusListHelper/ref-bonus-name.type";
import type { EquipType } from "../item/entities-props/equip.type";
import { ValueBonusType } from "./bonus-in-item.type";
/**
 * Efectos disponibles para un bonus.
 *
 * Define cómo se aplica el valor del bonus a estadísticas, atributos,
 * límites de estadísticas o propiedades de un ítem.
 */
export type BonusEffect = StatBonusEffect | ConditionalStatModifierEffect | StatsCapModifiers | AtribbuteModifiers | AttributeCapModifiers | ItemCapModifiers;
/**
 * Efecto directo sobre una estadística.
 *
 * @property {'stat'} type - Identificador del efecto.
 * @property {RoutStatKey} target - Ruta de la estadística que modifica el bonus.
 * @property {ValueBonusType} operation - Suma plana o aumento porcentual acumulativo.
 */
export interface StatBonusEffect {
    type: 'stat_modifiers';
    target: RoutStatKey[];
    operation: ValueBonusType;
}
/**
 * Modificador de una estadística de combate sujeto a condiciones.
 *
 * @property {'conditional_modifier'} type - Identificador del efecto.
 * @property {CombatStatKey} target - Estadística de combate que modifica el bonus.
 * @property operation - Operación aplicada al valor:
 * - `flat` → suma plana (puede ser negativo).
 * - `porcentage` / `reduced` → aumento o reducción porcentual acumulativa.
 * @property {BonusCondition[]} conditions - Condiciones necesarias para aplicar el modificador.
 */
export interface ConditionalStatModifierEffect {
    type: 'conditional_modifier';
    target: CombatStatKey;
    operation: ValueBonusType;
    conditions: BonusCondition[];
}
/**
 * Modificador del límite de una estadística de combate.
 *
 * @property {'cap_modifier'} type - Identificador del efecto.
 * @property {BonusRefKeys} target - Clave del bonus cuyo límite se modifica.
 * @property {ValueBonusType} operation - Suma plana o aumento porcentual acumulativo del límite.
 */
export interface StatsCapModifiers {
    type: 'stats_cap_modifier';
    target: BonusRefKeys;
    operation: ValueBonusType;
}
/**
 * Rutas de los puntos de bonus de cada atributo del personaje.
 *
 * Por ejemplo, `atribute.VIT.bonusPoints` o `atribute.INT.bonusPoints`.
 */
export type AttributeModifierTarget = `atribute.${AttributesRefKeys}.bonusPoints`;
/**
 * Propiedades del equipamiento que puede modificar un bonus.
 */
export type ItemCapModifierTarget = Extract<keyof EquipType, 'slot' | 'upgradeMax' | 'itemLv' | 'lvReq'>;
/**
 * Modificador de los puntos de bonus de un atributo.
 *
 * @property {'attribute_modifier'} type - Identificador del efecto.
 * @property {AttributeModifierTarget} target - Ruta de los puntos de bonus del atributo.
 * @property {ValueBonusType} operation - Suma plana o aumento porcentual acumulativo.
 */
export interface AtribbuteModifiers {
    type: 'attribute_modifier';
    target: AttributeModifierTarget;
    operation: ValueBonusType;
}
/**
 * Modificador del límite de un atributo del personaje.
 *
 * @property {'attribute_cap_modifier'} type - Identificador del efecto.
 * @property {AttributesRefKeys} target - Atributo cuyo límite se modifica: `VIT`, `INT`, `STR` o `DEX`.
 * @property {ValueBonusType} operation - Suma plana o aumento porcentual acumulativo del límite.
 */
export interface AttributeCapModifiers {
    type: 'attribute_cap_modifier';
    target: AttributesRefKeys;
    operation: ValueBonusType;
}
/**
 * Modificador de una propiedad del equipamiento.
 *
 * @property {'item_cap_modifier'} type - Identificador del efecto.
 * @property {ItemCapModifierTarget} target - Propiedad del ítem: slots, mejora máxima,
 * nivel interno o nivel requerido para equiparlo.
 * @property {ValueBonusType} operation - Suma plana o aumento porcentual acumulativo.
 */
export interface ItemCapModifiers {
    type: 'item_cap_modifier';
    target: ItemCapModifierTarget;
    operation: ValueBonusType;
}
