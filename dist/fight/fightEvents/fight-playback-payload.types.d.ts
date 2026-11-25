import type { FightEvent } from './fight-event.types';
import type { FightResult } from '../fight/fight.type';
import type { CombatAttackPlayback } from '../combat-hit.types';
export interface FightPlaybackPayload {
    fightId: string;
    turns: FightPlaybackTurn[];
    result?: FightResult;
}
export interface FightPlaybackTurn {
    turnNumber: number;
    fighterTurns: FighterTurnPlayback[];
}
export interface FighterTurnPlayback {
    /** Resultado completo de básicos o habilidades de daño; no aparece en otras acciones. */
    attack?: CombatAttackPlayback;
    fighterId: string;
    /**
     * Target principal de la acción.
     *
     * Array porque una skill puede afectar
     * a varios objetivos.
     */
    targetId: string;
    /**
     * Todo lo sucedido durante esta acción.
     */
    events: FightEvent[];
}
