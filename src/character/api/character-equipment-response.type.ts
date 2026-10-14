import type { AddItemResult } from '../../inventory/inventory-result.types';
import type { InventoryItem } from '../../inventory/inventory-item.type';
import type { EquipType, subTypeEquip } from '../../item/entities-props/equip.type';
import type { Stats } from '../../shared/stats.types';
import type { Atributos } from '../attributes.types';
import type { CharacterPersistence } from '../character-persistence.type';

/** Payload de data en la respuesta HTTP; no incluye el personaje completo. */
export type EquipmentStatsResponse = {
    /** Snapshots completos: reemplazar stats y atributos en el cliente, no sumarlos. */
    stats: Stats;
    attributes: Atributos;
    type_weapon: CharacterPersistence['type_weapon'];
};

/** Instancia equipada: conserva el ID del inventario y no lleva position. */
export type EquippedItemInstance = EquipType & Pick<InventoryItem, 'id'>;

/**
 * Aplicar updatedItems al inventario antes de insertar newItems.
 * Un cambio con solo id elimina esa instancia; cantidad representa el saldo final.
 * equippedItem reemplaza el item del mismo sub_type_equip en equipmentSlot.
 * Si hubo reemplazo, el equipo anterior se devuelve completo en newItems.
 */
export type EquipItemResponse = EquipmentStatsResponse & {
    equipmentSlot: CharacterPersistence['equipo_selected'];
    newItems: InventoryItem[];
    equippedItem: EquippedItemInstance;
};

/**
 * Retirar unequippedSlot del set indicado y aplicar los deltas del inventario.
 * El item retirado aparece completo, con ID y position finales, en newItems.
 * Se identifica el slot en vez de duplicar el item completo en el payload.
 */
export type UnequipItemResponse = EquipmentStatsResponse & {
    equipmentSlot: CharacterPersistence['equipo_selected'];
    newItems: InventoryItem[];
    unequippedSlot: subTypeEquip;
};

/** Cambia el set activo; el inventario y los arrays de equipo se mantienen. */
export type SelectEquipmentResponse = EquipmentStatsResponse & {
    equipo_selected: CharacterPersistence['equipo_selected'];
};

/** Habilitar slot y reemplazar solo el saldo de la moneda indicada. */
export type BuyEquipmentSlotResponse = {
    slot: CharacterPersistence['equipo_selected'];
} & (
        { currency: 'yang'; yang: number }
        | { currency: 'md'; md: number }
    );
