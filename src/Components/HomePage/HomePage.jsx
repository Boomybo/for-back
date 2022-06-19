import React from 'react'
import { Dropdown, Menu, Space } from 'antd'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import HomePageCards from './HomePageCards'
import styles from './HomePage.module.scss'

const optimizer = (state) => state.showcase

const HomePage = () => {
  const { products, shopsArr } = useSelector(optimizer)

  return (
    <main className={styles['main-container']}>
      <form
        className={styles['home-page-input-form']}
        onSubmit={(e) => e.preventDefault()}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['mail']}
          className={classNames(styles.dropdown, styles['dropdown-imp'])}
        >
          <Menu.SubMenu key="SubMenu" title="Категории">
            <Menu.ItemGroup title="Товары">
              {products.map((product) => (
                <Menu.Item key={product.id * 10}>{product.title}</Menu.Item>
              ))}
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Магазины ">
              {shopsArr.map((shop) => (
                <Menu.Item key={shop.id}>{shop.title}</Menu.Item>
              ))}
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
        <label>
          <input className={styles['home-page-input']}></input>
        </label>
        <button type="submit" className={styles['home-page-submit']}>
          Найти
        </button>
      </form>
      <h2>Подборка популярных товаров</h2>
      <div className={styles['product-cards']}>
        <HomePageCards props="productCards" />
      </div>
      <h2>Подборка популярных магазинов</h2>
      <div className={styles['product-cards']}>
        <HomePageCards />
      </div>
    </main>
  )
}

export default HomePage
