import { FighterFightSummary, FightResult } from "../fight/fight.index";
import { ItemDTO } from "../item/item-dto";
import { IdMobList } from "../mob/id-mob-list.enum";
/** Ítem generado durante la pelea, con identidad estable para reclamarlo una sola vez. */
export interface PendingHistoryReward {
    rewardId: string;
    item: ItemDTO;
}
/** Referencia de cada enemigo que participó en el combate. */
export interface HistoryEnemy {
    fighterId: string;
    idMob?: IdMobList;
    name: string;
}
/** Resumen final del combate y estado de sus recompensas pendientes. */
export interface HistorialDetalle {
    fightId: string;
    filtro: 'pvm' | 'pvp';
    fecha: number;
    enemies: HistoryEnemy[];
    result: FightResult;
    fight: FighterFightSummary[];
    rewards: {
        expGranted: number;
        yangGranted: number;
        pendingItems: PendingHistoryReward[];
    };
}
/** Datos de liquidación que recibirá Historial al conectarse con Character. */
export type CreateHistorialInput = Omit<HistorialDetalle, 'fecha' | 'rewards'> & {
    fecha?: number;
    rewards: {
        expGranted: number;
        yangGranted: number;
        pendingItems: ItemDTO[];
    };
};
/** Datos livianos para listar combates sin cargar estadísticas ni ítems completos. */
export interface PartialHistorialDetalle {
    id: string;
    fightId: string;
    filtro: HistorialDetalle['filtro'];
    fecha: number;
    enemies: HistoryEnemy[];
    result: FightResult;
    expGranted: number;
    yangGranted: number;
    pendingRewardCount: number;
    remainingReward: boolean;
}
