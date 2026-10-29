import { TypeWeapon } from "../../item/entities-props/equip.type";
import { SkillHealScaling } from "../scaling/skill-heal-scaling.types";
import { SkillBase } from "../skill-base.type";

export interface SkillHeal extends SkillBase {
    type: 'heal';
    weaponRestricted: TypeWeapon[]
    components: SkillHealComponents[]
    flags?: SkillHealFlags
    escalado: SkillHealScaling
}


export interface SkillHealComponents {
    range: { min: number, max: number };
    tags: HealTag[];

}

export type HealTag = 'heal' | 'skill ' 

export interface SkillHealFlags {
    canCrit: boolean;
}