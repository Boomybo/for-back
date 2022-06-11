import React from 'react'
import { useSelector } from 'react-redux'

import styles from './HomePage.module.scss'

const optimizer = (state) => state.showcase

const HomePageCards = ({ props }) => {
  const { products, shopsArr } = useSelector((state) => optimizer(state))
  const propsArray = props ? products : shopsArr
  const imgSrc = props
    ? 'https://89.img.avito.st/image/1/1.QBjw4ba27PHmQVbx_JhvbSNC7PtO4u1LRELu.9RjV_laMFNM_G6y2KkxCh6SP4T8yHEDYGlYXKl0Fhzs'
    : 'https://s3-symbol-logo.tradingview.com/m-video--600.png'

  return propsArray.map((product, index) => {
    if (index < 4) {
      return (
        <div className={styles['product-card']} key={index}>
          <img
            src={imgSrc}
            alt="example"
            className={styles['product-img']}
          ></img>
          <h3 className={styles['product-title']}>{product.title}</h3>
          <p className={styles['product-price']}>{product.price}</p>
          <p className={styles['product-descr']}>{product.descr}</p>
          <button className={styles['product-btn']} type="button">
            {props ? 'В коризну' : 'Перейти в магазин'}
          </button>
        </div>
      )
    }
  })
}

export default HomePageCards
