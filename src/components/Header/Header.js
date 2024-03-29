import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png'
import './Header.scss';
const APP_URL = 'http://localhost:3000'
const Header = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  }
  return (
    <header className='header'>
        <Link to="/" className='header__logo-box' onClick={clickHandler}>
            <img src={Logo} alt="SK Logo" className='header__logo'/>
        </Link>
        <nav className='header__nav'>
            <Link to="/" className='header__nav-item link' onClick={clickHandler}>About Me</Link>
            <a href="#projects" className='header__nav-item link'>Projects</a>
            <a href="#contact" className='header__nav-item link'>Contact</a>
        </nav>
    </header>
  )
}

export default Header