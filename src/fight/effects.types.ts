export type FightEffectId =
    | 'veneno'
    | 'incendio'
    | 'sangrado'
    | 'electrico'
    | 'desmayo'
    | 'retardo'
    | 'doble_golpe';

export type EffectCategory = 'damage' | 'cc' | 'buff' | 'debuff' | 'special';

export interface ActiveEffect {
    id: FightEffectId;
    category: EffectCategory;
    isActive: boolean;
    turnsRemaining: number;
    stacks: number;
    sourceId?: string;
    value?: number;
}