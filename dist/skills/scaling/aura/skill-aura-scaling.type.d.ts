import { BonusRefKeys } from "../../../bonus/bonus-index";
import { SkillCooldownConfig } from "../../skill-base.type";
import { CombatStatModifierOperation, RoutStatKey } from "../../skill-index";
import { EscaladoAtributos } from "../escalado-atributos-types";
import { SkillScalingLv } from "../escalado-lv.types";
export interface SkillAuraScaling {
    type: 'aura';
    escaladoAtributos: EscaladoAtributos;
    escaladoStatsModifiers: EscaladoStatsModifiers[];
    mana: {
        base: number;
        perLv: number;
    };
    cd: SkillCooldownConfig;
    duration?: {
        base: number;
        perLv: number;
    };
}
export interface EscaladoStatsModifiers {
    target: RoutStatKey;
    bonusRefKey: BonusRefKeys;
    operation: CombatStatModifierOperation;
    escalado: EscaladoStat;
}
export interface EscaladoStat {
    escaladoLv: SkillScalingLv;
    base: number;
    scaleWithAttribute: boolean;
}
