import React from "react";
import "./AboutMe.scss";
import myPhoto from "../../assets/my_photo.jpg";

const AboutMe = () => {
  return (
    <section className="about">
      <div
        className="about__photo"
        alt="my photo"
        style={{ backgroundImage: `url(${myPhoto})` }}
      ></div>
      <h2 className="about__title">ABOUT ME</h2>
      <div className="about__border"></div>
      <p className="about__text">
        I'm a former mechanical engineer with experience in various industries.
        Throughout my 5+ years experience after university, I never liked my
        jobs enough to call it a career. In 2022, I found my love for coding
        through a work project and since then I decided to complete the web
        development bootcamp at&nbsp;
        <a
          href="https://brainstation.io/"
          className="about__text about__text--link"
        >
          BrainStation
        </a>
        .&nbsp;and pivot into a full stack developer! 👩‍💻
      </p>
      <p className="about__text about__text--two">
        I enjoy frontend more than backend development, but really, I love
        building great products. My main language is JavaScript, and I've been
        using React & Express extensively. Now that I've finally found the
        career I want to grow in, I can't wait to join a team where I can learn
        and grow as fast as possible while bringing value to the success of the
        company. 🚀
      </p>
      <p>
        Fun facts about me: I decided to moved to Calgary from Mississauga after
        doing a cross country road trip! 🇨🇦 I’m a big foodie and love to cook!
        👩‍🍳 I love hiking in the mountains, cycling and find being in nature to
        be relaxing 🧘‍♀️{" "}
      </p>
      <p>
        Feel free to connect with me, if you have any questions about my
        projects, career journey, or just wanna chat!😊{" "}
      </p>
      {/* <Link to="/contact" className="hero__button link" onClick={clickHandler}>
        CONTACT ME
      </Link> */}
      <a href="#contact" className="hero__button link">
        CONTACT ME
      </a>
    </section>
  );
};

export default AboutMe;
