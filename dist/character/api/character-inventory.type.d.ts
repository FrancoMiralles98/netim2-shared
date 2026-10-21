import type { InventoryItem, Position } from '../../inventory/inventory-item.type';
import { AddItemResult } from '../../inventory/inventory-result.types';
import { InventoryChangeResult } from '../../inventory/item-to-update.types';
import { CharacterPersistence } from '../character-persistence.type';
/**
 * Solicitud para mover una instancia de ítem dentro del inventario del personaje.
 *
 * @property {string} itemId - ID de la instancia del inventario. Debe ser una cadena no vacía.
 * @property {Position} position - Posición de destino obligatoria.
 * @property {number} position.row - Fila de destino. Debe ser un entero mayor o igual a 0.
 * @property {number} position.col - Columna de destino. Debe ser un entero mayor o igual a 0.
 *
 * Las restricciones de los valores deben validarse en el servidor.
 */
export type MoveInventoryItemRequest = {
    itemId: InventoryItem['id'];
    position: Position;
};
/**
 * Datos del ítem después de moverlo dentro del inventario.
 *
 * @property {string} id - ID de la instancia del inventario que se movió.
 * @property {Position} position - Posición final del ítem en el inventario.
 *
 * Un método asíncrono devuelve `Promise<MoveInventoryItemResponse>`.
 */
export type MoveInventoryItemResponse = Pick<InventoryItem, 'id' | 'position'>;
/** Contratos auxiliares hasta incorporarlos a netim2-shared. */
export type SplitInventoryItemRequest = {
    itemId: InventoryItem['id'];
    quantity: number;
};
export type SplitInventoryItemResponse = AddItemResult;
export type MergeInventoryItemsRequest = {
    itemId: InventoryItem['id'];
    targetItemId: InventoryItem['id'];
    quantity: number;
};
export type MergeInventoryItemsResponse = {
    /** Cantidades finales; un origen con cantidad 0 se elimina del inventario. */
    updatedItems: InventoryChangeResult[];
};
export type DiscardInventoryItemRequest = {
    itemId: InventoryItem['id'];
};
export type DiscardInventoryItemResponse = Pick<InventoryItem, 'id'>;
export type CharacterInventoryActionResult<T> = {
    character: CharacterPersistence;
    response: T;
};
