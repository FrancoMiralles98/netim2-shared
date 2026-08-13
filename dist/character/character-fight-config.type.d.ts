export interface FightConfig {
    self: {
        priorityBassicAttack: boolean;
        HealingSkillHpThresholdPercent: number;
        reactiveAuras: boolean;
        skillPriority: [
            'more_damage',
            'more_cd',
            'less_damage',
            'control',
            'has_periodicDamage',
            'less_cd',
            'stat_modifier'
        ];
    };
    enemies: {
        selector: EnemiePriority;
        focus: boolean;
    };
    allies: {};
}
export type SkillPriorityType = 'more_damage' | 'more_cd' | 'less_damage' | 'control' | 'has_periodicDamage' | 'less_cd' | 'stat_modifier';
export type EnemiePriority = 'random' | 'more_max_hp' | 'less_max_hp' | 'less_hp' | 'more_hp';
