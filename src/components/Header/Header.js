import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png'
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <Link to="/" className='header__logo-box'>
            <img src={Logo} alt="SK Logo" className='header__logo'/>
        </Link>
        <nav className='header__nav'>
            <Link to="/about" className='header__nav-item link'>About</Link>
            <Link to="/projects" className='header__nav-item link'>Projects</Link>
            <Link to="/Contact" className='header__nav-item link'>Contact</Link>
        </nav>
    </header>
  )
}

export default Header