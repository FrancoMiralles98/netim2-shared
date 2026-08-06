/**
 * Valor de un atributo del personaje.
 *
 * @property {number} lvPoints
 * Puntos asignados manualmente por subida de nivel.
 *
 * @property {number} bonusPoints
 * Puntos obtenidos mediante items, skills, buffos u otras fuentes externas.
 *
 * @note
 * Se hace una separacion porque tiene un limite de puntos que se pueden subir por nivel (lvPoints)
 */
export interface AttributeValue {
    lvPoints: number;
    bonusPoints: number;
}
export interface Atributos {
    VIT: AttributeValue;
    INT: AttributeValue;
    STR: AttributeValue;
    DEX: AttributeValue;
}
