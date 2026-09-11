import { FighterCombatStatisticsState, FightSide } from "../fight.index";
export interface FighterFightSummary {
    fighterId: string;
    name: string;
    side: FightSide;
    alive: boolean;
    resources: {
        hp: number;
        mana: number;
    };
    statistics: FighterCombatStatisticsState;
}
