import { ClaimHistoryRewardsResponse } from "../../historial/historial.index";
import { AddItemResult } from "../../inventory/inventory-result.types";

/** Estado del historial y cambios de inventario confirmados por el reclamo. */
export type ClaimCharacterHistoryRewardsResponse = ClaimHistoryRewardsResponse & AddItemResult;
