import React from 'react'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'

import CardItem from './CardItem'
import styles from './Products.module.scss'

const Products = () => {
  const { products } = useSelector((state) => state.showcase)
  console.log(products)
  const contentCard = products?.map((item) => (
    <CardItem key={item.id} {...item} />
  ))
  return (
    <>
      <div className="container">
        <Divider orientation="center" className="divider">
          Все Товары
        </Divider>
        <div className={styles.wrapper_cards}>{contentCard}</div>
      </div>
    </>
  )
}
export default Products
