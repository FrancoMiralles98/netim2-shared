import type { RoutStatKey } from '../../bonus/rout-stat-key';
import type { CombatStatModifierOperation } from '../aura/skill-aura.type';
import type { SkillValueScaling } from './skill-value-scaling.types';
export interface SkillCooldownScaling {
    /** Turnos enteros >= 0. Omitir un evento significa que no aplica cooldown allí. */
    onActivate?: SkillValueScaling;
    onDeactivate?: SkillValueScaling;
}
/** Costes >= 0. El coste inicial y el mantenimiento progresan independientemente. */
export type SkillManaCostScaling = {
    type: 'none';
} | {
    type: 'instant';
    amount: SkillValueScaling;
} | {
    type: 'upkeep';
    initialAmount?: SkillValueScaling;
    amountPerTurn: SkillValueScaling;
};
export type SkillDurationScaling = {
    type: 'turns';
    turns: SkillValueScaling;
} | {
    type: 'until_no_mana';
};
/** El destino identifica el bonus; no se duplica en un bonusRefKey independiente. */
export interface SkillStatModifierScaling {
    target: RoutStatKey;
    operation: CombatStatModifierOperation;
    value: SkillValueScaling;
}
