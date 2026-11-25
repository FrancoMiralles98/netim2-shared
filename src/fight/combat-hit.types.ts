import type { DamageType, SkillDamageModifier } from '../skills/skill-index';
import type { UNIQUE_ID_SKILLS } from '../skills/unique-id-skill.enum';
import type { ActiveStatusEffectId } from './statusEffects/active-status-effect.types';
import type { CharacterFightResultResponse, FightResponse } from './api/fightResponse';
import type { FighterTurnPlayback, FightPlaybackPayload, FightPlaybackTurn } from './fightEvents/fight-playback-payload.types';

/** Origen del golpe resuelto durante una acción de combate. */
export type CombatHitSource = { type: 'basic_attack' } | { type: 'skill'; skillId: UNIQUE_ID_SKILLS };

export interface CombatEffectSnapshot {
    instanceId: string;
    sourceFighterId: string;
    remainingTurns?: number;
    damagePerTick?: number;
    stacks?: { current: number; toApplyExtraDamage: number };
}

export type CombatEffectChange = 'applied' | 'duration_accumulated' | 'duration_refreshed'
    | 'damage_replaced' | 'damage_kept' | 'damage_increased' | 'application_replaced'
    | 'stack_added' | 'stack_triggered';

/** Una aplicación puede renovar duración, reemplazar daño y detonar stacks a la vez. */
export interface CombatHitStatusEffect {
    effectId: ActiveStatusEffectId;
    applied: boolean;
    resisted: boolean;
    changes: CombatEffectChange[];
    before?: CombatEffectSnapshot;
    after?: CombatEffectSnapshot;
    stackProc?: {
        consumedStacks: number;
        remainingStacks: number;
        procCount: number;
        appliedDamage: number;
        targetHpBefore: number;
        targetHpAfter: number;
    };
}

export interface CombatHitHealing {
    source: 'robo_vida' | 'vampirismo_hechizo';
    requestedHealing: number;
    effectiveHealing: number;
    preventedHealing: number;
    overhealing: number;
    hpBefore: number;
    hpAfter: number;
}

export interface CombatHitResult {
    /** Índice desde cero dentro de la acción. */
    hitIndex: number;
    source: CombatHitSource;
    attackerId: string;
    targetId: string;
    outcome: 'hit' | 'missed' | 'dodged' | 'blocked';
    critical: boolean;
    penetrating: boolean;
    damage: { direct: number; additional: number; total: number };
    components: { componentIndex: number; damageType: DamageType; appliedDamage: number }[];
    healing: CombatHitHealing;
    reflectedDamage: number;
    statusEffects: CombatHitStatusEffect[];
    attackerHpBefore: number;
    attackerHpAfter: number;
    targetHpBefore: number;
    targetHpAfter: number;
    attackerDefeated: boolean;
    targetDefeated: boolean;
}

/** Multiplicadores resueltos para esta acción, expresados como factores (2 equivale a ×2). */
export interface CombatActionModifiers {
    plannedHitCount: number;
    executedHitCount: number;
    damageMultiplierPerHit: number;
    /** Factores seleccionados al preparar una habilidad; no se envían para básicos. */
    skillDamageMultiplier?: number;
    buffDamageMultiplier?: number;
    contextualDamageMultiplier?: number;
    damageModifierApplied: boolean;
    damageModifierType?: SkillDamageModifier['type'];
    damageModifierDescription?: string;
}

export interface CombatAttackPlayback {
    source: CombatHitSource;
    modifiers: CombatActionModifiers;
    hits: CombatHitResult[];
    totalDirectDamage: number;
    totalAdditionalDamage: number;
    totalAppliedDamage: number;
    totalHealing: number;
    totalReflectedDamage: number;
}

/** @deprecated Usar FighterTurnPlayback: ya incluye attack. */
export type FighterTurnPlaybackWithHits = FighterTurnPlayback;
/** @deprecated Usar FightPlaybackTurn. */
export type FightPlaybackTurnWithHits = FightPlaybackTurn;
/** @deprecated Usar FightPlaybackPayload. */
export type FightPlaybackPayloadWithHits = FightPlaybackPayload;
/** @deprecated Usar FightResponse: ya incluye la reproducción por hit. */
export type FightResponseWithHits = FightResponse;
/** @deprecated Usar CharacterFightResultResponse. */
export type CharacterFightResultResponseWithHits = CharacterFightResultResponse;
