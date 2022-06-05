import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

import styles from './Products.module.scss'

const CardItem = ({ title, descr, price }) => {
  return (
    <div className={styles.card}>
      <img
        alt="example"
        src="https://89.img.avito.st/image/1/1.QBjw4ba27PHmQVbx_JhvbSNC7PtO4u1LRELu.9RjV_laMFNM_G6y2KkxCh6SP4T8yHEDYGlYXKl0Fhzs"
      />
      <div className={styles.card_body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descr}>{descr}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <PlusOutlined className="plus" />
    </div>
  )
}
export default CardItem
