import type { ActiveStatusEffectId } from "../fight/statusEffects/active-status-effect.types";
import type { TypeWeapon } from "../item/entities-props/equip.type";

/**
 * Condiciones que determinan cuándo se aplica un efecto de bonus.
 */
export type BonusCondition =
  | TargetHasStatusCondition
  | TargetWeaponTypeCondition
  | SourceHpCondition
  | TargetHpCondition
  | SourceManaCondition;

/**
 * Operadores para comparar el porcentaje actual de un recurso con un umbral.
 */
export type BonusConditionOperator =
  | 'less'
  | 'greater'

/**
 * Comprueba que el objetivo tenga un efecto de estado activo.
 *
 * @property {'target_has_status'} type - Identificador de la condición.
 * @property {ActiveStatusEffectId} status - Estado que debe tener el objetivo.
 */
export interface TargetHasStatusCondition {
  type: 'target_has_status';
  status: ActiveStatusEffectId;
}

/**
 * Comprueba el tipo de arma del objetivo.
 *
 * @property {'target_weapon_type'} type - Identificador de la condición.
 * @property {TypeWeapon} weaponType - Tipo de arma que debe utilizar el objetivo.
 */
export interface TargetWeaponTypeCondition {
  type: 'target_weapon_type';
  weaponType: TypeWeapon;
}

/**
 * Compara el HP actual del origen, como porcentaje de su HP máximo.
 *
 * @property {'source_hp'} type - Identificador de la condición.
 * @property {BonusConditionOperator} operator - Comparación que se aplica al porcentaje actual.
 * @property {number} percentage - Umbral porcentual de HP, expresado de 0 a 100.
 */
export interface SourceHpCondition {
  type: 'source_hp';
  operator: BonusConditionOperator;
  percentage: number;
}

/**
 * Compara el HP actual del objetivo, como porcentaje de su HP máximo.
 *
 * @property {'target_hp'} type - Identificador de la condición.
 * @property {BonusConditionOperator} operator - Comparación que se aplica al porcentaje actual.
 * @property {number} percentage - Umbral porcentual de HP, expresado de 0 a 100.
 */
export interface TargetHpCondition {
  type: 'target_hp';
  operator: BonusConditionOperator;
  percentage: number;
}

/**
 * Compara el maná actual del origen, como porcentaje de su maná máximo.
 *
 * @property {'source_mana'} type - Identificador de la condición.
 * @property {BonusConditionOperator} operator - Comparación que se aplica al porcentaje actual.
 * @property {number} percentage - Umbral porcentual de maná, expresado de 0 a 100.
 */
export interface SourceManaCondition {
  type: 'source_mana';
  operator: BonusConditionOperator;
  percentage: number;
}
