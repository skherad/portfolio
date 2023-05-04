import "./Home.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { TypeAnimation } from "react-type-animation";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import AboutMe from "../../components/AboutMe/AboutMe";
import ContactPage from "../../components/ContactPage/ContactPage";

const Home = () => {
  return (
    <AnimatedPage>
      <section className="hero">
        <TypeAnimation
          sequence={[
            "Hey, I'm Shahrzad",
            2000,
            "but feel free",
            1000,
            "to call me Shaz",
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="hero__title"
        />
        <p className="hero__text">
          A former mechanical engineer turned developer skilled in full stack
          development
        </p>
        <a href="#projects" className="hero__button link">
          PROJECTS
        </a>
      </section>
      <AboutMe />
      <Projects />
      <Skills />
      <ContactPage />
    </AnimatedPage>
  );
};

export default Home;
