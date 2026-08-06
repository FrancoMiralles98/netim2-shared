import { BonusCCRefKeys, BonusDañoRefKeys, BonusDefensaRefKeys, BonusMiscsRefKeys } from "../bonus/bonus-index";

export interface Stats {
    general: {
        hp: {
            actual: number;
            max: number;
        };
        mana: {
            actual: number;
            max: number
        },
        regen_mana: number;
        regen_hp: number;
        def: number;
        vh: number;
        va: number;
        vm: number;
        ad: {
            min: number;
            max: number;
        };
        ap: {
            min: number;
            max: number;
        };
    },
    bonus: {
        daño: Record<BonusDañoRefKeys, number>;
        defensa: Record<BonusDefensaRefKeys, number>;
        cc: Record<BonusCCRefKeys, number>;
        miscs: Record<BonusMiscsRefKeys, number>;
    };
}