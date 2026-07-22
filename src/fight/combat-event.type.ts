import { DamageContext } from "./damage.types";
import { FighterType } from "./fighter.type";

export type CombatEventType =
  | 'before_damage'
  | 'after_damage'
  | 'on_hit'
  | 'on_turn_start'
  | 'on_turn_end'
  | 'on_heal'
  | 'on_effect_apply';

export interface CombatEvent {
  type: CombatEventType;
  source: FighterType;
  target: FighterType;
  damageContext?: DamageContext;
  value?: number;
}