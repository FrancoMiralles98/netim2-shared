/**
 * Keys de efectos de estado que pueden quedar activos en un luchador.
 *
 * @remarks
 * Estos efectos representan estados aplicados durante el combate,
 *  estos efectos normalmente se guardan en el estado
 * activo del luchador y pueden tener duración, stacks, daño por turno o
 * restricciones de acción.
 *
 * @property {'veneno'} veneno
 * Efecto de daño continuo que puede reducir o interferir con la curación.
 *
 * @property {'incendio'} incendio
 * Efecto de daño continuo relacionado con fuego.
 *
 * @property {'electrico'} electrico
 * Efecto eléctrico, útil para mecánicas de cargas, sobrecarga o daño extra.
 *
 * @property {'sangrado'} sangrado
 * Efecto de daño continuo basado en heridas, que puede escalar con estadísticas
 * como velocidad de movimiento u otros valores del objetivo.
 *
 * @property {'retardo'} retardo
 * Efecto de control o debilitamiento que reduce velocidad de ataque,
 * velocidad de movimiento u otras acciones del objetivo.
 *
 * @property {'desmayo'} desmayo
 * Efecto de control que impide al objetivo realizar acciones durante una
 * cantidad determinada de turnos.
 */
export type StatusEffectsKeys = 'veneno' | 'incendio' | 'electrico' | 'sangrado' | 'retardo' | 'desmayo';
