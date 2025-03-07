import React from 'react'
import styles from "./landing.module.css"

function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.first}>
          <div className={styles.firstcontainer}>
            <div className={styles.firstleft}> 
              <div>Track money</div>
              <div>Save money</div>
              <div>Be happy</div>
              <div className={styles.firstleftinside}>Your way to financial freedom starts now</div>
            </div>
            <div className={styles.firstright}>
              <img className={styles.person} src="/home/money-tracking.jpg" alt="" />
            </div>
          </div>
          <div className={styles.firstdown}>
            <div>blabla bla</div>
          </div>
        </div>
        <div className={styles.second}> </div>
        <div className={styles.third}> </div>
    </div>
  )
}

export default Home