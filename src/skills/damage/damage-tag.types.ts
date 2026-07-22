/**
 * Etiquetas que describen la naturaleza de un daño, efecto o habilidad.
 *
 * @remarks
 * Las tags permiten que modificadores, bonus, pasivas o condiciones puedan
 * detectar qué tipo de acción se está resolviendo sin depender de `if`
 * específicos por skill.
 *
 * Por ejemplo:
 * - Un bonus puede aplicar solo si el daño tiene la tag `ad`.
 * - Una pasiva puede aumentar el daño si la skill tiene la tag `incendio`.
 * - Una defensa puede reducir daño si el ataque tiene la tag `melee`.
 *
 * @property {'skill'} skill
 * Indica que el daño proviene de una habilidad.
 *
 * @property {'ad'} ad
 * Indica que el daño está relacionado con daño físico o ataque físico.
 *
 * @property {'ap'} ap
 * Indica que el daño está relacionado con daño mágico o ataque mágico.
 *
 * @property {'incendio'} incendio
 * Indica que el daño o efecto está relacionado con incendio.
 *
 * @property {'veneno'} veneno
 * Indica que el daño o efecto está relacionado con veneno.
 *
 * @property {'sangrado'} sangrado
 * Indica que el daño o efecto está relacionado con sangrado.
 *
 * @property {'electrico'} electrico
 * Indica que el daño o efecto está relacionado con electricidad.
 *
 * @property {'weapon'} weapon
 * Indica que el daño está relacionado con el arma equipada.
 *
 * @property {'dot'} dot
 * Indica que el daño es continuo o se aplica por ticks/turnos.
 *
 * @property {'cc'} cc
 * Indica que la habilidad o efecto está relacionado con control de masas.
 *
 * @property {'true'} true
 * Indica que el daño es verdadero, normalmente no mitigado por defensas.
 *
 * @property {'melee'} melee
 * Indica que el daño o habilidad es de corto alcance.
 *
 * @property {'ranged'} ranged
 * Indica que el daño o habilidad es de largo alcance.
 * 
 *  * @property {'ranged'} heal
 * Indica que la skill es una curacion
 */
export type DamageTag =
  | 'skill'
  | 'ad'
  | 'ap'
  | 'incendio'
  | 'veneno'
  | 'sangrado'
  | 'electrico'
  | 'weapon'
  | 'dot'
  | 'cc'
  | 'true'
  | 'melee'
  | 'ranged'
  | 'heal'