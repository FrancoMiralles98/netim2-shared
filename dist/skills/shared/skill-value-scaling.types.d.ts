import type { AttributesRefKeys } from '../../bonus/bonus-index';
import type { Stats } from '../../shared/stats.types';
import type { SkillScalingUnlock, SkillValueProgression } from './skill-progression.types';
type NumericLeafPaths<T> = {
    [K in keyof T & string]: T[K] extends number ? K : T[K] extends object ? `${K}.${NumericLeafPaths<T[K]>}` : never;
}[keyof T & string];
/** Solo rutas que terminan en un número: general.ad.min es válida; general.ad no. */
export type SkillNumericStatPath = NumericLeafPaths<Stats>;
/** Atributos efectivos o stats del personaje que proporciona el contexto de cálculo. */
export type SkillScalingSource = {
    type: 'attribute';
    attribute: AttributesRefKeys;
} | {
    type: 'stat';
    path: SkillNumericStatPath;
};
export interface SkillScalingContribution {
    source: SkillScalingSource;
    /** flat aporta unidades; increased aporta puntos porcentuales. */
    operation: 'flat' | 'increased';
    /** Aporte por punto de la fuente; admite negativos para reducciones. */
    coefficient: number;
}
/**
 * Valor = (progresión + suma de aportes flat) * (1 + suma de increased / 100).
 * Después se aplican límites y precisión. Cada contribución se evalúa una sola vez.
 * Estos contratos no ejecutan cálculos, RNG ni validación de números en runtime.
 */
export interface SkillValueScaling {
    progression: SkillValueProgression;
    contributions?: readonly SkillScalingContribution[];
    min?: number;
    max?: number;
    /** Decimales máximos: entero >= 0; truncado hacia cero. Omitir conserva precisión. */
    precision?: number;
}
export interface SkillRangeScaling {
    min: SkillValueScaling;
    max: SkillValueScaling;
}
/**
 * Opción de una única selección ponderada entre las habilitadas.
 * weight es un peso relativo >= 0 sin máximo 100. Debe haber peso total positivo.
 * El evaluador valida números finitos, IDs únicos y límites de nivel/precisión.
 */
export interface SkillWeightedOptionScaling extends SkillScalingUnlock {
    id: string;
    weight: SkillValueScaling;
    description?: string;
}
export {};
