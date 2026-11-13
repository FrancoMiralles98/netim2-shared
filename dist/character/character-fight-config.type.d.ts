export interface FightConfig {
    self: {
        priorityBassicAttack: boolean;
        HealingSkillHpThresholdPercent: number;
        reactiveAuras: boolean;
        /** Orden de prioridad con todos los criterios exactamente una vez. */
        skillPriority: SkillPriorityOrder;
    };
    enemies: {
        selector: EnemiePriority;
        focus: boolean;
    };
    allies: {};
}
export type SkillPriorityType = 'more_damage' | 'more_cd' | 'less_damage' | 'control' | 'has_periodicDamage' | 'less_cd' | 'stat_modifier';
type Permutation<Remaining, Choice = Remaining> = [Remaining] extends [never] ? [] : Choice extends Remaining ? [Choice, ...Permutation<Exclude<Remaining, Choice>>] : never;
/** Cada criterio de habilidad debe aparecer una vez, en cualquier orden. */
export type SkillPriorityOrder = Permutation<SkillPriorityType>;
export type EnemiePriority = 'random' | 'more_max_hp' | 'less_max_hp' | 'less_hp' | 'more_hp';
export {};
