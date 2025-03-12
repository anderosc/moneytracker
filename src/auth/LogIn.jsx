import { useContext, useState } from "react";
import styles from "./login.module.css"; 
import { AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const {setLoggedIn} = useContext(AuthContext);
    const login = () => {
        setLoggedIn(true)
        navigate("/overview")
      }



    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login to Your Account</h2>

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
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />

            <button onClick={() => login()} className={styles.button} >
                Log In 
            </button>

        </div>
    );
}

export default LogIn;
