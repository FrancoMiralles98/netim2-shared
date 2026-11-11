import type { CharacterSpeciality } from '../character/character-stats.type';
import type { UbicationNames } from '../gamedata/ubication-names.type';
import type { UpgradeLv } from '../item/config/general-implicit.type';
import type { IdItemList } from '../item/iditems/id-item-list.type';
import type { BuffoIdItem } from '../item/iditems/miscs/buffo-id-item.enum';
import type { PiedraIdItem } from '../item/iditems/miscs/piedra-id-item.enum';
import type { ItemDTO } from '../item/item-dto';
import type { IdMobList } from '../mob/id-mob-list.enum';
import type { EnemyType } from '../mob/mobProps/enemie-type.type';
import type { UNIQUE_ID_SKILLS } from '../skills/unique-id-skill.enum';
import type { IdMissionsList } from './idMissions/id-mission-list.enum';

/** Clasifica una misión como principal, secundaria o de tutorial. */
export type MissionCategory = 'main' | 'side' | 'tutorial';

/** Estado de una misión para un personaje, desde que puede aceptarla hasta que cobra la recompensa o falla. */
export type MissionStatus =
    | 'available'
    | 'in_progress'
    | 'ready_to_claim'
    | 'failed'
    | 'reward_claimed';

/** Define el contenido y las reglas de una misión en el catálogo. */
export interface MissionDefinition {
    /** Identificador que el personaje guarda como `MissionProgress.missionId`. */
    id: IdMissionsList;
    name: string;
    description: string;
    category: MissionCategory;
    owner: MissionOwner;
    /** Requisitos de nivel, misiones cobradas y especialidad para acceder a la misión. */
    prerequisites?: {
        minLevel?: number;
        claimedMissionIds?: readonly IdMissionsList[];
        specialities?: readonly CharacterSpeciality[];
    };
    /** Duración máxima del intento en segundos, si tiene límite. */
    timeLimitSeconds?: number;
    rewards: readonly MissionReward[];
    /** Pasos con sus objetivos. El orden del array define la secuencia si está habilitada. */
    steps: readonly [MissionStep, ...MissionStep[]];
    /** Si es `true`, cada paso se habilita al completar el anterior. Por defecto, todos están habilitados. */
    sequentialSteps?: boolean;
}

/** Identificador y cantidad requerida, comunes a todos los objetivos. */
export interface ObjectiveBase {
    /** Identificador único del objetivo entre todos los pasos de la misión. */
    id: number;
    /** Cantidad necesaria para completar el objetivo. */
    quantity: number;
}

/** Cuenta enemigos derrotados según sus IDs, su tipo o la zona. */
export interface HuntObjective extends ObjectiveBase {
    type: 'hunt';
    target:
    | { mobIds: readonly IdMobList[]; zone?: UbicationNames }
    | { enemyType: EnemyType; zone?: UbicationNames }
    | { zone: UbicationNames };
}

/** Cuenta ítems obtenidos o verifica cuántos hay en el inventario. */
export type CollectObjective = ObjectiveBase & {
    type: 'collect';
    itemId: IdItemList;
} & (
        | { mode: 'obtained' }
        | { mode: 'inventory'; consumeOnClaim: boolean }
    );

/** Evento de juego que cuenta para un objetivo de acción, con filtros opcionales según el evento. */
export type MissionAction = {
    /** Texto breve para mostrar la acción en el detalle de la misión. */
    shortDescription?: string;
} & (
    | { event: 'attribute_point_gained' }
    | { event: 'attribute_point_allocated'; attribute?: 'VIT' | 'STR' | 'DEX' | 'INT' }
    | { event: 'speciality_selected'; speciality?: CharacterSpeciality }
    | { event: 'skill_upgraded'; skillId?: UNIQUE_ID_SKILLS }
    | { event: 'item_equipped'; itemId?: IdItemList }
    | { event: 'equipment_upgraded'; itemId?: IdItemList }
    | { event: 'equipment_bonus_added'; itemId?: IdItemList }
    | { event: 'equipment_bonus_changed'; itemId?: IdItemList }
    | { event: 'equipment_stone_added'; itemId?: IdItemList; stoneId?: PiedraIdItem }
    | { event: 'chest_opened'; itemId?: IdItemList }
    | { event: 'fish_caught'; itemId?: IdItemList }
    | { event: 'buff_crafted'; itemId?: BuffoIdItem }
    | { event: 'character_level_up'; minLevel?: number }
    | { event: 'fight_completed' }
);

/** Cuenta las veces que el personaje realiza la acción especificada. */
export interface ActionObjective extends ObjectiveBase {
    type: 'action';
    action: MissionAction;
}

/** Requisito de caza, recolección o acción dentro de una misión. */
export type MissionObjective = HuntObjective | CollectObjective | ActionObjective;

/** Cantidad registrada para un objetivo identificado por `ObjectiveBase.id`. */
export interface MissionObjectiveProgress {
    objectiveId: number;
    count: number;
}

/** Progreso de un intento de misión de un personaje. */
export interface MissionProgress {
    /** ID de la definición correspondiente en el catálogo. */
    missionId: IdMissionsList;
    /** Identificador del intento concreto de esta misión. */
    attemptId: string;
    startedAt: Date;
    /** Momento en que vence el intento, si tiene límite de tiempo. */
    expiresAt?: Date;
    /** ID del paso activo. Requerido para intentos de misiones secuenciales. */
    activeStepId?: number;
    /** Momento en que el servidor confirmó que se completaron todos los pasos. */
    completedAt?: Date;
    objectivesProgress: MissionObjectiveProgress[];
}

/** Una recompensa de yang, experiencia o ítems al cobrar la misión. */
export type MissionReward =
    | { type: 'yang'; amount: number }
    | { type: 'exp'; amount: number }
    | { type: 'item'; itemId: IdItemList; quantity: number; upgradeLv?: UpgradeLv };

/** Recompensa para el detalle de la misión, con la vista previa completa del ítem si corresponde. */
export type MissionRewardDetail =
    | Exclude<MissionReward, { type: 'item' }>
    | (Extract<MissionReward, { type: 'item' }> & { item: ItemDTO });

/** Objetivo para el detalle de la misión, con nombres de ítems o enemigos cuando corresponda. */
export type MissionObjectiveDetail =
    | (CollectObjective & { itemName: string })
    | (HuntObjective & {
        mobs?: readonly { idMob: IdMobList; name: string }[];
    })
    | ActionObjective;

/** Paso con los datos de sus objetivos listos para mostrar. */
export type MissionStepDetail = Omit<MissionStep, 'objectives'> & {
    objectives: readonly MissionObjectiveDetail[];
};

/** Respuesta del detalle de una misión con sus objetivos y recompensas listos para mostrar. */
export type MissionDetailResponse = Omit<MissionDefinition, 'rewards' | 'steps'> & {
    rewards: readonly MissionRewardDetail[];
    steps: readonly [MissionStepDetail, ...MissionStepDetail[]];
};

/** Personaje o lugar del mundo al que está asociada la misión. */
export type MissionOwner =
    | 'orfebre'
    | 'encantador'
    | 'tienda_general'
    | 'herrero'
    | 'capitan'
    | 'pescador'
    | 'mercado'
    | 'arena'
    | 'tienda_armaduras'
    | 'tienda_armas';

/** Etapa de la misión con su propio conjunto de objetivos. */
export interface MissionStep {
    /** Identificador único del paso dentro de la misión. */
    id: number;
    objectives: readonly MissionObjective[];
}
