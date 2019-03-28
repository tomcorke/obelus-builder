import * as React from 'react'
import classnames from 'classnames'

import STYLES from './item-slot.module.scss'
import { ItemQuality } from '../data/item-qualities';
import { Item, Weapon, Armor } from '../data/items';
import { ItemTypes } from '../data/item-types';
import { BRAND_NAMES } from '../data/brands';

interface ItemSlotProps {
  itemData?: Item
  equipped?: boolean
}

const weaponDisplay = (weapon: Weapon) => (<div />)

const armorDisplay = (armor: Armor) => (
  <>
    <div className={STYLES.details}>
      <div className={STYLES.name}>{armor.name}</div>
      <div className={STYLES.brand}>{BRAND_NAMES[armor.brand]}</div>
    </div>
    <div className={STYLES.level}>
      <div className={STYLES.scoreLabel}>Score</div>
      <div className={STYLES.scoreValue}>450</div>
    </div>
    <div className={STYLES.stats}>
      <div className={STYLES.armorLabel}>ARM</div>
      <div className={STYLES.armorValue}>31.6k</div>
    </div>
    <div className={STYLES.talents} />
  </>
)

export const ItemSlot = ({ itemData, equipped }: ItemSlotProps) => {
  if (!itemData) return null

  let itemDisplay = null
  if (itemData.itemType === ItemTypes.WEAPON)
    itemDisplay = weaponDisplay(itemData)
  if (itemData.itemType === ItemTypes.ARMOR)
    itemDisplay = armorDisplay(itemData)

  const itemDataDisplay = (
    <div className={STYLES.itemData}>
      <div className={STYLES.qualityStripe} />
      {itemDisplay}
    </div>
  )

  const quality = itemData && itemData.quality;

  return (
    <div className={classnames(
      STYLES.itemSlot,
      {
        [STYLES.equipped]: !!equipped,
        [STYLES[`quality_${quality}`]]: !!quality,
      })}>
      {itemDataDisplay}
    </div>
  )

}