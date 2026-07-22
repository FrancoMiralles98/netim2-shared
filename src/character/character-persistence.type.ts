import { InventoryItem } from "../inventory/inventory-item.type"
import { SkillType } from "../skills/skill-type"
import { BaseCharacterProps } from "./base-character-props.type"

export interface CharacterPersistence extends BaseCharacterProps {
    hab: SkillType[]
    inventario: InventoryItem[]
}