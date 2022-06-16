import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

import img from '../../assets/imgTest.jpeg'

import styles from './Products.module.scss'

const CardItem = ({ title, descr, price }) => {
  return (
    <div className={styles.card}>
      <img alt="example" src={img} />
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
