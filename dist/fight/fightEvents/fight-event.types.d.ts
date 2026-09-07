import { DamageDelivery } from "../statistics/damage-statistics.types";
import { FightEventBase } from "./resource/fight-event-base.types";
import { FightResult } from "../fight/fight.type";
import { CombatAction } from "../combatAction/combat-action.types";
import { HitResolutionSnapshot } from "./resource/hit-resolution-snapshot.types";
import { CombatDamageSource } from "./resource/combat-damage-resource.types";
import { ActiveStatusEffectId } from "../statusEffects/active-status-effect.types";
import { DamageType, UNIQUE_ID_SKILLS } from "../../skills/skill-index";
export interface DamageResolutionSnapshot {
    damageType: DamageType;
    delivery: DamageDelivery;
    appliedDamage: number;
}
export interface HealingResolutionSnapshot {
    critical: boolean;
    totalPrevented: number;
    appliedHealing: number;
}
export interface StatusEffectSnapshot {
    effectId: ActiveStatusEffectId;
    remainingTurns: number;
    stacks?: {
        current: number;
        toApplyExtraDamage: number;
    };
    damagePerTick?: number;
}
export interface FightStartedEvent extends FightEventBase<'fight_started'> {
    fighterIds: string[];
    turnOrder: string[];
}
export interface FightFinishedEvent extends FightEventBase<'fight_finished'> {
    result: FightResult;
}
export interface TurnStartedEvent extends FightEventBase<'turn_started'> {
    actorId: string;
}
export interface TurnSkippedEvent extends FightEventBase<'turn_skipped'> {
    actorId: string;
}
export interface TurnEndedEvent extends FightEventBase<'turn_ended'> {
    actorAlive: boolean;
    actorCurrentHp: number;
    actorCurrentMana: number;
}
export type FighterResourceType = 'hp' | 'mana';
export type ResourceChangeReason = 'hp_regeneration' | 'mana_regeneration' | 'mana_spent' | 'mana_restored' | 'mana_drained' | 'aura_upkeep';
export interface ResourceChangedEvent extends FightEventBase<'resource_changed'> {
    resource: FighterResourceType;
    previousValue: number;
    currentValue: number;
    amount: number;
}
export interface CooldownUpdatedEvent extends FightEventBase<'cooldown_updated'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingTurns: number;
}
export interface AuraActivatedEvent extends FightEventBase<'aura_activated'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingTurns?: number;
}
export interface AuraUpkeepPaidEvent extends FightEventBase<'aura_upkeep_paid'> {
    skillId: UNIQUE_ID_SKILLS;
    manaSpent: number;
    remainingMana: number;
}
export interface AuraDurationUpdatedEvent extends FightEventBase<'aura_duration_updated'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingTurns: number;
}
export interface AuraDeactivatedEvent extends FightEventBase<'aura_deactivated'> {
    skillId: UNIQUE_ID_SKILLS;
}
export interface BuffAppliedEvent extends FightEventBase<'buff_applied'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingTurns?: number;
}
export interface BuffConsumedEvent extends FightEventBase<'buff_consumed'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingUses: number;
}
export interface BuffDurationUpdatedEvent extends FightEventBase<'buff_duration_updated'> {
    skillId: UNIQUE_ID_SKILLS;
    remainingTurns: number;
}
export interface BuffDeactivatedEvent extends FightEventBase<'buff_deactivated'> {
    skillId: UNIQUE_ID_SKILLS;
}
export interface ActionSelectedEvent extends FightEventBase<'action_selected'> {
    action: CombatAction;
}
export interface BasicAttackUsedEvent extends FightEventBase<'basic_attack_used'> {
}
export interface SkillUsedEvent extends FightEventBase<'skill_used'> {
    skillId: UNIQUE_ID_SKILLS;
    manaSpent: number;
}
export interface DoubleHitTriggeredEvent extends FightEventBase<'double_hit_triggered'> {
    generatedHitCount: number;
}
export interface HitResolvedEvent extends FightEventBase<'hit_resolved'> {
    source: {
        type: 'basic_attack';
    } | {
        type: 'skill';
        skillId: UNIQUE_ID_SKILLS;
    };
    /**
     * Empieza desde 0.
     */
    hitIndex: number;
    resolution: HitResolutionSnapshot;
}
export interface DamageResolvedEvent extends FightEventBase<'damage_resolved'> {
    source: CombatDamageSource;
    componentIndex?: number;
    hitIndex?: number;
    critical: boolean;
    penetrating: boolean;
    resolution: DamageResolutionSnapshot;
    targetCurrentHp: number;
    targetDefeated: boolean;
}
export interface HealingResolvedEvent extends FightEventBase<'healing_resolved'> {
    resolution: HealingResolutionSnapshot;
    targetCurrentHp: number;
}
export interface StatusEffectAppliedEvent extends FightEventBase<'status_effect_applied'> {
    effect: StatusEffectSnapshot;
}
export interface StatusEffectResistedEvent extends FightEventBase<'status_effect_resisted'> {
    effectId: ActiveStatusEffectId;
}
export type StatusEffectUpdateType = 'duration_accumulated' | 'duration_refreshed' | 'damage_replaced' | 'damage_kept' | 'stack_added' | 'stack_triggered';
export interface StatusEffectUpdatedEvent extends FightEventBase<'status_effect_updated'> {
    effectId: ActiveStatusEffectId;
    updateType: StatusEffectUpdateType;
    current: StatusEffectSnapshot;
}
export interface StatusEffectTickedEvent extends FightEventBase<'status_effect_ticked'> {
    effectId: ActiveStatusEffectId;
    appliedDamage: number;
    targetCurrentHp: number;
    remainingTurns: number;
}
export interface StatusEffectStackProcEvent extends FightEventBase<'status_effect_stack_proc'> {
    effectId: ActiveStatusEffectId;
    currentStacks: number;
    appliedDamage: number;
    targetCurrentHp: number;
}
export interface StatusEffectDurationUpdatedEvent extends FightEventBase<'status_effect_duration_updated'> {
    effectId: ActiveStatusEffectId;
    previousRemainingTurns: number;
    remainingTurns: number;
}
export type StatusEffectDeactivationReason = 'duration_expired' | 'cleansed' | 'removed' | 'replaced' | 'source_defeated' | 'target_defeated';
export interface StatusEffectDeactivatedEvent extends FightEventBase<'status_effect_deactivated'> {
    effectId: ActiveStatusEffectId;
    targetFighterId: string;
}
export interface ControlEffectProcessedEvent extends FightEventBase<'control_effect_processed'> {
    fighterId: string;
    effectId: ActiveStatusEffectId;
    controlType: 'stun';
    preventedAction: boolean;
    remainingTurns?: number;
    expired: boolean;
}
export type FighterDefeatCause = {
    type: 'basic_attack';
    sourceFighterId: string;
} | {
    type: 'skill';
    sourceFighterId: string;
    skillId: UNIQUE_ID_SKILLS;
} | {
    type: 'status_effect';
    sourceFighterId: string;
    effectId: ActiveStatusEffectId;
} | {
    type: 'reflected';
    sourceFighterId: string;
};
export interface FighterDefeatedEvent extends FightEventBase<'fighter_defeated'> {
    fighterId: string;
    cause: FighterDefeatCause;
}
export type FightEvent = FightStartedEvent | TurnStartedEvent | TurnSkippedEvent | TurnEndedEvent | FightFinishedEvent | ResourceChangedEvent | CooldownUpdatedEvent | AuraActivatedEvent | AuraUpkeepPaidEvent | AuraDurationUpdatedEvent | AuraDeactivatedEvent | BuffAppliedEvent | BuffConsumedEvent | BuffDurationUpdatedEvent | BuffDeactivatedEvent | ActionSelectedEvent | BasicAttackUsedEvent | SkillUsedEvent | DoubleHitTriggeredEvent | HitResolvedEvent | DamageResolvedEvent | HealingResolvedEvent | StatusEffectAppliedEvent | StatusEffectResistedEvent | StatusEffectUpdatedEvent | StatusEffectTickedEvent | StatusEffectDurationUpdatedEvent | StatusEffectDeactivatedEvent | ControlEffectProcessedEvent | StatusEffectStackProcEvent | FighterDefeatedEvent;
