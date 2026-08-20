export type BonusGeneralRefKeys =
  | 'ap'
  | 'ad'
  | 'def'
  | 'hp'
  | 'mana'
  | 'regen_hp'
  | 'regen_mana'
  | 'vh'
  | 'va'
  | 'vm'

export type AttributesRefKeys = 'VIT' | 'INT' | 'STR' | 'DEX'


export type BonusDañoRefKeys =
  | 'animales'
  | 'bonus_veneno'
  | 'bonus_fuego'
  | 'bonus_estado'
  | 'bonus_sangrado'
  | 'bonus_electrico'
  | 'critico'
  | 'chaman'
  | 'duracion_estado'
  | 'daño_critico'
  | 'guerrero'
  | 'doble_golpe'
  | 'demonios'
  | 'electrico'
  | 'habilidad'
  | 'incendio'
  | 'misticos'
  | 'medio_humanos'
  | 'monstruos'
  | 'media'
  | 'ninja'
  | 'orcos'
  | 'penetracion_habilidad'
  | 'penetracion'
  | 'sangrado'
  | 'sura'
  | 'veneno'

export type BonusDefensaRefKeys =
  | 'bloquear_ataques'
  | 'corta_curacion'
  | 'damage_taken'
  | 'def_campana'
  | 'def_chaman'
  | 'def_daga'
  | 'def_desmayo'
  | 'def_dos_manos'
  | 'def_electrico'
  | 'def_espada'
  | 'def_fan'
  | 'def_flecha'
  | 'def_guerrero'
  | 'def_hab'
  | 'def_incendio'
  | 'def_magia'
  | 'def_media'
  | 'def_ninja'
  | 'def_retardo'
  | 'def_sangrado'
  | 'def_sura'
  | 'def_veneno'
  | 'esquivar_ataques'
  | 'mana_cost'
  | 'porcentage_mana_cost'
  | 'reflectar'
  | 'robo_vida'
  | 'vampirismo_hechizo';

export type BonusCCRefKeys = 'retardo' | 'desmayo';

export type BonusMiscsRefKeys =
  | 'bonus_yang'
  | 'bonus_exp'
  | 'chances_yang'
  | 'chances_objetos'
  | 'chances_raros'
  | 'chances_exp'
  | 'time_reduction';

export type BonusRefKeys =
  | BonusGeneralRefKeys
  | BonusDañoRefKeys
  | BonusDefensaRefKeys
  | BonusCCRefKeys
  | BonusMiscsRefKeys
  | AttributesRefKeys

export type Tier1RefBonusName = Extract<BonusRefKeys,
  | 'orcos'
  | 'animales'
  | 'misticos'
  | 'demonios'
  | 'def_retardo'
  | 'reflectar'
  | 'bloquear_ataques'
  | 'def_incendio'
  | 'def_veneno'>

export type Tier2RefBonusName = Extract<BonusRefKeys,
  | 'def_espada'
  | 'def_dos_manos'
  | 'def_daga'
  | 'def_fan'
  | 'def_campana'
  | 'def_flecha'
  | 'def_magia'
  | 'critico'
  | 'retardo'
  | 'desmayo'
  | 'penetracion'
  | 'chances_objetos'
  | 'chances_raros'
  | 'chances_yang'
  | 'chances_exp'
  | 'def_desmayo'>

export type Tier3RefBonusName = Extract<BonusRefKeys,
  | 'va'
  | 'hp'
  | 'ad'
  | 'veneno'
  | 'STR'
  | 'INT'
  | 'DEX'
  | 'VIT'
  | 'incendio'
  | 'sangrado'
  | 'monstruos'
  | 'medio_humanos'>

export type Tier4RefBonusName = Extract<BonusRefKeys,
  | 'media'
  | 'regen_hp'
  | 'habilidad'
  | 'robo_vida'
  | 'vampirismo_hechizo'
  | 'def_hab'
  | 'def_media'>

export type Bonus6_7RefBonusName = Extract<BonusRefKeys,
  | 'ad'
  | 'ap'
  | 'def_veneno'
  | 'def_incendio'
  | 'hp'
  | 'va'
  | 'monstruos'
  | 'def_hab'
  | 'def_media'
  | 'hab'
  | 'media'
  | 'STR'
  | 'INT'
  | 'DEX'
  | 'VIT'
  | 'robo_vida'
  | 'bloquear_ataques'
  | 'vm'
  | 'regen_hp'>