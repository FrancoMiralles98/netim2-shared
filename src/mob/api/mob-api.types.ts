import { UbicationNames } from "../../gamedata/ubication-names.type";
import { IdMobList } from "../id-mob-list.enum";
import { MobSummary } from "../mob-summary.type";
import { MobType } from "../mob.index";

/** Parámetros de GET /mob/:idMob; utiliza el ID de catálogo, no el de MongoDB. */
export type GetMobInfoRequest = { idMob: IdMobList };

/** Contenido de data en la respuesta HTTP, con las estadísticas recalculadas. */
export type GetMobInfoResponse = MobType;

/** Query de GET /mob?ubication=city1. */
export type GetMobsByUbicationRequest = { ubication: UbicationNames };
export type GetMobsByUbicationResponse = MobSummary[];
