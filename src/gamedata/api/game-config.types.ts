import type { AttributesRefKeys, BonusRefKeys } from "../../bonus/bonus-index";
import type { CharacterPersistence } from "../../character/character-persistence.type";

/** Configuración pública del juego enviada por el backend al cliente. */
export type GameConfigResponse = {
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
    };
    equipment: {
        slots: EquipmentSlotConfig[];
    };
    buff: {
        max_active_buff: number
    }
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
