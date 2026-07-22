/**
 * Reglas generales que determinan cómo puede interactuar un componente de daño
 * con las mecánicas defensivas u ofensivas del combate.
 *
 * @remarks
 * Estas flags permiten configurar comportamientos especiales por skill o por
 * componente de daño.
 *
 * Si una propiedad está en `false`, esa mecánica no puede aplicarse.
 * Si está en `true`, la mecánica puede aplicarse según las reglas normales
 * del combate.
 *
 * Si una propiedad está en `undefined`, se recomienda tomar un valor por
 * defecto definido por el sistema de combate.
 *
 * @property {boolean} [canCrit]
 * Indica si este daño puede aplicar golpe crítico.
 *
 * @property {boolean} [canMiss]
 * Indica si este daño puede fallar.
 *
 * @property {boolean} [canBeBlocked]
 * Indica si este daño puede ser bloqueado por el objetivo.
 *
 * @property {boolean} [canBeDodged]
 * Indica si este daño puede ser esquivado por el objetivo.
 */
export interface SkillDamageFlags {
    canCrit?: boolean;
    canMiss?: boolean;
    canBeBlocked?: boolean;
    canBeDodged?: boolean;
}