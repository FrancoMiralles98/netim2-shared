import { CharacterRace } from "../../character/character-stats.type";
import { ReinosNames } from "../../gamedata/reinos-names.type";
export interface CharacterCreationValues {
    nombre?: string;
    genero?: 'masculino' | 'femenino';
    reino?: ReinosNames;
    raza?: CharacterRace;
}
