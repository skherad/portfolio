import './Projects.scss';
import Data from '../../assets/data/projects.json'
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  
  return (
    <section className='project'>
        <h2 className='project__title'>P R O J E C T S</h2>
        <div className='project__border'></div>
        <ul className='project__container'>
           {Data.map(e =>
                <div key={uuidv4()} className='project__card'>
                    <li className='project__item' 
                        style={{backgroundImage: `url(${e.photo_url})`}}
                    ></li>
                    <p className='project__name'>{e.title}</p>
                </div> 
            )}
        </ul>
    </section>
  )
}

export default Projects