import React from 'react'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'

import CardItem from './CardItem'
import styles from './Products.module.scss'
const getShowCase = (state) => state.showcase

const Products = () => {
  const { products } = useSelector(getShowCase)
  const contentCard = products?.map((item) => (
    <CardItem key={item.id} {...item} />
  ))
  return (
    <>
      <Divider orientation="center" className="divider">
        Все Товары
      </Divider>
      <div className={styles.wrapper_cards}>{contentCard}</div>
    </>
  )
}
export default Products
