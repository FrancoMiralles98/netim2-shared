import { SkillCooldownConfig } from "../skill-base.type";
import { SkillScalingLv } from "./escalado-lv.types";
import { EscaladoStatsModifiers } from "./skill-aura-scaling.type";
export interface SkillBuffScaling {
    type: 'buff';
    cd: SkillCooldownConfig;
    duration: {
        base: number;
        perLv: number;
    };
    uses: {
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
    statsScaling: EscaladoStatsModifiers[];
}
