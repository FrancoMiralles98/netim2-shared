import { BonusCCRefKeys, BonusDañoRefKeys, BonusDefensaRefKeys, BonusGeneralRefKeys, BonusMiscsRefKeys } from "./bonus-index";

export type RoutStatKey =
    | `general.${BonusGeneralRefKeys}`
    | `bonus.daño.${BonusDañoRefKeys}`
    | `bonus.defensa.${BonusDefensaRefKeys}`
    | `bonus.cc.${BonusCCRefKeys}`
    | `bonus.miscs.${BonusMiscsRefKeys}`;