export interface FightConfig {
    self: {
        priorityBassicAttack: boolean;
        HealingSkillHpThresholdPercent: number;
        reactiveAuras: boolean;
        /** Orden de prioridad con todos los criterios exactamente una vez. */
        skillPriority: SkillPriorityOrder;
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

type Permutation<Remaining, Choice = Remaining> = [Remaining] extends [never]
    ? []
    : Choice extends Remaining
        ? [Choice, ...Permutation<Exclude<Remaining, Choice>>]
        : never;

/** Cada criterio de habilidad debe aparecer una vez, en cualquier orden. */
export type SkillPriorityOrder = Permutation<SkillPriorityType>;

export type EnemiePriority =
    'random'
    | 'more_max_hp'
    | 'less_max_hp'
    | 'less_hp'
    | 'more_hp'
