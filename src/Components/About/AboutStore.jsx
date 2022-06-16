import React from 'react'
import { CheckOutlined } from '@ant-design/icons'

import styles from './AboutStore.module.scss'
const AboutStore = () => {
  const capability = [
    'Широкий ассортимент',
    'Низкие цены',
    'Услуги сервиса',
    'Оперативная техподдержка',
    'Качество сервиса',
    'Квалифицированный и вежливый персонал'
  ]
  return (
    <div className={styles.about_container}>
      <h2 className={styles.title}>О магазине</h2>
      <div className={styles.descr}>
        Мы рады приветствовать вас на сайте нашей компании. Наша компания
        специализируется на продажах товаров. За это время у нас сложились
        партнерские отношения с ведущими производителями, позволяющие предлагать
        высококачественную продукцию по конкурентоспособным ценам. Мы можем
        гордиться тем, что предлагаем один из самых широких ассортиментов
        различных товаров
      </div>
      <div className={styles.subtitle}>Наши возможности</div>
      <div className={styles.capability_wrapper}>
        {capability?.map((item, i) => (
          <div className={styles.capability_item} key={i}>
            <CheckOutlined className={styles.check} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
export default AboutStore
