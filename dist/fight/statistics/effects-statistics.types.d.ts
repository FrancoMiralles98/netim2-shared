import { ActiveStatusEffectId } from "../statusEffects/active-status-effect.types";
export interface EffectStatistics {
    appliedByType: Partial<Record<ActiveStatusEffectId, number>>;
    receivedByType: Partial<Record<ActiveStatusEffectId, number>>;
    resistedByType: Partial<Record<ActiveStatusEffectId, number>>;
}
