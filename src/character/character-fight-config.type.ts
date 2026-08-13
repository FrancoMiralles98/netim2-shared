export interface FightConfig {
    self: {
        priorityBassicAttack: boolean;
        HealingSkillHpThresholdPercent: number;
        reactiveAuras: boolean;
        skillPriority: [
            'more_damage'
            , 'more_cd'
            , 'less_damage'
            , 'control' //desmayo
            , 'has_periodicDamage' //(veneno,sangrado etc)
            , 'less_cd'
            , 'stat_modifier'
        ]
    },
    enemies: {
        selector: EnemiePriority, //que tipo de enemigo selecciona al principio de la pelea
        focus: boolean //si se mantiene el focus a ese enemigo seleccionado al principio
    },
    allies: {

    }
}

export type SkillPriorityType =
    'more_damage'
    | 'more_cd'
    | 'less_damage'
    | 'control' //desmayo
    | 'has_periodicDamage' //(veneno,sangrado etc)
    | 'less_cd'
    | 'stat_modifier' //retardo

export type EnemiePriority =
    'random'
    | 'more_max_hp'
    | 'less_max_hp'
    | 'less_hp'
    | 'more_hp'