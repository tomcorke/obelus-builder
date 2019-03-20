import { ItemType, ItemTypes } from "./item-types";
import { WeaponType, WeaponTypes } from "./weapon-types";
import { ItemQuality } from "./item-qualities";

interface CommonItemData {
  name: string
  quality: ItemQuality
}

export interface Weapon extends CommonItemData {
  itemType: typeof ItemTypes.WEAPON
  /*
  weaponType: WeaponType
  damage: number
  rpm: number
  magazine: number
  */
}

export interface Armor extends CommonItemData {
  itemType: typeof ItemTypes.ARMOR
}

export type Item = Weapon | Armor

const testItem: Item = {
  itemType: 'weapon',
  name: 'test-weapon',
  quality: 'worn',
}