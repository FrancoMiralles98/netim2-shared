import { GenericType, ItemDTO } from "../item/item-index";
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
};
/** Ítems elegibles y rangos de mejora o cantidad según su tipo. */
export type MobDropPreview = ((ItemDropPreview<'equip'> & {
    upgradeLvRange: DropRange<Extract<ItemDTO, {
        type: 'equip';
    }>['upgradeLv']>;
}) | (ItemDropPreview<'utility'> & {
    quantityRange: DropRange;
}))[];
export {};
