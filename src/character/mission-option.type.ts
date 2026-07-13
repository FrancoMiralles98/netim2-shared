import { ActionMissionProgress } from "../missions/action-mission.type";
import { CollectMissionProgress } from "../missions/collect-mission.type";
import { HuntMissionProgress } from "../missions/hunt-mission.type";
import { IdMissionsList } from "../missions/idMissions/id-mission-list.enum";
import { TypeMission } from "../missions/mission-base.type";


export interface MissionOption {
    idMissionsDone: IdMissionsList[];
    missionsInProgress: MissionInCharacter[]
}

export interface MissionInCharacter {
    idMission: IdMissionsList;
    missionProgress: CollectMissionProgress | HuntMissionProgress | ActionMissionProgress
    missionType: TypeMission
}