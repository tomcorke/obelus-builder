import React, { Component } from 'react';

import STYLES from './app.module.scss';
import { ItemSlot } from './item-slot';
import { ITEM_QUALITIES } from '../data/item-qualities';
import { WEAPON_NAMES, randomWeapon } from '../data/weapons';
import { Item, Weapon } from '../data/items';

export const App = () => {

  return (
    <div className={STYLES.app}>
      <header className={STYLES.header}>
      </header>
      <main className={STYLES.main}>

        {ITEM_QUALITIES.map(quality => {
          const item = randomWeapon({ quality })
          return <ItemSlot itemData={item} />
         })}

      </main>
    </div>
  )

}
