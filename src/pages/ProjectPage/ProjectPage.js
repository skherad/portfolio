import { useParams } from 'react-router-dom'
import './ProjectPage.scss'
import Data from '../../assets/data/projects.json'
import { v4 as uuidv4 } from 'uuid';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

const ProjectPage = () => {
  window.scrollTo(0, 0);

    const {projectId} = useParams()
    let project = Data.find(e=>e.id===projectId)

    return (
      <AnimatedPage>
      <section className='item'>
          <h2 className='item__title'>{project?.title}</h2>
          <div className='item__border'></div>
          <img src={project?.photo_url} className="item__img"></img>
          <a href={project?.url} target="_blank" className='item__btn link'>Live Link</a>
          <h3 className='item__sub'>Project Overview</h3>
          <p className='item__txt'>{project?.desc}</p>
          <h3 className='item__sub'>Tools Used</h3>
          <div className='item__skills'>
              {project?.tech.map(e=> 
                  <div className='item__tech' key={uuidv4()}>{e}</div>
              )}
          </div>
      </section>
      </AnimatedPage>
  )
}

export default ProjectPage