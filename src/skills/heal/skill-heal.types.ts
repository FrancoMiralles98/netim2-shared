import { TypeWeapon } from "../../item/entities-props/equip.type";
import { SkillBase } from "../skill-base.type";

export interface SkillHeal extends SkillBase {
    type: 'heal';
    weaponRestricted: TypeWeapon[]
    components: SkillHealComponents[]
    flags?: SkillHealFlags
}


export interface SkillHealComponents {
    range: { min: number, max: number };
    tags: HealTag[];

}

export type HealTag = 'heal' | 'skill ' 

export interface SkillHealFlags {
    canCrit: boolean;
}