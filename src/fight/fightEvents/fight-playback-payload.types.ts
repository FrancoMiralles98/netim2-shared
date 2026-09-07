import {  FightEvent, FightResult } from "../fight.index";

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