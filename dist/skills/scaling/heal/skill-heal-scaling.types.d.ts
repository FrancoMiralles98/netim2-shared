import { HealTag } from "../../heal/skill-heal.types";
import { SkillCooldownConfig } from "../../skill-base.type";
import { SkillDamageFlags } from "../../skill-index";
import { EscaladoAtributos } from "../escalado-atributos-types";
import { SkillScalingLv } from "../escalado-lv.types";
export interface SkillHealScaling {
    type: 'heal';
    cd: SkillCooldownConfig;
    mana: {
        base: number;
        perLv: number;
    };
    components: SkillHealComponentScaling;
}
export interface SkillHealComponentScaling {
    tags: HealTag[];
    escaladoMain: {
        min: number;
        max: number;
    };
    escaladoLv: SkillScalingLv;
    escaladoAtributos?: EscaladoAtributos;
    flags?: SkillDamageFlags;
}
