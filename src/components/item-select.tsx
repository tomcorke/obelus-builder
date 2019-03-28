import React from 'react'

import STYLES from './item-select.module.scss'
import { ITEM_QUALITIES } from '../data/item-qualities';
import { Armor, Item } from '../data/items';
import { randomArmorName } from '../data/armor';
import { ItemTypes } from '../data/item-types';
import { randomBrand } from '../data/brands';
import { ItemSlot } from './item-slot';

interface ItemSelectProps {
  items?: Item[],
  onSelectItem: (item: Item) => any
  onCancel: () => any
}

const defaultItems = ITEM_QUALITIES.map(quality => {
  const armor : Armor = {
    itemType: ItemTypes.ARMOR,
    name: randomArmorName(),
    quality,
    brand: randomBrand(),
  }
  return armor;
});

export const ItemSelect = ({ items = defaultItems, onSelectItem, onCancel }: ItemSelectProps) => {

  const itemSlotClick = (e: React.MouseEvent, item: Item) => {
    e.stopPropagation()
    // onSelectItem(item)
  }

  return (
    <div className={STYLES.itemSelect} onClick={onCancel}>
      <div className={STYLES.contents}>
        {items.map(item => (
          <div className={STYLES.itemSelectSlot} onClick={(e) => itemSlotClick(e, item)} onDoubleClick={() => onSelectItem(item)}>
            <ItemSlot itemData={item} />
          </div>
        ))}
      </div>
    </div>
  )
}