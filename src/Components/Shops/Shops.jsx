import React from 'react'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'

import styles from './Shops.module.scss'
import img1 from './img_shop.png'
const Shops = () => {
  const { shopsArr } = useSelector((state) => state.showcase)
  return (
    <>
      <div className="container">
        <Divider orientation="center" className="divider">
          Все Магазины
        </Divider>
        <div className={styles.wrapper_shops}>
          {shopsArr?.map((item) => (
            <div className={styles.shop} key={item.id}>
              <img src={img1} alt="img_shop" />
              <div className={styles.title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Shops
