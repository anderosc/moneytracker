import React from 'react'
import styles from "./landing.module.css"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
        <div className={styles.first}>
          <div className={styles.firstcontainer}>
            <div className={styles.firstleft}> 
              <div>Track money</div>
              <div>Save money</div>
              <div>Be happy</div>
              <div className={styles.firstleftinside}>
                <div>Your way to financial freedom starts now</div>
                <button onClick={() => navigate("/signup")} className={styles.firstleftinsidebutton}>Sign Up Now</button>
              </div>
            </div>
            <div className={styles.firstright}>
              <img className={styles.person} src="/home/money-tracking.jpg" alt="" />
            </div>
          </div>
          <div className={styles.firstdown}>
            <div></div>
          </div>
        </div>

        <div className={styles.second}>
          <div className={styles.wrapper}>
            <div className={`${styles.item} ${styles.item1}`}>
              <div className={styles.name}>Emma R.</div>
              <div className={styles.userexperience}>Absolutely love it! Exceeded my expectations in every way. The quality is top-notch, and I keep recommending it to all my friends!</div>
            </div>
            <div className={`${styles.item} ${styles.item2}`}>
              <div className={styles.name}>Liam W.</div>
              <div className={styles.userexperience}>Great quality and fast delivery. I was skeptical at first, but this turned out to be one of the best purchases I’ve made. Will definitely order again!</div>
            </div>
            <div className={`${styles.item} ${styles.item3}`}>
              <div className={styles.name}>Sophia M.</div>
              <div className={styles.userexperience}>Amazing experience from start to finish! The product is exactly as described, and the customer service was incredibly helpful when I had a question.</div>
            </div>
            <div className={`${styles.item} ${styles.item4}`}>
              <div className={styles.name}>Noah B.</div>
              <div className={styles.userexperience}>Superb customer service and excellent product. I’ve used it daily since I got it, and it has truly made my life easier. Worth every cent!</div>
            </div>
            <div className={`${styles.item} ${styles.item5}`}>
              <div className={styles.name}>Jack P.</div>
              <div className={styles.userexperience}>This was the best purchase of my life! The attention to detail is incredible, and it’s clear that a lot of care went into making this. Highly recommend to anyone considering it.</div>
            </div>
            <div className={`${styles.item} ${styles.item6}`}>
              <div className={styles.name}>Olivia C.</div>
              <div className={styles.userexperience}>So happy with my order. The packaging was beautiful, the product works flawlessly, and I received so many compliments on it. Definitely getting more in the future!</div>
            </div>
            <div className={`${styles.item} ${styles.item7}`}>
              <div className={styles.name}>William D.</div>
              <div className={styles.userexperience}>A five-star experience all the way! I was blown away by how quickly my order arrived and how well it performed. I rarely write reviews, but this one deserves it!</div>
            </div>
            <div className={`${styles.item} ${styles.item8}`}>
              <div className={styles.name}>Ava S.</div>
              <div className={styles.userexperience}>The best decision I’ve ever made. I was hesitant at first, but after using it for a few weeks, I can confidently say it has exceeded my expectations. So grateful I found this!</div>
            </div>
          </div>
        </div>
        <div className={styles.third}> </div>
    </div>
  )
}

export default Home