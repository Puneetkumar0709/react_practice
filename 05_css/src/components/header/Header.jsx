import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (//{styles.header} i.e styles jo imort kia ha usme jo header ki property h isko assign kr do
    <div className={styles.header}> 
      <h4>hello form HEADER </h4>
      <button>CLICK ME</button>
    </div>
  )
}

export default Header