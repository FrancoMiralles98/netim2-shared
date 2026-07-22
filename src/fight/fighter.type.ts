import { BonusCCRefKeys, BonusDañoRefKeys, BonusDefensaRefKeys } from "../bonus/bonus-index";
import { CharacterRace } from "../character/character-stats.type";
import { AllTargetType } from "../gamedata/all-races.type";
import { TypeWeapon } from "../item/entities-props/equip.type";
import { MobRace } from "../mob/mobProps/mob-race.type";
import { SpawnConfig } from "../mob/mobProps/spawn-config.type";
import { SkillType } from "../skills/skill-type";
import { ActiveEffect, FightEffectId } from "./effects.types";
import { FightDetails } from "./fight-details.type";

export interface FighterType {
    stats: FightStats;
    hab: SkillType[];
    fight_details: FightDetails;
    nombre: string;
    raza: CharacterRace | MobRace;
    target_type: AllTargetType;
    type_weapon: TypeWeapon | '';
    spawnConfig?: SpawnConfig;
    effects: Partial<Record<FightEffectId, ActiveEffect>>;
}

export interface FightStats {
    general: {
        hp: { actual: number, max: number };
        regen_hp: number;
        def: number;
        vh: number;
        va: number;
        vm: number;
        ad: { min: number, max: number };
        ap: { min: number, max: number };
    };
    bonus: {
        daño: Record<BonusDañoRefKeys, number>
        defensa: Record<BonusDefensaRefKeys, number>
        cc: Record<BonusCCRefKeys, number>;
    }
}