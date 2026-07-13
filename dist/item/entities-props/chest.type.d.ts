import { IdItemList } from "../iditems/id-item-list.type";
import { UtilityBaseType } from "./utility-base.type";
/**
 * Representa un ítem de tipo cofre.
 *
 * Un cofre puede contener una o más recompensas configuradas y define
 * cómo deben entregarse al ser abierto.
 */
export interface ChestType extends UtilityBaseType {
    type_utility: 'chest';
    rewardConfig: RewardConfig;
    rewards: Reward[];
}
/**
 * Define el comportamiento de apertura del cofre.
 *
 * - `random`: selecciona una única recompensa utilizando los pesos configurados.
 * - `all`: entrega todas las recompensas configuradas.
 */
export type RewardConfig = 'random' | 'all';
export type Reward = ItemReward | ResourceReward;
export interface ItemReward {
    type_reward: 'item';
    idItem: IdItemList;
    weight: number;
    rewardOptions?: RewardOptions;
}
export interface ResourceReward {
    type_reward: 'resource';
    value_reward: number;
    weight: number;
    type_resource: 'yang' | 'exp';
}
export type RewardTypes = 'exp' | 'item' | 'yang';
export interface RewardOptions {
    cantidadChances?: {
        min: number;
        max: number;
    };
    upgradeChances?: {
        min: number;
        max: number;
    };
}
