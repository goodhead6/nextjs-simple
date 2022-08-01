import React from 'react'
import styles from '../styles/Home.module.css'
import Image
 from 'next/image'
function TopNav() {
  return (
    <div className={styles.topNavContainer}>
        <div className={styles.topNav}>Email</div>
        <div className={styles.topNav}>Image</div>
        <div className={`${styles.topNav} ${styles.topNavIcon}`} >
            <Image src="/menu.svg" alt="Menu" width={24} height={24} />
            
        </div>
        <div className={`${styles.conten}`}>
            <img className={styles.topNavProfile} src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="Vercel Logo" width={32} height={32} />
            
        </div>
    </div>
  )
}

export default TopNav