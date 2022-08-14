import styles from "./contact.module.css";
import { useState, useEffect } from "react";
import Notification from "../ui/notification";

async function sendContactFormData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  // 'pending', 'success', 'error'
  const [reqStatus, setReqStatus] = useState();

  useEffect(() => {
    if (reqStatus !== "pending") {
      const timer = setTimeout(() => {
        setReqStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [reqStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setReqStatus("pending");

    try {
      await sendContactFormData(values);
      setReqStatus("success");
      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setReqStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!!!",
      message: "Message sent successfully",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: "Something went wrong",
    };
  }

  return (
    <section className={styles.contact}>
      <h1>Get in Touch</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              onChange={handleChange}
              value={values.email}
              type="email"
              name="email"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="Name">Your Name</label>
            <input
              onChange={handleChange}
              value={values.name}
              type="text"
              name="name"
              required
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={handleChange}
            value={values.message}
            name="message"
            required
            rows="5"
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
