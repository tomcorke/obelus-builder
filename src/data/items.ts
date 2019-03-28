import { ItemType, ItemTypes } from "./item-types";
import { WeaponType, WeaponTypes } from "./weapon-types";
import { ItemQuality, ItemQualities } from "./item-qualities";
import { Brands, Brand } from "./brands";

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
  /*
  */
  brand: Brand
}

export type Item = Weapon | Armor

const testWeapon: Item = {
  itemType: ItemTypes.WEAPON,
  name: 'test-weapon',
  quality: ItemQualities.STANDARD,
}

const testArmor: Item = {
  itemType: ItemTypes.ARMOR,
  name: 'test-armor',
  quality: ItemQualities.HIGHEND,
  brand: Brands.FENRIS
}