import { useState } from "react";
import styles from "./SignUp.module.css"; 

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";
        const hasUpperCase = [...password].some((char) => char === char.toUpperCase() && isNaN(char));
        const hasLowerCase = [...password].some((char) => char === char.toLowerCase() && isNaN(char));
        const hasSpecialChar = [...password].some((char) => specialChars.includes(char));

        if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
            setError("Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, and 1 special character.");
        } else {
            setError("");
        }
    };

    return (
        <div className={styles.signupContainer}>
            <h2 className={styles.title}>Create an Account</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                }}
                className={styles.input}
            />

            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.button}>
                Sign Up (Fake)
            </button>
        </div>
    );
}

export default SignUp;
