import { ItemQuality, ItemQualities, ITEM_QUALITIES } from "./item-qualities";
import { Weapon } from "./items";
import { randomFrom } from "../utils";
import { ItemTypes } from "./item-types";

export const WEAPON_NAMES = [
  'ACR',
  'AK-M',
  'Black Market AK-M',
  'Military AK-M',
  'AUG A3-CQC',
  'CTAR-21',
  'FAL',
  'FAL SA-58',
  'Tactical SA-58',
  'FAMAS 2010',
  'G36C',
  'Military G36',
  'Police M4',
  'Police M4 Replica',
  'Mk16',
  'Tactical Mk16',
  'Custom P416 G3',
  'Military P416'
]

interface RandomWeaponOptions {
  quality?: ItemQuality
}

export const randomWeapon = ({ quality }: RandomWeaponOptions = {}) => {
  const weapon: Weapon = {
    itemType: ItemTypes.WEAPON,
    name: randomFrom(WEAPON_NAMES),
    quality: quality || randomFrom(ITEM_QUALITIES),
  }
  return weapon
}

export const randomWeaponName = () => randomFrom(WEAPON_NAMES)