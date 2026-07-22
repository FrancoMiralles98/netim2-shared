import { BonusRefKeys } from "../../../bonus/bonus-index";
import { EscaladoAtributos } from "../escalado-atributos-types";
import { SkillScalingLv } from "../escalado-lv.types";
export interface SkillAuraScaling {
    type: 'aura';
    escaladoAtributos: EscaladoAtributos;
    escaladoBuffos: Partial<Record<BonusRefKeys, EscaladoStat>>;
    mana: {
        base: number;
        perLv: number;
    };
    duration?: {
        base: number;
        perLv: number;
    };
}
export interface EscaladoStat {
    escaladoLv: SkillScalingLv;
    base: number;
    scaleWithAttribute: boolean;
}
