import type { InventoryItem, Position } from '../../inventory/inventory-item.type';

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
