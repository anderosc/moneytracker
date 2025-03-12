import { useState } from "react";
import styles from "./SignUp.module.css"; 

function SignUp() {


    return (
        <div className={styles.signupContainer}>
            <h2 className={styles.title}>Create an Account</h2>

            <input
                type="text"
                placeholder="Username"

                className={styles.input}
            />

            <input
                type="email"
                placeholder="Email"

                className={styles.input}
            />

            <input
                type="password"
                placeholder="Password"

                className={styles.input}
            />
            <input
                placeholder="City"

                className={styles.input}
            />


            <button className={styles.button}>
                Sign Up (Fake)
            </button>
        </div>
    );
}

export default SignUp;
