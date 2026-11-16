import type { MobDropPreview } from "../../drop/mob-drop-preview.type";
import { UbicationNames } from "../../gamedata/ubication-names.type";
import { IdMobList } from "../id-mob-list.enum";
import { MobSummary } from "../mob-summary.type";
import { MobType } from "../mob.index";

/** Parámetros de GET /mob/:idMob; utiliza el ID de catálogo, no el de MongoDB. */
export type GetMobInfoRequest = { idMob: IdMobList };

/** Detalle del mob y vista previa de sus posibles drops. */
export type GetMobInfoResponse = {
    /** Información del mob con las estadísticas recalculadas. */
    mob: MobType;
    drop: MobDropPreview;
};

/** Query de GET /mob?ubication=city1. */
export type GetMobsByUbicationRequest = { ubication: UbicationNames };
export type GetMobsByUbicationResponse = MobSummary[];
