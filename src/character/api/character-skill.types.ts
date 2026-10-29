import { Stats } from "../../shared/stats.types";
import { SkillType } from "../../skills/skill-type";
import { Atributos } from "../attributes.types";
import { CharacterSpeciality } from "../character-stats.type";

/** Contratos auxiliares para consultar habilidades a nivel 1, sin asignarlas al personaje. */
export type GetCharacterSpecialitySkillsRequest = { speciality: CharacterSpeciality };
export type GetCharacterSpecialitySkillsResponse = {
    skills: SkillType[];
    stats: Stats;
    attributes: Atributos;
};
