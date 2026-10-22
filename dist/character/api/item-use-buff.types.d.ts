import { InventoryItem } from "../../inventory/inventory-item.type";
import { InventoryChangeResult } from "../../inventory/item-to-update.types";
import { Stats } from "../../shared/stats.types";
import { Atributos } from "../attributes.types";
import { AppliedBuffos } from "../buffos-in-character.type";
import { CharacterPersistence } from "../character-persistence.type";
export type ApplyBuffRequest = {
    itemId: InventoryItem['id'];
};
export type RefreshBuffsResponse = {
    stats: Stats;
    attributes: Atributos;
    buffos: AppliedBuffos[];
};
export type ApplyBuffResponse = RefreshBuffsResponse & {
    /** Cantidad final del stack; cero indica eliminarlo del inventario. */
    updatedItems: InventoryChangeResult[];
};
export type CharacterApplyBuffResult = {
    character: CharacterPersistence;
    response: ApplyBuffResponse;
};
export type CharacterRefreshBuffsResult = {
    character: CharacterPersistence;
    response: RefreshBuffsResponse;
};
