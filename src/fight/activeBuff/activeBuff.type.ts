import { BuffConsumeTrigger, DurationConfig } from "../../skills/skill-index";
import { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";
import { CombatStatModifier } from "../activeAura/active-aura.type";

export interface CreateActiveBuffProps {
    instanceId: string;
    skillId: UNIQUE_ID_SKILLS;

    sourceFighterId: string;
    targetFighterId: string;

    appliedOnTurn: number;

    duration: DurationConfig;

    effects: ActiveBuffEffect[];

    appliedModifiers?: CombatStatModifier[];
}

export type ActiveBuffEffect = ActiveNextSkillDamageMultiplier

export interface ActiveNextSkillDamageMultiplier {
    type: 'next_skill_damage_multiplier';

    allowedSkillIds: UNIQUE_ID_SKILLS[];

    multiplier: number;

    remainingUses: number;

    consumeOn: BuffConsumeTrigger;
}

export interface ConsumeBuffForSkillResult {
    consumed: boolean;

    consumedEffects: number;

    remainingUses: number;

    depleted: boolean;
}