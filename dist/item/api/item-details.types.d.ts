import type { UpgradeLv } from '../config/general-implicit.type';
import type { IdItemList } from '../iditems/id-item-list.type';
import type { ItemDTO } from '../item-dto';
/**
 * Parámetros de un ítem cuya información completa se desea consultar.
 *
 * @property {IdItemList} idItem - ID del catálogo, no el ID de una instancia de inventario.
 * @property {UpgradeLv} [upgradeLv] - Nivel de mejora solicitado, cuando corresponda al tipo de ítem.
 * @property {number} [quantity] - Cantidad solicitada para ítems apilables.
 * Debe ser un entero mayor que 0; esta restricción se valida en el servidor.
 * Si se omiten las opciones, el backend determina los valores predeterminados.
 */
export type ItemDetailsQuery = {
    idItem: IdItemList;
    upgradeLv?: UpgradeLv;
    quantity?: number;
};
/**
 * Solicitud de información completa de varios ítems del catálogo.
 *
 * @property {ItemDetailsQuery[]} items - Ítems solicitados con sus opciones de mejora y cantidad.
 */
export type GetItemsRequest = {
    items: ItemDetailsQuery[];
};
/** Ítems completos resueltos por el backend según las opciones de la solicitud. */
export type GetItemsResponse = ItemDTO[];
