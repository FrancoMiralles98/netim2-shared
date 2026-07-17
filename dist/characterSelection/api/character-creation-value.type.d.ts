import { CharacterGenero } from "../../character/character-genero.type";
import { CharacterRace } from "../../character/character-stats.type";
import { ReinosNames } from "../../gamedata/reinos-names.type";
export interface CharacterCreationValues {
    nombre?: string;
    genero?: CharacterGenero;
    reino?: ReinosNames;
    raza?: CharacterRace;
}
