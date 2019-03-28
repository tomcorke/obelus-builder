import React, { useState } from 'react';

import STYLES from './app.module.scss';
import { Item } from '../data/items';
import { ItemSelect } from './item-select';
import { EquippedItems } from './equipped-items';

export const App = () => {

  const [showItemSelect, setShowItemSelect] = useState(true);

  return (
    <div className={STYLES.app}>
      <header className={STYLES.header}>
      </header>
      <main className={STYLES.main}>

        <EquippedItems onClickItem={() => setShowItemSelect(true)} />

        {showItemSelect
          ? <ItemSelect
            onSelectItem={(item: Item) => { setShowItemSelect(false); console.log(item) }}
            onCancel={() => setShowItemSelect(false)}
            />
          : null}

      </main>
    </div>
  )

}
