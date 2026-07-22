import { TypeWeapon } from "../item/entities-props/equip.type";
import { DamageTag } from "../skills/skill-index";
import { UNIQUE_ID_SKILLS } from "../skills/unique-id-skill.enum";
import { FighterType } from "./fighter.type";
export interface DamageContext {
    source: FighterType;
    target: FighterType;
    baseDamage: number;
    finalDamage: number;
    tags: DamageTag[];
    weaponType?: TypeWeapon;
    skillId?: UNIQUE_ID_SKILLS;
    canCrit: boolean;
    canBeBlocked: boolean;
    canBeDodged: boolean;
}
export interface DamageModifier {
    id: string;
    priority: number;
    apply: (ctx: DamageContext) => DamageContext;
}
