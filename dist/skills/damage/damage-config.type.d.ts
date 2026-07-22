/**
 * Tipo de daño que puede aplicar una habilidad o ataque.
 *
 * @remarks
 * Determina qué fuente ofensiva se utiliza para calcular el daño
 * y qué tipo de defensa debería mitigar ese daño.
 *
 * - `ad`: daño físico basado en el ataque físico del luchador.
 * - `ap`: daño mágico basado en el ataque mágico del luchador.
 * - `true`: daño verdadero, normalmente no mitigado por defensas.
 */
export type DamageType = 'ad' | 'ap' | 'true';
