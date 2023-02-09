import myPhoto from '../../assets/my_photo.jpg'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <>
        <section className='hero'>
            {/* <div className="hero__photo" alt='my photo' style={{backgroundImage: `url(${myPhoto})`}}></div> */}
            <h1 className='hero__title'>HEY, I'M SHAHRZAD</h1>
            <p className='hero__sub'>You can call me Shaz - much easier!</p>
            <p className='hero__text'>A former mechanical engineer turned developer focused on full stack development</p>
            <Link to="/projects" className='hero__button link'>PROJECTS</Link>
        </section>
        <section className='about'  id="about">
            <div className="about__photo" alt='my photo' style={{backgroundImage: `url(${myPhoto})`}}></div>
            <h2 className='about__title'>ABOUT ME</h2>
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