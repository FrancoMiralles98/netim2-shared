import { SkillCooldownConfig } from "../../skill-base.type";

export interface SkillBuffScaling  {
    type: 'buff',
    cd: SkillCooldownConfig,
    mana: {
        base: number;
        perLv: number;
    },
    multiplier: {
        base: number;
        perLv: number;
    }
}