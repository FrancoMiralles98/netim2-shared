import { SkillBase } from "../skill-base.type";
import { DurationConfig, StatsModifiers, UNIQUE_ID_SKILLS } from "../skill-index";
export interface SkillBuff extends SkillBase {
    type: 'buff';
    duration: DurationConfig;
    tags?: BuffTags[];
    effects: SkillBuffEffect[];
    stats: StatsModifiers[];
}
export type BuffTags = 'buff' | 'offensive' | 'defensive' | 'skill';
export interface SkillBuffEffect {
    type: 'next_skill_damage_multiplier';
    allowedSkillIds: UNIQUE_ID_SKILLS[];
    multiplier: number;
    uses: {
        base: number;
        perLv: number;
    };
    description?: string;
}
