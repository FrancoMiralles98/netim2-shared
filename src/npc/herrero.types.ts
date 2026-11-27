import { InventoryItem } from "../inventory/inventory-item.type";
import { EquipType, IdItemList, ItemDTO, UpgradeLv } from "../item/item-index";

/** Identificadores de instancias del inventario; no son IDs del catálogo. */
export interface PreviewForgeUpgradeRequest {
    itemId: string;
    modifierItemId?: string;
}

/** Probabilidades absolutas en porcentaje; los cuatro resultados suman 100. */
export interface ForgeOutcomeChances {
    success: number;
    destruction: number;
    durabilityLoss: number;
    protectedFailure: number;
}

/** Consulta informativa; no consume materiales ni modifica el personaje. */
export interface PreviewForgeUpgradeResponse {
    item: EquipType;
    targetUpgradeLv: ForgeTargetUpgradeLv;
    materials: { item: ItemDTO; quantity: number }[];
    yangCost: number;
    baseSuccessChance: number;
    chances: ForgeOutcomeChances;
    durability: { current: number; max: number; afterDurabilityLoss: number; afterProtectedFailure: number };
    modifier?: { itemId: string; quantity: number };
}

/** Rango normal del herrero; +10 y +11 pertenecen a sistemas especiales. */
export type ForgeUpgradeLv = Extract<UpgradeLv, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>;
export type ForgeTargetUpgradeLv = Exclude<ForgeUpgradeLv, 0>;

/** Efectos y restricciones de un consumible especial usado en un intento de mejora. */
export interface ForgeAttemptModifierConfig {
    /** Unidades consumidas por intento, tanto al acertar como al fallar. Entero positivo. */
    quantity: number;
    /** Aumento porcentual relativo: 40 sobre una chance base de 50 % da 70 %. Por defecto, 0. */
    successChanceBonus?: number;
    /** Conserva el equipo, su nivel y su durabilidad si falla el intento. Por defecto, false. */
    preventDestruction?: boolean;
    /**  Niveles que pierde respecto al upgrade actual, sin bajar de + 0. Por defecto, 0. */
    upgradeLvLossOnProtectedFailure?: number;
    /** Mejoras de destino permitidas; si se omite, admite +1 a +9. */
    allowedTargetUpgradeLvs?: readonly ForgeTargetUpgradeLv[];
    /** Equipos de catálogo compatibles; si se omite, no restringe por idItem. */
    allowedItemIds?: readonly IdItemList[];
}

export interface ForgeMaterialRequirement {
    idItem: IdItemList;
    quantity: number;
}

/** Cada ítem pertenece a un único grupo; las claves indican la mejora de destino. */
export interface ForgeMaterialRequirementGroup {
    idItems: readonly [IdItemList, ...IdItemList[]];
    /** Una lista vacía permite mejorar sin materiales; una clave ausente no está configurada. */
    requirementsByUpgrade: Partial<Record<ForgeTargetUpgradeLv, readonly ForgeMaterialRequirement[]>>;
}

/** Reglas resueltas de una mejora; aún no implican gasto, tirada ni persistencia. */
export interface ForgeUpgradeConfig {
    idItem: IdItemList;
    targetUpgradeLv: ForgeTargetUpgradeLv;
    /** Porcentaje entre 0 y 100. */
    successChance: number;
    materials: ForgeMaterialRequirement[];
}