import styles from "./navbar.module.css"
import {Link, useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate()
    
    
  return (
    <div className={styles.top}>
        <div className={styles.first}> 
          <img src="/dashboard/salary.png" className={styles.img}  alt="" />
          MyCash </div>
        <div className={styles.second}>
            <div onClick={() => navigate("/")} n className={styles.button}> Home</div>
            <div onClick={() => navigate("/features")} className={styles.button}> Features</div>
            <div onClick={() => navigate("/faq")} className={styles.button}> FAQ </div>
            <div onClick={() => navigate("/contact")} className={styles.button}> Contact </div>
        </div>
        <div className={styles.third}> 
            <button onClick={() => navigate("/login")} className={styles.login}>Log In</button>
            <button onClick={() => navigate("/signup")} className={styles.signup}>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar