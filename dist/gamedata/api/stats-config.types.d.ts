import { AttributesRefKeys, BonusRefKeys } from "../../bonus/bonus-index";
export type StatsConfigResponse = {
    ATTRIBUTE_EFFECTS_CONFIG: Record<AttributesRefKeys, Partial<Record<BonusRefKeys, number>>>;
    DODGE_CHANCE_PER_MOVEMENT_SPEED: number;
    SPELL_DODGE_CHANCE_PER_MOVEMENT_SPEED: number;
    CAST_SPEED_COOLDOWN_SCALING_CONFIG: {
        maxReductionPercent: number;
        halfReductionPoints: number;
        maxReductionPoints: number;
    };
    BONUS_EFFECTS_CONFIG: {
        corta_curacion: number;
        penetration_flat_defense: number;
        penetracion_porcentual_defense: number;
        reflect_porcent_dmg: number;
    };
};
