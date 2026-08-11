export interface FightConfig {
    self: {
        priorityBassicAttack: boolean;
        HealingSkillHpThresholdPercent: number;
        reactiveAuras: boolean;
    };
    enemies: {
        focus: EnemiePriority;
    };
    allies: {};
}
export type EnemiePriority = 'random' | 'more_max_hp' | 'less_max_hp' | 'less_hp' | 'more_hp';
