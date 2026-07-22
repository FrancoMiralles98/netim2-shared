import { BonusRefKeys } from "../../../bonus/bonus-index";
import { DamageType } from "../../damage/damage-config.type";
import { DamageTag } from "../../damage/damage-tag.types";
import { MechanicsEffectsKeys } from "../../damage/mechanics-effect.type";
import { ChanceDamageModifier, ConditionalDamageModifier, WeightedDamageModifier } from "../../damage/skill-damage-modifiers.type";
import { SkillDamageFlags } from "../../damage/skill-damage-tags.type";
import { StatusEffectsKeys } from "../../damage/status-effects.type";
import { EscaladoAtributos } from "../escalado-atributos-types";
import { SkillScalingLv } from "../escalado-lv.types";
export interface SkillDamageScaling {
    type: 'damage';
    cd: number;
    components: SkillDamageComponentScaling[];
    statusEffectScaling?: Partial<Record<StatusEffectsKeys, EffectsScaling>>;
    mechanicsEffectScaling?: Partial<Record<MechanicsEffectsKeys, EffectsScaling>>;
    hitModifiersScaling?: HitModifiersScaling;
    damageModifiersScaling?: DamageModifierSclaing;
}
export interface SkillDamageComponentScaling {
    id: string;
    damageType: DamageType;
    tags: DamageTag[];
    escaladoMain: {
        min: number;
        max: number;
    };
    escaladoLv: SkillScalingLv;
    escaladoAtributos?: EscaladoAtributos;
    statsScaling?: SkillDamageStatScaling[];
    flags?: SkillDamageFlags;
}
export interface SkillDamageStatScaling {
    stat: BonusRefKeys;
    base: number;
    perLv: number;
}
export interface EffectsScaling {
    base: number;
    perLv: number;
}
export type HitModifiersScaling = ChanceMultiHitScaling | WeightedHitCountScaling;
export interface ChanceMultiHitScaling {
    type: 'chance_multi_hit';
    chancesConfig: {
        base: number;
        per_lv: number;
    };
    hitsConfig: {
        base: number;
        perLv: number;
    };
    damageMultiplierPerHitConfig: {
        base: number;
        perLv: number;
    };
}
export interface WeightedHitCountScaling {
    type: 'weighted_hit_count';
    optionsScaling: OptionsScaling[];
}
export interface OptionsScaling {
    chancesConfig: {
        base: number;
        per_lv: number;
    };
    hitsConfig: {
        base: number;
        perLv: number;
    };
    damageMultiplierPerHitConfig: {
        base: number;
        perLv: number;
    };
}
export type DamageModifierSclaing = ChanaceDamageModifierScaling | WeightedDamageModifierScaling | ConditionalDamageModifierScaling;
export interface ChanaceDamageModifierScaling {
    type: ChanceDamageModifier['type'];
    chanceConfig: {
        baseChance: number;
        perLv: number;
    };
    multiplier: {
        baseMultiplier: number;
        perLv: number;
    };
}
export interface WeightedDamageModifierScaling {
    type: WeightedDamageModifier['type'];
    options: OptionsConfig[];
}
export interface OptionsConfig {
    chanceConfig: {
        baseChance: number;
        perLv: number;
    };
    multiplier: {
        baseMultiplier: number;
        perLv: number;
    };
}
export interface ConditionalDamageModifierScaling {
    type: ConditionalDamageModifier['type'];
    multiplier: {
        baseMultiplier: number;
        perLv: number;
    };
}
