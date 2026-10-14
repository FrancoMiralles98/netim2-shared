import type { subTypeEquip } from '../../item/entities-props/equip.type';
import type { InventoryItem } from '../../inventory/inventory-item.type';
import type { CharacterPersistence } from '../character-persistence.type';
/** ID de la instancia del inventario, no el ID del catalogo (idItem). */
export type EquipItemRequest = {
    itemId: InventoryItem['id'];
};
/** Subtipo del item que se retira del set activo. */
export type UnequipItemRequest = {
    subType: subTypeEquip;
};
/** Set que se desea activar; debe estar desbloqueado. */
export type SelectEquipmentRequest = {
    slot: CharacterPersistence['equipo_selected'];
};
/** Slot que se desea comprar. El servidor determina el precio y la moneda. */
export type BuyEquipmentSlotRequest = {
    slot: CharacterPersistence['equipo_selected'];
};
