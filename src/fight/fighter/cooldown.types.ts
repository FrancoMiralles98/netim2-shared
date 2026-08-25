import { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";

export interface CooldownReductionResult {
    skillId: UNIQUE_ID_SKILLS;
    previousTurns: number;
    remainingTurns: number;
    finished: boolean;
}

export interface SkillCooldownReductionResult {
    skillId: UNIQUE_ID_SKILLS;

    initialTurns: number;
    previousTurns: number;
    remainingTurns: number;

    finished: boolean;
}