import { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";
import { FighterInitiativeResult, FightPlaybackPayload, FightResult, FightSide } from "../fight.index";

export interface FightResponse {
    fightPlaybackPayload: FightPlaybackPayload;
    result: FightResult;
    initiativeResults: FighterInitiativeResult[]
    initialFighters: InitialFighterStats[]
}

export interface InitialFighterStats {
    fighterId: string;
    name: string;
    side: FightSide;
    alive: boolean;
    skills: { skillId: UNIQUE_ID_SKILLS, name: string, icon: string }[]
    resource: {
        hp: {
            current: number;
            max: number
        },
        mana: {
            current: number;
            max: number;
        }
    }
}