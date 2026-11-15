import { MobType } from "./mob.index";

/** Información de catálogo para listar mobs sin estadísticas ni datos de combate. */
export type MobSummary = Pick<MobType,
    'idMob' | 'dificultad' | 'ubication' | 'nombre' | 'lv' | 'enemie_type'>;
