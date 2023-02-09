import Projects from '../../components/Projects/Projects'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <>
        <section className='hero'>
            <h1 className='hero__title'>H E Y,&nbsp;&nbsp;&nbsp;&nbsp;I ' M&nbsp;&nbsp;&nbsp;&nbsp;S H A H R Z A D</h1>
            <p className='hero__text'>A former mechanical engineer turned developer focused on full stack development</p>
            <Link to="/projects" className='hero__button link'>PROJECTS</Link>
        </section>
        <section className='about'  id="about">
            <h2 className='about__title'>A B O U T&nbsp;&nbsp;&nbsp;M E</h2>
            <div className='about__border'></div>
            <p className='about__text'>
                I'm a former mechanical engineer who tried many industries until I found my passion for coding.<br></br>
                I'm open to job opportunities where I can contribute, learn and grow. 
                If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
        </section>
    </>
  )
}

export default Home