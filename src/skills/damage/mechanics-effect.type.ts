/**
 * Keys de mecánicas especiales que pueden aplicar las habilidades.
 *
 * @property {'vampirismo_hechizo'} vampirismo_hechizo
 * Convierte un porcentaje del daño realizado por una habilidad en curación
 * para el atacante.
 *
 * @property {'penetracion_habilidad'} penetracion_habilidad
 * Reduce o ignora un porcentaje de la defensa/resistencia del objetivo
 * durante el cálculo de daño de esa habilidad específica.
 */
export type MechanicsEffectsKeys =
    'vampirismo_hechizo' |
    'penetracion_habilidad' 