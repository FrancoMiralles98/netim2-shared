import type { IdMissionsList } from '../missions/idMissions/id-mission-list.enum';
import type { MissionProgress } from '../missions/mission.types';

/** Estado de misiones guardado en el personaje. */
export interface MissionOption {
    /** IDs de misiones cuya recompensa ya fue cobrada. */
    idMissionsDone: IdMissionsList[];
    /** Intentos sin cobrar, con un solo registro por misión. */
    missionsInProgress: MissionProgress[];
}
