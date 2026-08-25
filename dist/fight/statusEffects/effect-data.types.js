"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPeriodicDamageEffectData = isPeriodicDamageEffectData;
function isPeriodicDamageEffectData(data) {
    switch (data.type) {
        case 'periodic_damage':
            return true;
        case 'control':
        case 'stat_modifier':
        case 'healing_reduction':
            return false;
    }
}
