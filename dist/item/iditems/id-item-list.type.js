"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdItem = void 0;
const armadura_chaman_id_item_enum_1 = require("./equipo/armaduras/armadura-chaman-id-item.enum");
const armadura_guerrero_id_item_enum_1 = require("./equipo/armaduras/armadura-guerrero-id-item.enum");
const armadura_ninja_id_item_enum_1 = require("./equipo/armaduras/armadura-ninja-id-item.enum");
const armadura_sura_id_item_enum_1 = require("./equipo/armaduras/armadura-sura-id-item.enum");
const arco_id_items_enum_1 = require("./equipo/armas/arco-id-items.enum");
const campana_id_items_enum_1 = require("./equipo/armas/campana-id-items.enum");
const daga_id_items_enum_1 = require("./equipo/armas/daga-id-items.enum");
const dos_manos_id_items_enum_1 = require("./equipo/armas/dos-manos-id-items.enum");
const espada_id_items_enum_1 = require("./equipo/armas/espada-id-items.enum");
const fan_id_items_enum_1 = require("./equipo/armas/fan-id-items.enum");
const botas_id_item_enum_1 = require("./equipo/botas-id-item.enum");
const brazalete_id_item_enum_1 = require("./equipo/brazalete-id-item.enum");
const casco_chaman_id_item_enum_1 = require("./equipo/casco/casco-chaman-id-item.enum");
const casco_guerrero_id_item_enum_1 = require("./equipo/casco/casco-guerrero-id-item.enum");
const casco_ninja_id_item_enum_1 = require("./equipo/casco/casco-ninja-id-item.enum");
const casco_sura_id_item_enum_1 = require("./equipo/casco/casco-sura-id-item.enum");
const collar_id_item_enum_1 = require("./equipo/collar-id-item.enum");
const escudo_id_item_enum_1 = require("./equipo/escudo-id-item.enum");
const legendario_id_item_enum_1 = require("./equipo/legendario-id-item.enum");
const pendiente_id_item_enum_1 = require("./equipo/pendiente-id-item.enum");
const buffo_id_item_enum_1 = require("./miscs/buffo-id-item.enum");
const cofres_id_item_enum_1 = require("./miscs/cofres-id-item.enum");
const libros_id_item_enum_1 = require("./miscs/libros-id-item.enum");
const materiales_id_item_enum_1 = require("./miscs/materiales-id-item.enum");
const montura_id_item_enum_1 = require("./miscs/montura-id-item.enum");
const piedra_id_item_enum_1 = require("./miscs/piedra-id-item.enum");
const pocion_id_item_enum_1 = require("./miscs/pocion-id-item.enum");
const special_miscs_enum_1 = require("./miscs/special-miscs.enum");
exports.IdItem = {
    ...armadura_chaman_id_item_enum_1.ArmaduraChamanIdItem,
    ...armadura_guerrero_id_item_enum_1.ArmaduraGuerreroIdItem,
    ...armadura_ninja_id_item_enum_1.ArmaduraNinjaIdItem,
    ...armadura_sura_id_item_enum_1.ArmaduraSuraIdItem,
    ...casco_chaman_id_item_enum_1.CascoChamanIdItem,
    ...casco_guerrero_id_item_enum_1.CascoGuerreroIdITem,
    ...casco_ninja_id_item_enum_1.CascoNinjaIdItem,
    ...casco_sura_id_item_enum_1.CascoSuraIdItem,
    ...arco_id_items_enum_1.ArcoIdItem,
    ...campana_id_items_enum_1.CampanaIdItems,
    ...daga_id_items_enum_1.DagaIdItems,
    ...dos_manos_id_items_enum_1.DosManosIdItem,
    ...espada_id_items_enum_1.EspadaIdItems,
    ...fan_id_items_enum_1.FanIdItem,
    ...legendario_id_item_enum_1.LegendarioIdITem,
    ...casco_chaman_id_item_enum_1.CascoChamanIdItem,
    ...casco_guerrero_id_item_enum_1.CascoGuerreroIdITem,
    ...casco_ninja_id_item_enum_1.CascoNinjaIdItem,
    ...casco_sura_id_item_enum_1.CascoSuraIdItem,
    ...botas_id_item_enum_1.BotasIdItem,
    ...brazalete_id_item_enum_1.BrazaleteIdItem,
    ...collar_id_item_enum_1.CollarIdItem,
    ...escudo_id_item_enum_1.EscudoIdItem,
    ...pendiente_id_item_enum_1.PendienteIdItem,
    ...buffo_id_item_enum_1.BuffoIdItem,
    ...cofres_id_item_enum_1.CofresIdItem,
    ...libros_id_item_enum_1.LibroIdItem,
    ...materiales_id_item_enum_1.MaterialIdITem,
    ...montura_id_item_enum_1.MonturaIdItem,
    ...piedra_id_item_enum_1.PiedraIdItem,
    ...pocion_id_item_enum_1.PocionIdItem,
    ...special_miscs_enum_1.SpecialMiscIdITem,
};
