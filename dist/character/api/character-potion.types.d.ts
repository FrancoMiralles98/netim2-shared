import { InventoryItem } from "../../inventory/inventory-item.type";
import { InventoryChangeResult } from "../../inventory/item-to-update.types";
import type { ReservePotion } from "../../item/item-index";
import { CharacterPersistence } from "../character-persistence.type";
export type QuickHealResource = 'hp' | 'mana';
/** Contratos provisorios para la futura entrada HTTP. El orden indica prioridad entre recursos. */
export type QuickHealRequest = {
    resources: QuickHealResource[];
};
export type QuickHealResponse = UsePotionResponse & {
    /** Reservas finales de las pociones utilizadas que permanecen en el inventario, esto
     es para pociones con reservas. */
    updatedPotions: (Pick<InventoryItem, 'id'> & Pick<ReservePotion, 'effect' | 'reserve'>)[];
};
export type CharacterQuickHealResult = {
    character: CharacterPersistence;
    response: QuickHealResponse;
};
/** Contrato provisorio hasta incorporarlo a netim2-shared. */
export type UsePotionRequest = {
    /** ID de instancia del stack en el inventario, no idItem del catálogo. */
    itemId: InventoryItem['id'];
    quantity: number;
};
/** Valores finales, no cantidades que el frontend deba sumar o restar. */
export type UsePotionResponse = {
    hp: number;
    mana: number;
    /** cantidad es el saldo del stack; 0 indica eliminarlo del inventario. */
    updatedItems: InventoryChangeResult[];
};
export type CharacterPotionUseResult = {
    character: CharacterPersistence;
    response: UsePotionResponse;
};
/** Contratos provisorios hasta incorporarlos a netim2-shared. */
export type UseReservePotionRequest = {
    itemId: InventoryItem['id'];
};
export type UseReservePotionResponse = {
    hp: number;
    mana: number;
    /** Reemplazar los efectos y la reserva con estos valores finales. null si se agotó y eliminó. */
    updatedPotion: (Pick<InventoryItem, 'id'> & Pick<ReservePotion, 'effect' | 'reserve'>) | null;
    /** Incluye la eliminación del item cuando su reserva llega a cero. */
    updatedItems: InventoryChangeResult[];
};
export type CharacterReservePotionUseResult = {
    character: CharacterPersistence;
    response: UseReservePotionResponse;
};
