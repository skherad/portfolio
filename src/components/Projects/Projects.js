import './Projects.scss';
import Data from '../../assets/data/projects.json'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import AnimatedPage from '../AnimatedPage/AnimatedPage';

const Projects = () => {

  return (
    <AnimatedPage>
    <section className='project' id="projects">
        <h2 className='project__title'>PROJECTS</h2>
        <div className='project__border'></div>
        <ul className='project__container'>
           {Data.map(e =>
                <Link to={`/projects/${e.id}`} key={uuidv4()} className='project__card link'>
                    <li className='project__item' 
                        style={{backgroundImage: `url(${e.photo_url})`}}
                    ></li>
                    <p className='project__name'>{e.title}</p>
                </Link> 
            )}
        </ul>
    </section>
    </AnimatedPage>
  )
}

export default Projects