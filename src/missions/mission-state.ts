import type { BaseCharacterProps } from '../character/base-character-props.type';
import type { MissionDefinition, MissionObjective, MissionProgress, MissionStatus, MissionStep } from './mission.types';

/** Verifica al cargar el catálogo que los IDs de pasos y objetivos sean únicos dentro de la misión. */
export function validateMissionDefinition(definition: MissionDefinition): void {
    if (definition.steps.length === 0) {
        throw new Error(`La misión ${definition.id} debe tener al menos un paso.`);
    }

    const stepIds = new Set<number>();
    const objectiveIds = new Set<number>();

    for (const step of definition.steps) {
        if (stepIds.has(step.id)) {
            throw new Error(`Paso ${step.id} repetido en la misión ${definition.id}.`);
        }
        stepIds.add(step.id);

        for (const objective of step.objectives) {
            if (objectiveIds.has(objective.id)) {
                throw new Error(`Objetivo ${objective.id} repetido en la misión ${definition.id}.`);
            }
            objectiveIds.add(objective.id);
        }
    }
}

function resolveActiveStep(definition: MissionDefinition, progress: MissionProgress): MissionStep | undefined {
    if (progress.missionId !== definition.id) {
        throw new Error(`El intento ${progress.attemptId} no corresponde a la misión ${definition.id}.`);
    }
    if (!definition.sequentialSteps) {
        return undefined;
    }

    const activeStep = definition.steps.find(step => step.id === progress.activeStepId);
    if (!activeStep) {
        throw new Error(`Paso activo ${progress.activeStepId} inválido para la misión ${definition.id}.`);
    }
    return activeStep;
}

/** Verifica que el intento corresponda a la misión y tenga un paso válido si es secuencial. */
export function validateMissionProgress(definition: MissionDefinition, progress: MissionProgress): void {
    resolveActiveStep(definition, progress);
}

/** Devuelve los objetivos habilitados por el orden de la misión para este intento. */
export function getUnlockedMissionObjectives(
    definition: MissionDefinition,
    progress: MissionProgress,
): readonly MissionObjective[] {
    const activeStep = resolveActiveStep(definition, progress);
    return activeStep ? activeStep.objectives : definition.steps.flatMap(step => step.objectives);
}

/** Calcula el estado para el personaje. Devuelve `null` si todavía no puede aceptar la misión. */
export function getMissionStatus(
    definition: MissionDefinition,
    character: Pick<BaseCharacterProps, 'lv' | 'especialidad' | 'mission_option'>,
    now: Date = new Date(),
): MissionStatus | null {
    const { idMissionsDone, missionsInProgress } = character.mission_option;
    if (idMissionsDone.includes(definition.id)) {
        return 'reward_claimed';
    }

    const progress = missionsInProgress.find(attempt => attempt.missionId === definition.id);
    if (progress) {
        validateMissionProgress(definition, progress);

        const { completedAt, expiresAt } = progress;
        if (completedAt && (!expiresAt || completedAt < expiresAt)) {
            return 'ready_to_claim';
        }
        if (expiresAt && now >= expiresAt) {
            return 'failed';
        }
        return 'in_progress';
    }

    const requirements = definition.prerequisites;
    const hasRequiredLevel = character.lv >= (requirements?.minLevel ?? 0);
    const hasClaimedRequiredMissions = requirements?.claimedMissionIds?.every(id => idMissionsDone.includes(id)) ?? true;
    const allowedSpecialities = requirements?.specialities;
    const hasRequiredSpeciality = !allowedSpecialities?.length ||
        (character.especialidad !== undefined && allowedSpecialities.includes(character.especialidad));

    return hasRequiredLevel && hasClaimedRequiredMissions && hasRequiredSpeciality ? 'available' : null;
}
