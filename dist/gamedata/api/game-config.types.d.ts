import type { AttributesRefKeys, BonusRefKeys } from "../../bonus/bonus-index";
import type { CharacterPersistence } from "../../character/character-persistence.type";
import type { CharacterSpeciality } from "../../character/character-stats.type";
import { ActiveStatusEffectId, StatusEffectConfig } from "../../fight/fight.index";
import type { IdItemList } from "../../item/iditems/id-item-list.type";
import type { UNIQUE_ID_SKILLS } from "../../skills/unique-id-skill.enum";
import type { ZoneNames } from "../zone-names.type";
/** Configuración pública del juego enviada por el backend al cliente. */
export type GameConfigResponse = {
    character: CharacterConfig;
    attributes: {
        /** Aporte a las estadísticas por cada punto de atributo. */
        effects: Record<AttributesRefKeys, Partial<Record<BonusRefKeys, number>>>;
    };
    combat: {
        dodgePerMovementSpeed: number;
        spellDodgePerMovementSpeed: number;
        cooldownScaling: {
            maxReductionPercent: number;
            initialReductionPerPoint: number;
            decayRate: number;
            maxReductionPoints: number;
        };
        bonusEffects: {
            corta_curacion: number;
            penetration_flat_defense: number;
            penetracion_porcentual_defense: number;
            reflect_porcent_dmg: number;
        };
        statusEffect: Record<ActiveStatusEffectId, StatusEffectConfig>;
    };
    equipment: {
        slots: EquipmentSlotConfig[];
    };
    buff: {
        max_active_buff: number;
    };
    /** Configuración de cada zona, indexada por su nombre. */
    zonas: {
        [Name in ZoneNames]: ZoneConfig<Name>;
    };
};
/** Niveles, ítems y requisitos de desbloqueo de una zona. */
export type ZoneConfig<Name extends ZoneNames = ZoneNames> = {
    name: Name;
    /** Niveles mínimo y máximo de los enemigos de la zona. */
    mobsLevls: [min: number, max: number];
    idItems: IdItemList[];
    lvToUnlock?: number;
    cost?: number;
};
/** Configuración correspondiente al personaje que recibe la respuesta. */
export type CharacterConfig = CharacterAttributeCaps & {
    /** Nivel mínimo requerido para elegir una especialidad. */
    min_speciality_level: number;
    /** Habilidades de las especialidades incluidas en la configuración. */
    idSkillsSpeciality: SpecialitySkillsConfig[];
};
/** Límites de VIT, INT, STR y DEX para una raza o especialidad concreta. */
export type AttributeCaps = Record<AttributesRefKeys, number>;
/**
 * Límites de atributos de la raza y de las especialidades incluidas en la configuración.
 *
 * @property {AttributeCaps} race - Caps de la raza del personaje, sin incluir las demás razas.
 * @property {SpecialityAttributeCaps[]} speciality - Caps por especialidad. Puede ser una lista vacía
 * y no requiere incluir todas las especialidades del juego.
 */
export type CharacterAttributeCaps = {
    race: AttributeCaps;
    speciality: SpecialityAttributeCaps[];
};
/** Caps de atributos correspondientes a una especialidad concreta. */
export type SpecialityAttributeCaps = {
    specialidad: CharacterSpeciality;
    caps: AttributeCaps;
};
/** IDs de las habilidades correspondientes a una especialidad concreta. */
export type SpecialitySkillsConfig = {
    specialidad: CharacterSpeciality;
    idSkills: UNIQUE_ID_SKILLS[];
};
/**
 * Configuración de compra de un set de equipamiento.
 *
 * @property slot - Número de set de equipamiento: 1, 2 o 3.
 * @property cost - Costo de desbloqueo en la moneda indicada; 0 para un set gratuito.
 * @property currency - Moneda utilizada para desbloquear el set: yang o monedas de dragón.
 *
 * @example { slot: 2, cost: 500_000, currency: 'yang' }
 */
export type EquipmentSlotConfig = {
    slot: CharacterPersistence['equipo_selected'];
    cost: number;
    currency: 'yang' | 'md';
};
