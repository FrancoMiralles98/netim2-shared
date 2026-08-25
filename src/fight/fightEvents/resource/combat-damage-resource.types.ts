import { UNIQUE_ID_SKILLS } from "../../../skills/unique-id-skill.enum";
import { ActiveStatusEffectId } from "../../statusEffects/active-status-effect.types";
import { ActiveStatusEffectData } from "../../statusEffects/effect-data.types";

export type CombatDamageSource =
    | {
          type: 'basic_attack';
          sourceFighterId: string;
      }
    | {
          type: 'skill';
          sourceFighterId: string;
          skillId: UNIQUE_ID_SKILLS;
          componentIndex?: number;
      }
    | {
          type: 'status_effect';
          sourceFighterId: string;
          effectId: ActiveStatusEffectId;
          effectInstanceId: string;
      }
    | {
          type: 'reflected';
          sourceFighterId: string;
          originalAttackerId: string;
      };