
import styles from "./contact.module.css"; // Lisa oma CSS stiilid

function Contact() {


  const sendit = () => {

  };

  return (
    <div className={styles.contactPage}>
      <h2>Contact Us</h2> <br />

      <div className={styles.inputGroup}>
        <label >Name:</label> <br />
        <input type="text"/>
      </div>

      <div className={styles.inputGroup}>
        <label >Email:</label> <br />
        <input />
      </div>

      <div className={styles.inputGroup}>
        <label >Message:</label> <br />
        <input />
      </div>

      <button onClick={() => sendit}>Send</button>
    </div>
  );
}

export default Contact;
