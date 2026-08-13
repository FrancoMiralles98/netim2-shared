/**
 * Nivel de mejora de un equipamiento.
 *
 * Representa el estado actual de mejora del objeto.
 *
 * Niveles normales: +0 a +9
 *
 * Estos corresponden a las mejoras estándar que cualquier
 * equipamiento puede obtener mediante el sistema normal
 * de progresión.
 *
 * Niveles de corrupción:  +10, +11
 *
 * Son niveles especiales obtenidos mediante sistemas de
 * corrupción o mejoras avanzadas y permiten superar los
 * límites tradicionales del equipamiento.
 */
export type UpgradeLv =
    0 |
    1 |
    2 |
    3 |
    4 |
    5 |
    6 |
    7 |
    8 |
    9 |
    10 |
    11