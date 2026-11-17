import { GenericType, ItemDTO } from "../item/item-index";
import { DropWeightType } from "./drop-weight.type";
/** Rango inclusivo de valores que puede generar un drop. */
export type DropRange<Value extends number = number> = {
    min: Value;
    max: Value;
};
type ItemDropPreview<Type extends GenericType> = {
    type: Type;
    /** Ítem de catálogo con sus datos e implícitos base, antes de generar el drop. */
    item: Extract<ItemDTO, {
        type: Type;
    }>;
    /** Probabilidad porcentual de obtener el ítem en un intento de drop del mob. */
    chancePerAttempt: number;
    /** Probabilidad porcentual de obtener al menos un drop del ítem por baja del mob. */
    chancePerKill: number;
    /** Dirección del cambio respecto al mismo mob con los bonus de drop del personaje en cero. */
    chanceChange: 'increased' | 'decreased' | 'unchanged';
    dropWeight: DropWeightType;
};
/** Probabilidades porcentuales de obtener yang al derrotar al mob. */
export type YangDropPreview = {
    type: 'yang';
    /** Probabilidad porcentual de obtener yang en un intento de drop. */
    chancePerAttempt: number;
    /** Probabilidad porcentual de obtener yang al menos una vez por baja del mob. */
    chancePerKill: number;
    /** Cambio respecto al mismo mob con los bonus de drop del personaje en cero. */
    chanceChange: 'increased' | 'decreased' | 'unchanged';
};
/** Vista previa de ítems y yang que puede otorgar el mob. */
export type MobDropPreview = ((ItemDropPreview<'equip'> & {
    upgradeLvRange: DropRange<Extract<ItemDTO, {
        type: 'equip';
    }>['upgradeLv']>;
}) | (ItemDropPreview<'utility'> & {
    quantityRange: DropRange;
}) | YangDropPreview)[];
export {};
