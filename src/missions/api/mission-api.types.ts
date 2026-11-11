import { CharacterPersistence } from "../../character/character-persistence.type";
import { IdMissionsList } from "../idMissions/id-mission-list.enum";
import { MissionDefinition, MissionDetailResponse, MissionOwner, MissionProgress, MissionStatus } from "../mission.types";


type MissionText = { shortDescription?: string; note?: string };
export type CatalogMission = MissionDefinition & MissionText;

export type MissionProgressResponse = Omit<MissionProgress, 'startedAt' | 'expiresAt' | 'completedAt'> & {
    startedAt: string;
    expiresAt?: string;
    completedAt?: string;
};

export type MissionListEntry = MissionDetailResponse & MissionText & {
    status: MissionStatus;
    progress?: MissionProgressResponse;
};

export type MissionListResponse = {
    available: MissionListEntry[];
    active: MissionListEntry[];
    idMissionsDone: IdMissionsList[];
};

/** Cantidad de misiones disponibles por owner. Se pueden omitir los owners con cero misiones. */
export type AvailableMissionCountsByOwner = Partial<Record<MissionOwner, number>>;

export type AcceptMissionRequest = { missionId: IdMissionsList };
export type MissionAttemptRequest = AcceptMissionRequest & { attemptId: string };
export type ClaimMissionRequest = MissionAttemptRequest;
export type RemoveFailedMissionRequest = MissionAttemptRequest;
export type AcceptMissionResponse = { mission: MissionListEntry };
export type RemoveFailedMissionResponse = { missionId: IdMissionsList; status: 'available' | null };
export type ClaimMissionResponse = {
    missionId: IdMissionsList;
    idMissionsDone: IdMissionsList[];
    missionsInProgress: MissionProgressResponse[];
    changes: Partial<Pick<CharacterPersistence, 'lv' | 'exp' | 'exp_next_lv' | 'puntos_atributos' |
        'puntos_habilidad' | 'atribute_per_lv' | 'stats' | 'atributos' | 'buffos' | 'inventario' | 'yang'>>;
};
