import { CharacterPersistence } from "./character-persistence.type";

/**
 * Esto es lo que usa en el frontend cuando se selecciona un personaje y
 * para poder conectarse con el backend
 */
export type CharacterSession = CharacterPersistence & {
    id: string
}