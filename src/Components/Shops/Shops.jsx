import React from 'react'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import styles from './Shops.module.scss'
import img from './img_shop.png'
const getShowCase = (state) => state.showcase

const Shops = () => {
  const { shopsArr } = useSelector(getShowCase)
  return (
    <>
      <div className="container">
        <Divider orientation="center" className="divider">
          Все Магазины
        </Divider>
        <div className={styles.wrapper_shops}>
          {shopsArr?.map((item) => (
            <div className={styles.shop} key={item.id}>
              <img src={img} alt="img_shop" />
              <div className={styles.title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Shops
