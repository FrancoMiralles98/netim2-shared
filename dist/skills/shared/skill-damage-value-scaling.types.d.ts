import type { SkillRangeScaling } from './skill-value-scaling.types';
/**
 * Escalado de la cantidad de daño de un componente de la habilidad.
 * El daño siempre exige un mínimo y un máximo, aunque ambos sean iguales.
 * Cada extremo conserva su progresión y sus aportes por atributos/stats.
 * No representa un multiplicador ni el tipo de daño AD/AP/verdadero.
 * El evaluador debe validar que el rango calculado sea no negativo y min <= max.
 */
export interface SkillDamageValueScaling {
    type: 'damage';
    range: SkillRangeScaling;
}
