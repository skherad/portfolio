import myPhoto from '../../assets/my_photo.jpg'
import { Link } from 'react-router-dom'
import './Home.scss'
import { v4 as uuidv4 } from 'uuid';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { motion } from 'framer-motion';

const Home = () => {
  let skills = [
    "HTML", 
    'CSS', 
    'SASS', 
    'JavaScript',
    'Responsive Design',
    'React',
    'Node',
    'Express',
    'SQL',
    'Git',
    'GitHub',
    'Agile'
  ]
  const clickHandler = () => {
    window.scrollTo(0, 0);
  }
  return (
    <AnimatedPage>
        <section className='hero'>
            {/* <div className="hero__photo" alt='my photo' style={{backgroundImage: `url(${myPhoto})`}}></div> */}
            <h1 className='hero__title'>HEY, I'M SHAHRZAD</h1>
            <p className='hero__sub'>Feel free to call me Shaz - much easier!</p>
            <p className='hero__text'>A former mechanical engineer turned developer skilled in full stack development</p>
            <Link to="/projects" className='hero__button link' onClick={clickHandler}>PROJECTS</Link>
        </section>
        <section className='about'>
            <div className="about__photo" alt='my photo' style={{backgroundImage: `url(${myPhoto})`}}></div>
            <h2 className='about__title'>ABOUT ME</h2>
            <div className='about__border'></div>
            <p className='about__text'>
              I’m a former mechanical/industrial engineer turned developer through a comprehensive full stack development bootcamp at&nbsp;
              <a href="https://brainstation.io/" className='about__text about__text--link'>BrainStation</a> 
              .&nbsp;I’ve had the opportunity to work in various industries throughout my career, but it wasn't until I discovered my love for coding that I finally found a career path that I am truly passionate about.
            </p>
            <p className='about__text about__text--two'>
              As a junior developer, I love both frontend and backend development, and my main language is JavaScript. I'm eager to join a team that values ownership, feedback, and inspires growth while bringing value to the success of the company. Don't hesitate to contact me, if you have a good opportunity that matches my skills and experience.
            </p>
            <Link to="/contact" className='hero__button link' onClick={clickHandler}>CONTACT ME</Link>
        </section>
        <section className='skills'>
            <h2 className='skills__title'>MY SKILLS</h2>
            <div className='skills__border'></div>
            <ul className='skills__tech-box'>
              {skills.map(e=>
                <motion.li 
                  className='skills__tech' 
                  key={uuidv4()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >{e}</motion.li>
              )}
            </ul>
        </section>
    </AnimatedPage>
  )
}

export default Home