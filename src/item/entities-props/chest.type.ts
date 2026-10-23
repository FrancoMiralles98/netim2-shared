import { IdItemList } from "../iditems/id-item-list.type";
import { UtilityBaseType } from "./utility-base.type";

/**
 * Representa un ítem de tipo cofre.
 *
 * Un cofre puede contener una o más recompensas configuradas y define
 * cómo deben entregarse al ser abierto.
 */
export type ChestType = RandomChest | AllChest | PickChest;

/**
 * Propiedades comunes a todos los cofres.
 */
export interface ChestBase extends UtilityBaseType {
    type_utility: 'chest';
    rewards: Reward[]
}

/**
 * Cofre que entrega una única opción elegida al azar.
 *
 * @property {'random'} rewardConfig - Selección aleatoria según el peso de cada recompensa.
 *  * @property {boolean} allowBulkOpen - Indica si se permite abrir varias unidades del cofre
 * en una misma operación. Si es false, solo se permite abrir una unidad por operación.
 */
export interface RandomChest extends ChestBase {
    rewardConfig: 'random';
    allowBulkOpen: boolean;
}

/**
 * Cofre que entrega todas las opciones configuradas.
 *
 * @property {'all'} rewardConfig - Entrega de todas las recompensas, sin selección por peso.
 */
export interface AllChest extends ChestBase {
    rewardConfig: 'all';
}

/**
 * Cofre que permite al jugador elegir una cantidad de opciones.
 *
 * @property {'pick'} rewardConfig - Selección de recompensas por el jugador, sin sorteo por peso.
 * @property {number} pickCount - Cantidad de opciones distintas que debe elegir el jugador.
 * Debe ser un entero entre 1 y rewards.length; esta restricción se valida en el servidor.
 */
export interface PickChest extends ChestBase {
    rewardConfig: 'pick';
    pickCount: number;
}

/**
 * Define el comportamiento de apertura del cofre.
 *
 * - `random`: selecciona una única recompensa utilizando los pesos configurados.
 * - `all`: entrega todas las recompensas configuradas.
 * - `pick`: permite al jugador elegir pickCount opciones distintas.
 */
export type RewardConfig = ChestType['rewardConfig']


export type Reward = ItemReward | ResourceReward


export interface ItemReward {
    type_reward: 'item'
    idItem: IdItemList,
    weight: number,
    rewardOptions?: RewardOptions;
}

export interface ResourceReward {
    type_reward: 'resource'
    value_reward: number;
    weight: number,
    type_resource: 'yang' | 'exp'
}

export type RewardTypes = 'exp' | 'item' | 'yang'

export interface RewardOptions {
    //si es un item que tiene cantidad se puede seleccionar una cantidad maxima y minima que pueda salir
    cantidadChances?: { min: number, max: number };

    //si es un item que tiene niveles de mejora,se puede seleccionar un rango de mejoras en las que puede salir
    upgradeChances?: { min: number, max: number };
}
