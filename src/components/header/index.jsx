import React from 'react'

import styles from './Header.module.css'

import ignitelogo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitelogo} alt="Ignite Logo" />
    </header>
  )
}
