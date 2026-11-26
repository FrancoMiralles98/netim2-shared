import { AddItemResult } from "../inventory/inventory-result.types";
import { InventoryChangeResult } from "../inventory/item-to-update.types";
import { IdItemList, ItemDTO, UpgradeLv } from "../item/item-index";
export declare const NPC_SHOP_IDS: readonly ['general', 'weapons', 'armors', 'stable', 'fishing'];
export type NpcShopId = typeof NPC_SHOP_IDS[number];
/** Oferta del catálogo del servidor; sus cantidades se expresan en unidades de ítem. */
export interface ShopItemConfig {
    idItem: IdItemList;
    /** Precio unitario de compra en yang. item.price se reserva para la venta al NPC. */
    price: number;
    /** Máximo por operación; por defecto maxCantidad para utility y 1 para equipo. */
    maxQuantity?: number;
    /** Tamaño del lote y cantidad por defecto. La compra debe ser múltiplo de este valor. */
    quantity?: number;
    /** Mejora del equipo ofrecido; por defecto +0. */
    upgradeLv?: UpgradeLv;
}
/** Oferta resuelta para mostrar el ítem y las reglas de compra en el frontend. */
export interface ShopItemOffer {
    idItem: IdItemList;
    item: ItemDTO;
    price: number;
    /** Precio de vender una unidad al NPC, tomado del catálogo de ítems. */
    sellPrice: number;
    quantity: number;
    maxQuantity: number;
    upgradeLv?: UpgradeLv;
    /** Coste de un lote (price × quantity). */
    bundlePrice: number;
}
export interface GetShopItemsRequest {
    shopId: NpcShopId;
}
export interface GetShopItemsResponse {
    shopId: NpcShopId;
    currency: 'yang';
    items: ShopItemOffer[];
}
/** shopId y characterId se reciben en la ruta. El precio siempre se resuelve en el servidor. */
export interface BuyShopItemRequest {
    idItem: IdItemList;
    /** Cantidad total, no número de lotes. Si se omite, se compra un lote. */
    quantity?: number;
    /** Permite distinguir ofertas del mismo equipo con diferentes mejoras. */
    upgradeLv?: UpgradeLv;
}
export interface BuyShopItemResponse extends AddItemResult {
    shopId: NpcShopId;
    idItem: IdItemList;
    quantity: number;
    totalPrice: number;
    yang: number;
}
export interface SellShopItemRequest {
    /** ID de instancia del inventario, no ID de catálogo. */
    itemId: string;
    /** Unidades a vender; por defecto 1. El equipo solo admite 1. */
    quantity?: number;
}
export interface SellShopItemResponse {
    shopId: NpcShopId;
    itemId: string;
    quantity: number;
    totalPrice: number;
    yang: number;
    /** Un utility eliminado se devuelve con cantidad 0; un equipo eliminado, solo con id. */
    updatedItems: InventoryChangeResult[];
}
