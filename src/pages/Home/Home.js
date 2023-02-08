import './Home.scss'

const Home = () => {
  return (
    <>
        <section className='hero'>
            <h1 className='hero__title'>H E Y,&nbsp;&nbsp;&nbsp;&nbsp;I ' M&nbsp;&nbsp;&nbsp;&nbsp;S H A H R Z A D</h1>
            <p className='hero__text'>A former mechanical engineer turned developer focused on full stack development</p>
            <button className='hero__button'>PROJECTS</button>
        </section>
        <section className='about'>
            <h2 className='about__title'>A B O U T&nbsp;&nbsp;&nbsp;M E</h2>
            <p className='about__text'>
                Check out some of my work in the Projects section.<br></br>
                I'm open to Job opportunities where I can contribute, learn and grow. 
                If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
        </section>
    </>
  )
}

export default Home