import { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";
export interface HealingStatistics {
    byBasicAttack: number;
    bySkill: BySkillStatistics[];
    prevented: number;
    hpRegenerated: number;
}
export interface BySkillStatistics {
    amount: number;
    idSkill: UNIQUE_ID_SKILLS;
}
