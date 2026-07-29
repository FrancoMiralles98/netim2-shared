import { SkillCooldownConfig } from "../../skill-base.type";
import { SkillScalingLv } from "../escalado-lv.types";
export interface SkillBuffScaling {
    type: 'buff';
    cd: SkillCooldownConfig;
    duration: {
        base: number;
        perLv: number;
    };
    mana: {
        base: number;
        perLv: number;
    };
    multiplier: {
        base: number;
        escaladoLv: SkillScalingLv;
    };
}
