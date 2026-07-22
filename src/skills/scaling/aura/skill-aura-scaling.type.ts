import { BonusRefKeys } from "../../../bonus/bonus-index";
import { EscaladoAtributos } from "../escalado-atributos-types";

export interface SkillAuraScaling {
    type: 'aura';
    escaladoAtributos: EscaladoAtributos;
    escaladoBuffos: Partial<Record<BonusRefKeys, EscaladoStat>>;
    mana: {
        base: number;
        perLv: number;
    },
    duration?: {
        base: number;
        perLv: number;
    }
}

export interface EscaladoStat {
    escaladoLv: number;
    base: number;
    scaleWithAttribute: boolean;
}