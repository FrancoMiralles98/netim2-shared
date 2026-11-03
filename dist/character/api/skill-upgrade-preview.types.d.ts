import type { InventoryItem } from '../../inventory/inventory-item.type';
import type { SkillType } from '../../skills/skill-type';
export type SkillUpgradeCost = {
    type: 'skill_points';
    amount: number;
} | {
    type: 'materials';
    items: {
        idItem: InventoryItem['idItem'];
        amount: number;
    }[];
};
export type GetSkillUpgradePreviewRequest = {
    skillId: SkillType['id'];
};
export type GetSkillUpgradePreviewResponse = {
    current: SkillType;
    next: SkillType | null;
    canUpgrade: boolean;
    /** null cuando no existe próximo nivel o todavía no se configuró su costo. */
    cost: SkillUpgradeCost | null;
    reason?: string;
};
