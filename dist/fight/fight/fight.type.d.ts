export type FightPhase = 'setup' | 'between_turns' | 'turn_started' | 'cooldowns' | 'aura_upkeep' | 'periodic_effects' | 'regeneration' | 'action_selection' | 'action_resolution' | 'turn_end' | 'finished';
export type FightEndReason = 'fighter_defeated' | 'simultaneous_defeat' | 'team_defeated' | 'max_turns_reached' | 'stalemate';
export interface FightResult {
    outcome: 'winner' | 'draw';
    winnerFighterId?: string;
    survivingFighterIds: string[];
    winnerSide?: FightSide;
    winnerFighterIds?: string[];
    defeatedFighterIds: string[];
    reason: FightEndReason;
    finishedOnTurn: number;
}
export interface FighterInitiativeResult {
    fighterId: string;
    diceRoll: number;
    tieBreakerRoll?: number;
    total: number;
}
export type FightStatus = 'pending' | 'in_progress' | 'finished';
export interface FightIdentity {
    id: string;
    randomSeed: string;
    maxTurns: number;
}
export type FightSide = 'allies' | 'enemies';
