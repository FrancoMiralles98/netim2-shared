import { BonusInItem } from '../../bonus/bonus-in-item.type';
import { UpgradeLv } from '../config/general-implicit.type';
import { UtilityBaseType } from './utility-base.type';
/**
 * @description - Hace referencia a los objetos que son de utilidad en este caso las Piedras
 * que contienen bonus que se pueden añadir al equipo, es un hibrido entre un objeto de utilidad
 * y un objeto Equipo, ya que comparte algunas caracteristicas de cada uno
 */
export interface PiedraType extends UtilityBaseType {
    implicitBonus: BonusInItem[];
    upgradeLv: UpgradeLv;
    upgradeMax: number;
    type_utility: 'piedra';
    corruptExplicitBonus: BonusInItem[];
}
/**
 * Representa una piedra ya incrustada en un ítem.
 *
 * Contiene tanto la información visual como el bonus que aporta.
 *
 * @property {idItem} - Identificador de la piedra
 * @property {name} - Nombre completo de la piedra (para mostrar en UI)
 * @property {upgradeLv} - Nivel de mejora de la piedra
 */
export interface PiedrasInItem {
    idItem: number;
    name: string;
    upgradeLv: number;
    implicitBonus: BonusInItem[];
    corruptExplicitBonus: BonusInItem[];
}
