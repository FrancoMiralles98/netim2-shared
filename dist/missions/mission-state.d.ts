import type { BaseCharacterProps } from '../character/base-character-props.type';
import type { MissionDefinition, MissionObjective, MissionProgress, MissionStatus } from './mission.types';
/** Verifica al cargar el catálogo que los IDs de pasos y objetivos sean únicos dentro de la misión. */
export declare function validateMissionDefinition(definition: MissionDefinition): void;
/** Verifica que el intento corresponda a la misión y tenga un paso válido si es secuencial. */
export declare function validateMissionProgress(definition: MissionDefinition, progress: MissionProgress): void;
/** Devuelve los objetivos habilitados por el orden de la misión para este intento. */
export declare function getUnlockedMissionObjectives(definition: MissionDefinition, progress: MissionProgress): readonly MissionObjective[];
/** Calcula el estado para el personaje. Devuelve `null` si todavía no puede aceptar la misión. */
export declare function getMissionStatus(definition: MissionDefinition, character: Pick<BaseCharacterProps, 'lv' | 'especialidad' | 'mission_option'>, now?: Date): MissionStatus | null;
