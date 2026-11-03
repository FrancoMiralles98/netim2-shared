import { Stats } from "../../shared/stats.types";
import { SkillType } from "../../skills/skill-type";
import { Atributos } from "../attributes.types";
import { CharacterSpeciality } from "../character-stats.type";

/** Contratos provisorios hasta incorporarlos a netim2-shared. */
export type SelectCharacterSpecialityRequest = {
    speciality: CharacterSpeciality;
};

export type SelectCharacterSpecialityResponse = {
    speciality: CharacterSpeciality;
    /** Habilidades disponibles en nivel 0, aún no aprendidas. */
    skills: SkillType[];
    stats: Stats;
    attributes: Atributos;
};
