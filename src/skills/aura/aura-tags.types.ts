/**
 * Etiquetas que describen el tipo o comportamiento de una aura.
 *
 * @remarks
 * Las tags permiten clasificar auras para aplicar reglas generales,
 * filtros de UI, límites de activación o modificadores externos.
 
 *
 * @property {'buff'} buff
 * Indica que el aura otorga beneficios al objetivo o al usuario.
 *
 * @property {'offensive'} offensive
 * Indica que el aura tiene un propósito ofensivo, como aumentar daño,
 * aplicar efectos agresivos o mejorar ataques.
 *
 * @property {'defensive'} defensive
 * Indica que el aura tiene un propósito defensivo, como aumentar defensa,
 * reducir daño recibido o mejorar supervivencia.
 *
 * @property {'aura'} aura
 * Indica que la habilidad funciona como aura activa o pasiva mantenida.
 *
 * @property {'debuff'} debuff
 * Indica que el aura aplica penalizaciones o efectos negativos sobre enemigos.
 */
export type AuraTag = 'buff' | 'offensive' | 'defensive' | 'aura' | 'debuff'