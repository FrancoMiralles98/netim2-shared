import type { LetterMasteryLv } from '../letter-mastery-lv.type';
export type SkillLeveledMasteryRank = Exclude<LetterMasteryLv, 'P'>;
/** Nivel dentro del rango, no puntos acumulados. N/M/G empiezan en 1; P no tiene nivel. */
export type SkillProgressionPoint = {
    rank: SkillLeveledMasteryRank;
    level: number;
} | {
    rank: 'P';
};
/** Límites comunes del juego que necesita el evaluador para acumular rangos completados. */
export interface SkillProgressionLimits {
    maxLevelByRank: Record<SkillLeveledMasteryRank, number>;
}
export interface SkillConstantProgression {
    type: 'constant';
    value: number;
}
/**
 * Progreso acumulativo: N1 = base. N aporta level - 1 incrementos;
 * cada rango posterior aporta level incrementos, incluido M1/G1.
 * Se conservan los incrementos de los rangos anteriores completos.
 * P conserva todo lo ganado y suma perfectBonus (0 si se omite).
 * Los máximos de N/M/G proceden de SkillProgressionLimits.
 */
export interface SkillPerLevelProgression {
    type: 'per_level';
    base: number;
    perLevel: Record<SkillLeveledMasteryRank, number>;
    perfectBonus?: number;
}
export interface SkillProgressionThreshold {
    at: SkillProgressionPoint;
    add: number;
}
/** Base + todos los add alcanzados, ordenando N < M < G < P y luego por nivel. */
export interface SkillThresholdProgression {
    type: 'thresholds';
    base: number;
    thresholds: readonly SkillProgressionThreshold[];
}
export type SkillValueProgression = SkillConstantProgression | SkillPerLevelProgression | SkillThresholdProgression;
/**
 * Sin unlockAt está disponible desde el inicio. El desbloqueo solo filtra opciones:
 * no reinicia ni desplaza su progresión, que siempre usa el progreso total de la skill.
 */
export interface SkillScalingUnlock {
    unlockAt?: SkillProgressionPoint;
}
