import { CharacterPersistence } from "../../character/character-persistence.type";
import { ItemDTO } from "../../item/item-dto";
import { IdMobList } from "../../mob/id-mob-list.enum";
import { LetterMasteryLv } from "../../skills/letter-mastery-lv.type";
import { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";
import { FighterInitiativeResult, FightPlaybackPayload, FightResult, FightSide } from "../fight.index";
import { FighterFightSummary } from "../fighter/fighter.summary.types";
export interface FightResponse {
    fightPlaybackPayload: FightPlaybackPayload;
    result: FightResult;
    initiativeResults: FighterInitiativeResult[];
    initialFighters: InitialFighterStats[];
    fighterFightSummary: FighterFightSummary[];
}
/** Selecciona el mob de catálogo y la cantidad de instancias que enfrentará el personaje. */
export type FightCharacterMobRequest = {
    idMob: IdMobList;
    /** Cantidad entera positiva de enemigos del mismo tipo. */
    quantity: number;
};
/** Resultado y reproducción de la pelea del personaje contra el mob seleccionado. */
export type FightCharacterMobResponse = FightResponse;
/** Resultado del combate con recompensas pendientes y estado final para actualizar el cliente. */
export type CharacterFightResultResponse = FightCharacterMobResponse & {
    /** Recursos ganados en esta pelea. En derrota o empate son cero. */
    exp: number;
    yang: number;
    /** Drops ya generados que quedan pendientes de reclamar en el historial. */
    items: ItemDTO[];
    historialId: string;
    character: Pick<CharacterPersistence, 'lv' | 'exp' | 'exp_next_lv' | 'yang' | 'puntos_atributos' | 'puntos_habilidad' | 'atribute_per_lv' | 'stats' | 'atributos' | 'buffos' | 'timer_mob' | 'timer_metin' | 'timer_boss'>;
};
export interface InitialFighterStats {
    fighterId: string;
    name: string;
    side: FightSide;
    alive: boolean;
    skills: {
        skillId: UNIQUE_ID_SKILLS;
        name: string;
        mastery: LetterMasteryLv;
        description?: string;
    }[];
    resource: {
        hp: {
            current: number;
            max: number;
        };
        mana: {
            current: number;
            max: number;
        };
    };
}
