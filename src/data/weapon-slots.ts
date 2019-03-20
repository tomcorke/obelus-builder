import { WeaponType, PRIMARY_WEAPON_TYPES, SECONDARY_WEAPON_TYPES } from './weapon-types'

const WEAPON_SLOT_PRIMARY_1 = 'primary1'
const WEAPON_SLOT_PRIMARY_2 = 'primary2'
const WEAPON_SLOT_SIDEARM = 'sidearm'

export type WeaponSlot =
  | typeof WEAPON_SLOT_PRIMARY_1
  | typeof WEAPON_SLOT_PRIMARY_2
  | typeof WEAPON_SLOT_SIDEARM

export const WEAPON_SLOTS: WeaponSlot[] = [
  WEAPON_SLOT_PRIMARY_1,
  WEAPON_SLOT_PRIMARY_2,
  WEAPON_SLOT_SIDEARM,
]

export const WeaponSlots = {
  PRIMARY_1: WEAPON_SLOT_PRIMARY_1 as typeof WEAPON_SLOT_PRIMARY_1,
  PRIMARY_2: WEAPON_SLOT_PRIMARY_2 as typeof WEAPON_SLOT_PRIMARY_2,
  SIDEARM: WEAPON_SLOT_SIDEARM as typeof WEAPON_SLOT_SIDEARM,
}

export const weaponSlotTypes = (weaponSlot: WeaponSlot): WeaponType[] => {
  return weaponSlot === WEAPON_SLOT_SIDEARM ? SECONDARY_WEAPON_TYPES : PRIMARY_WEAPON_TYPES
}