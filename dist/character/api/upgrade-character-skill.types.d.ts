import type { SkillType } from '../../skills/skill-type';
import type { InventoryChangeResult } from '../../inventory/item-to-update.types';
import type { SkillUpgradeCost } from './skill-upgrade-preview.types';
/** Solicitud para subir una habilidad del personaje un nivel. El servidor valida los requisitos. */
export type UpgradeCharacterSkillRequest = {
    /** ID de la habilidad que se desea mejorar. */
    skillId: SkillType['id'];
};
/** Estado de la habilidad después de aplicar la mejora y opciones para la siguiente subida. */
export type UpgradeCharacterSkillResponse = {
    /** Habilidad completa con el nivel y los valores actualizados. */
    skill: SkillType;
    /** Saldos finales de los ítems consumidos; sin cantidad se elimina la instancia.
     * Lista vacía si la mejora no consumió ítems. */
    updatedItems: InventoryChangeResult[];
    /** Habilidad en el siguiente nivel; null si alcanzó el nivel máximo. */
    next: SkillType | null;
    /** Costo de la siguiente mejora; null si no existe o aún no está configurado. */
    cost: SkillUpgradeCost | null;
    /** Indica si el personaje cumple los requisitos para volver a subir esta habilidad. */
    canUpgrade: boolean;
    /** Motivo por el que no está habilitada la siguiente mejora, cuando corresponda. */
    reason?: string;
};
