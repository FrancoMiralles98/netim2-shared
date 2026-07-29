import { SkillBuff } from "./buff/skill-buff.types";
import { SkillHeal } from "./heal/skill-heal.types";
import { SkillAura, SkillDamage } from "./skill-index";

export type SkillType = SkillDamage | SkillAura | SkillBuff | SkillHeal