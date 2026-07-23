import { SkillBase } from "../skill-base.type";
import { DurationConfig, UNIQUE_ID_SKILLS } from "../skill-index";
export interface SkillBuff extends SkillBase {
    type: 'buff';
    duration?: DurationConfig;
    tags?: BuffTags[];
    effects: SkillBuffEffect[];
}
export type BuffTags = 'buff';
export interface SkillBuffEffect {
    type: 'next_skill_damage_multiplier';
    allowedSkillIds: UNIQUE_ID_SKILLS[];
    multiplier: number;
    description?: string;
}
