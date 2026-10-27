import { AttributesRefKeys } from "../../bonus/bonus-index";
import { Stats } from "../../shared/stats.types";
import { Atributos } from "../attributes.types";
import { CharacterPersistence } from "../character-persistence.type";


/** Contratos auxiliares hasta incorporarlos a netim2-shared. Una asignación por petición. */
export type IncreaseCharacterAttributeRequest = { attribute: AttributesRefKeys };
export type IncreaseCharacterAttributeResponse = {
    stats: Stats;
    attributes: Atributos;
    puntos_atributos: number;
};
export type CharacterIncreaseAttributeResult = {
    character: CharacterPersistence;
    response: IncreaseCharacterAttributeResponse;
};
