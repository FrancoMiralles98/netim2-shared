import type { SkillType } from '../../skills/skill-type';
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
    /** Habilidad en el siguiente nivel; null si alcanzó el nivel máximo. */
    next: SkillType | null;
    /** Costo de la siguiente mejora; null si no existe o aún no está configurado. */
    cost: SkillUpgradeCost | null;
    /** Indica si el personaje cumple los requisitos para volver a subir esta habilidad. */
    canUpgrade: boolean;
    /** Motivo por el que no está habilitada la siguiente mejora, cuando corresponda. */
    reason?: string;
};
