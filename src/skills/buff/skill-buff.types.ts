import { SkillBuffScaling } from "../scaling/skill-buff-scaling.type";
import { SkillBase } from "../skill-base.type";
import { DurationConfig, StatsModifiers, UNIQUE_ID_SKILLS } from "../skill-index";

export interface SkillBuff extends SkillBase {
    type: 'buff',
    duration: DurationConfig,
    tags?: BuffTags[],
    effects: SkillBuffEffect[];
    stats: StatsModifiers[]
    escalado: SkillBuffScaling
}

export type BuffTags = 'buff' | 'offensive' | 'defensive' | 'skill'

export interface SkillBuffEffect {
    type: 'next_skill_damage_multiplier';
    allowedSkillIds: UNIQUE_ID_SKILLS[];
    multiplier: number;
    consumeOn:BuffConsumeTrigger
    uses:number,
    description?: string;
}


export type BuffConsumeTrigger =
    | 'skill_use'
    | 'successful_hit'
    | 'damage_dealt';