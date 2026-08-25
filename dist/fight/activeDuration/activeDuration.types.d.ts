import { DurationConfig } from "../../skills/skill-index";
export interface createActiveDurationProps {
    type: 'turns' | 'until_no_mana';
    initialTurns?: number;
    remainingTurns?: number;
}
export interface ActiveDurationAdvanceResult {
    type: DurationConfig['type'];
    previousTurns?: number;
    remainingTurns?: number;
    expired?: boolean;
}
