import { BaseCharacterProps } from "../character/base-character-props.type";
import { CharacterAttribute, CharacterRace, CharacterSpeciality } from "../character/character-stats.type";
/**
 * Define la base de datos que se utiliza para construir el resumen de un personaje.
 *
 * Este tipo toma únicamente las propiedades necesarias de `BaseCharacterProps`
 * para mostrar un personaje en la pantalla de selección.
 *
 * @see BaseCharacterProps
 */
type CharacterSummaryBase = Pick<BaseCharacterProps, 'lv' | 'nombre' | 'time_played' | 'gremio_options' | 'genero' | 'reino' | 'raza' | 'stats' | 'especialidad'>;
/**
 * Representa una versión resumida de un personaje para enviar al cliente.
 *
 * Se usa principalmente en la selección de personajes, donde no es necesario
 * exponer toda la información persistida del personaje.
 *
 * A diferencia del modelo completo, expone el identificador como `id` en formato
 * `string` y limita `stats` únicamente a los atributos principales del personaje.
 *
 * @see CharacterSummaryBase
 * @see BaseCharacterProps
 */
export type CharacterSummary = Omit<CharacterSummaryBase, 'stats'> & {
    id: string;
    stats: Pick<BaseCharacterProps['stats'], 'atributos'>;
};
/**
 * Datos necesarios para inicializar la pantalla de selección de personaje.
 *
 * Esta estructura se envía al cliente desde la ruta de selección de personaje
 * e incluye tanto los personajes disponibles de la cuenta como la información
 * necesaria para crear un nuevo personaje.
 *
 * @property characters Lista resumida de personajes pertenecientes a la cuenta autenticada.
 * @property races Información de las razas disponibles para la creación de personaje.
 * @property attributeLimit Límite máximo total que puede alcanzar un atributo, incluyendo puntos base y bonus externos.
 */
export interface CharacterSelectionDataType {
    characters: CharacterSummary[];
    races: RaceInfo[];
    attributeLimit: number;
}
/**
 * @description Configuración enviada al cliente para la creación de personajes
 * de una raza determinada.
 *
 * @property {CharacterRace} raza Raza a la que pertenece la configuración.
 * @property {CharacterStatsSpeciality} especialidades.base Configuración base
 * de los límites de atributos de la raza.
 * @property {Partial<Record<CharacterSpeciality, CharacterStatsSpeciality>>}
 * Configuracion de los limites maximos de cada especialidades de la raza
 */
export interface RaceInfo {
    raza: CharacterRace;
    especialidades: {
        base: CharacterStatsSpeciality;
    } & Partial<Record<CharacterSpeciality, CharacterStatsSpeciality>>;
}
export interface CharacterStatsSpeciality {
    statsLimit: StatsLimit;
}
export type StatsLimit = Record<CharacterAttribute, number>;
export {};
