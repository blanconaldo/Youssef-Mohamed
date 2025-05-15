import { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Contact() {
  const formRef = useRef(null);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
  emailjs.init("QaIBH3luwQ8lEjgGh");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vpe5sd",
        "template_nrcyops",
        formRef.current,
        "QaIBH3luwQ8lEjgGh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="mx-auto" />
            <h4>Youssef Mohamed</h4>
            <h5>youssefalgohary52@gmail.com</h5>
            <a href="mailto:youssefalgohary52@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="mx-auto" />
            <h4>WhatsApp</h4>
            <h5>+49 17655698321</h5>
            <a href="https://wa.me/+4917655698321" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
          >
            Send Message <BiSend />
          </button>
          {successMessage && (
            <p className="message-feedback">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
