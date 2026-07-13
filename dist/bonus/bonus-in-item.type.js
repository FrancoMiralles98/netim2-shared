"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueBonusType = void 0;
/**
 * Define cómo se interpreta y muestra el valor de un bonus.
 *
 * @property PORCENTAGE Valor porcentual
 *  - Se muestra con símbolo "%"
 *  @example "Velocidad de ataque +15%"
 *
 * @property FLAT Valor plano
 *  - Se muestra sin símbolo adicional
 *  @example "Max HP +500"
 */
var ValueBonusType;
(function (ValueBonusType) {
    ValueBonusType["PORCENTAGE"] = "porcentage";
    ValueBonusType["FLAT"] = "flat";
})(ValueBonusType || (exports.ValueBonusType = ValueBonusType = {}));
