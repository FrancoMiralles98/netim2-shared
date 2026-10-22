import { InventoryItem } from "../../inventory/inventory-item.type";
import { InventoryChangeResult } from "../../inventory/item-to-update.types";
import { IdItemList } from "../../item/item-index";
import { Stats } from "../../shared/stats.types";
import { Atributos } from "../attributes.types";
import { CharacterPersistence } from "../character-persistence.type";
/** Contratos provisorios hasta incorporarlos a netim2-shared. Se abre una unidad por petición. */
export type OpenChestRequest = {
    itemId: InventoryItem['id'];
    /** Solo para pick: IDs de catálogo idItem, distintos y exactamente pickCount. */
    selectedItemIds?: IdItemList[];
};
export type ChestGrantedReward = {
    type: 'item';
    idItem: IdItemList;
    quantity: number;
    upgradeLv?: number;
} | {
    type: 'resource';
    resource: 'yang' | 'exp';
    amount: number;
};
export type ChestProgress = Pick<CharacterPersistence, 'lv' | 'exp' | 'exp_next_lv' | 'puntos_atributos' | 'puntos_habilidad' | 'atribute_per_lv'>;
export type OpenChestResponse = {
    newItems: InventoryItem[];
    updatedItems: InventoryChangeResult[];
    rewards: ChestGrantedReward[];
    yang: number;
    /** Presentes cuando la recompensa entrega EXP. */
    progress?: ChestProgress;
    stats?: Stats;
    attributes?: Atributos;
    buffos?: CharacterPersistence['buffos'];
};
export type CharacterOpenChestResult = {
    character: CharacterPersistence;
    response: OpenChestResponse;
};
