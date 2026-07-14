import { BonusRefKeys } from "../bonus/bonusListHelper/ref-bonus-name.type";
import { ReinosNames } from "./reinos-names.type";

export type ReinosBuffType = Record<ReinosNames,Partial<Record<BonusRefKeys,number>>>