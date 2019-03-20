import * as React from 'react'
import classnames from 'classnames'

import STYLES from './item-slot.module.scss'
import { ItemQuality } from '../data/item-qualities';
import { Item } from '../data/items';

interface ItemSlotProps {
  itemData?: Item
}

export const ItemSlot = ({ itemData }: ItemSlotProps) => {

  const itemDataDisplay = itemData
    ? (
      <div className={STYLES.itemData}>
        <div className={STYLES.name}>{itemData.name}</div>
      </div>
    )
    : null

  const quality = itemData && itemData.quality;

  return (
    <div className={classnames(
      STYLES.itemSlot,
      {
        [STYLES.equipped]: true,
        [STYLES[`quality_${quality}`]]: !!quality && STYLES[`quality_${quality}`],
      })}>
      {itemDataDisplay}
    </div>
  )

}