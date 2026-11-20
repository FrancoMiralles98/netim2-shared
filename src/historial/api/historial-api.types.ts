import { HistorialDetalle, PartialHistorialDetalle, PendingHistoryReward } from "../historial-detalle.type";

/** Identificador del historial solicitado. La propiedad se valida con el personaje autenticado. */
export type GetHistorialRequest = { historialId: string };
export type GetHistorialResponse = { id: string; characterId: string; detalles: HistorialDetalle };
export type GetHistorialListRequest = { filtro?: HistorialDetalle['filtro'] };
export type GetHistorialListResponse = PartialHistorialDetalle[];

/** Selección de recompensas de un historial. */
export type ClaimHistoryRewardsRequest = GetHistorialRequest & { rewardIds: string[] };

/** Selección preparada que Character debe insertar en el inventario antes de confirmar el reclamo. */
export type PreparedHistoryRewards = {
    historialId: string;
    rewards: PendingHistoryReward[];
};

/** Estado del historial después de confirmar las recompensas insertadas por Character. */
export type ClaimHistoryRewardsResponse = {
    historialId: string;
    claimedRewardIds: string[];
    pendingItems: PendingHistoryReward[];
    remainingReward: boolean;
};
