"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer_pvp = exports.base_timers_pvm_multiplier = void 0;
/**
 * estos valores sirven para multiplicar el valor que tiene en timer_lv el character
 */
exports.base_timers_pvm_multiplier = {
    mob: 1,
    netims: 2,
    boss: 4,
};
//Este es el timer unico de PVP, siempre es el mismo independientemente del nivel (en milisegundos)
exports.timer_pvp = 5 * 60 * 1000; //ahora mismo 5 minutos
