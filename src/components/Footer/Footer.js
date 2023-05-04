import "./Footer.scss";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__txt">
        Made by
        <a href="/" className="footer__txt">
          &nbsp;Shahrzad Kheradmand
        </a>
      </div>
      <div className="footer__icon-box">
        <a
          className="footer__icon"
          href="https://www.linkedin.com/in/shazkherad/"
          style={{ backgroundImage: `url(${LinkedIn})` }}
          target="_blank"
        ></a>
        <a
          className="footer__icon"
          href="https://github.com/skherad"
          style={{ backgroundImage: `url(${GitHub})` }}
          target="_blank"
        ></a>
        <a
          className="footer__icon"
          href="https://twitter.com/shazkherad"
          style={{ backgroundImage: `url(${Twitter})` }}
          target="_blank"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
