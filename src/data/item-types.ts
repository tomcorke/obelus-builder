const ITEM_TYPE_WEAPON = 'weapon'
const ITEM_TYPE_ARMOR = 'armor'

export type ItemType =
  | typeof ITEM_TYPE_WEAPON
  | typeof ITEM_TYPE_ARMOR


export const ITEM_TYPES: ItemType[] = [
  ITEM_TYPE_WEAPON,
  ITEM_TYPE_ARMOR,
]

export const ItemTypes = {
  WEAPON: ITEM_TYPE_WEAPON as typeof ITEM_TYPE_WEAPON,
  ARMOR: ITEM_TYPE_ARMOR as typeof ITEM_TYPE_ARMOR,
}
