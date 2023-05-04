import "./ContactPage.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const ContactPage = () => {
  const form = useRef();
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    let name = form.current[0].value;
    let email = form.current[1].value;
    let msg = form.current[2].value;
    let validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    !email.match(validEmail) ? (email = false) : (email = true);
    !name ? setInvalidName(true) : setInvalidName(false);
    !email ? setInvalidEmail(true) : setInvalidEmail(false);
    !msg ? setInvalidMsg(true) : setInvalidMsg(false);

    if (name && email && msg) {
      emailjs
        .sendForm(
          "service_gzkvr5d",
          "template_xotbf2n",
          form.current,
          "OKxVnqP_tsgE1U1sy"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert("Your message was sent!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form className="form" ref={form} onSubmit={submitHandler} id="contact">
      <h2 className="form__title">CONTACT</h2>
      <div className="form__border"></div>
      <p className="form__text">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <label className="form__label" htmlFor="name">
        Name
      </label>
      <input
        className={
          invalidName ? "form__input form__input--invalid" : "form__input"
        }
        name="name"
        placeholder="Enter your name..."
      ></input>
      {invalidName && (
        <p className="form__invalid">please enter a valid name</p>
      )}
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className={
          invalidEmail ? "form__input form__input--invalid" : "form__input"
        }
        name="email"
        placeholder="Enter your email..."
      ></input>
      {invalidEmail && (
        <p className="form__invalid">please enter a valid email</p>
      )}
      <label className="form__label" htmlFor="message">
        Message
      </label>
      <textarea
        className={
          invalidMsg ? "form__input form__input--invalid" : "form__input"
        }
        name="message"
        placeholder="Enter your message..."
        cols="30"
        rows="10"
      ></textarea>
      {invalidMsg && <p className="form__invalid">please enter a valid msg</p>}
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactPage;
