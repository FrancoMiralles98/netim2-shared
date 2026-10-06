import type { CombatStatKey } from "../fight/activeAura/active-aura.type";
import type { BonusCondition } from "./bonus-condition.type";
import type { RoutStatKey } from "./rout-stat-key";

/**
 * Efectos disponibles para un bonus.
 *
 * Define cómo se aplica el valor del bonus a una estadística o a su límite.
 */
export type BonusEffect =
  | StatBonusEffect
  | ConditionalStatModifierEffect
  | CapModifierEffect;

/**
 * Efecto directo sobre una estadística.
 *
 * @property {'stat'} type - Identificador del efecto.
 * @property {RoutStatKey} target - Ruta de la estadística que modifica el bonus.
 * @property {'flat' | 'increased'} operation - Suma plana o aumento porcentual acumulativo.
 */
export interface StatBonusEffect {
  type: 'stat';
  target: RoutStatKey[];
  operation: 'flat' | 'increased';
}

/**
 * Modificador de una estadística de combate sujeto a condiciones.
 *
 * @property {'conditional_modifier'} type - Identificador del efecto.
 * @property {CombatStatKey} target - Estadística de combate que modifica el bonus.
 * @property operation - Operación aplicada al valor:
 * - `flat` → suma plana (puede ser negativo).
 * - `increased` / `reduced` → aumento o reducción porcentual acumulativa.
 * @property {BonusCondition[]} conditions - Condiciones necesarias para aplicar el modificador.
 */
export interface ConditionalStatModifierEffect {
  type: 'conditional_modifier';
  target: CombatStatKey;
  operation: 'flat' | 'increased' | 'reduced'
  conditions: BonusCondition[];
}

/**
 * Modificador del límite de una estadística de combate.
 *
 * @property {'cap_modifier'} type - Identificador del efecto.
 * @property {CombatStatKey} target - Estadística cuyo límite modifica el bonus.
 * @property {'flat' | 'increased'} operation - Suma plana o aumento porcentual acumulativo del límite.
 */
export interface CapModifierEffect {
  type: 'cap_modifier';
  target: CombatStatKey;
  operation: 'flat' | 'increased';
}
