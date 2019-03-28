import React from 'react'

import STYLES from './equipped-items.module.scss'
import { Armor, Item } from '../data/items';
import { randomArmorName } from '../data/armor';
import { randomQuality } from '../data/item-qualities';
import { ItemTypes } from '../data/item-types';
import { randomBrand } from '../data/brands';
import { ItemSlot } from './item-slot';

const randomItems = Array(8).fill(true).map(() => {
  const armor : Armor = {
    itemType: ItemTypes.ARMOR,
    name: randomArmorName(),
    quality: randomQuality(),
    brand: randomBrand(),
  }
  return armor
});

interface EquippedItemsProps {
  onClickItem: (slotIndex: number, item?: Item) => any
}

export const EquippedItems = ({ onClickItem }: EquippedItemsProps) => {

  return (
    <div className={STYLES.equippedItems}>
      {randomItems.map((item, slotIndex) => (
        <div onClick={() => onClickItem(slotIndex, item)}>
          <ItemSlot itemData={item} equipped={true} />
        </div>
      ))}
    </div>
  )

}