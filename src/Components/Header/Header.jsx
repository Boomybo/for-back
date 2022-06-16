import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.menu} mode="horizontal">
          <div>
            <div className={styles.logo}>
              <Link to="/">
                <svg viewBox="0 0 322 112" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(14 14)">
                    <circle
                      cx="60.65"
                      cy="60.55"
                      r="22.45"
                      fill="#97CF26"
                    ></circle>
                    <circle
                      cx="18.45"
                      cy="60.55"
                      r="10.45"
                      fill="#A169F7"
                    ></circle>
                    <circle
                      cx="60.65"
                      cy="18.35"
                      r="14.45"
                      fill="#FF6163"
                    ></circle>
                    <circle
                      cx="18.45"
                      cy="18.35"
                      r="18.45"
                      fill="#0AF"
                    ></circle>
                    <path d="M141.466 70.878h11.654L131.537 12.11h-8.453L101.497 70.88h11.655l4.122-11.218h20.07l4.122 11.218L120.52 50.818l6.79-18.48 6.786 18.48H120.52z"></path>
                    <path d="M182.01 30.756L171.285 59.95l-10.72-29.194h-10.95l14.742 40.122h13.858l14.74-40.122h-10.947"></path>
                    <g>
                      <path d="M197.538 30.756h10.95v40.122h-10.95V30.756z"></path>
                      <circle cx="203.05" cy="19.15" r="7.05"></circle>
                    </g>
                    <path d="M247.15 39.598v-8.842h-13.117V19.688H223.09v11.068h-8.66v8.842h8.66V56.86c0 8.904 4.452 14.847 15.82 14.847 4.39 0 8.24-1.612 8.24-1.612l-1.33-8.663s-2.155.644-4.805.644c-3.248 0-6.982-1.4-6.982-5.89V39.597h13.117"></path>
                    <path d="M272.26 61.707c-6.105 0-11.052-4.84-11.052-10.81 0-5.965 4.947-10.806 11.05-10.806 6.107 0 11.052 4.842 11.052 10.807 0 5.97-4.945 10.81-11.05 10.81m0-31.976c-11.868 0-21.493 9.415-21.493 21.02 0 11.61 9.625 21.02 21.492 21.02 11.862 0 21.487-9.41 21.487-21.02 0-11.605-9.625-21.02-21.488-21.02"></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.menu_item}>
              <Link to="/shops">Магазины</Link>
            </div>
            <div className={styles.menu_item}>
              <Link to="/products">Товары</Link>
            </div>
            <div className={styles.menu_item}>
              <Link to="/favorites">Избранное</Link>
            </div>
            <div className={styles.menu_item}>
              <Link to="/basket">
                <ShoppingCartOutlined style={{ 'marginRight': '6px' }} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header
