import { useNavigate, useParams } from 'react-router-dom'
import './ProjectPage.scss'
import Data from '../../assets/data/projects.json'
import { v4 as uuidv4 } from 'uuid';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

const ProjectPage = () => {
    window.scrollTo(0, 0);
    let navigate = useNavigate()
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
              {project?.desc.map(e=> 
                  <p className='item__txt' key={uuidv4()}>{e}</p>
              )}
          <p className='item__txt'>
            Feel free to check out the Project by visiting the&nbsp; 
            <a href={project?.url} target="_blank" className='item__txt item__txt--link'>live link</a>
            {/* ,&nbsp;or watching the demo. */}
          </p>
          {project?.demo && 
            <div 
            // style="position: relative; padding-bottom: 62.5%; height: 0;"
            >
                <iframe src={project?.demo} 
                    // frameBorder="0" 
                    // webkitallowfullscreen="true" 
                    // mozallowfullscreen="true" 
                    // allowfullscreen="true" 
                    // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                ></iframe></div>
          }
          <h3 className='item__sub'>Tools Used</h3>
          <div className='item__skills'>
              {project?.tech.map(e=>
                <div className='item__tech' key={uuidv4()}>{e}</div>
              )}
          </div>
          <button onClick={() => navigate(-1)} className="item__back-btn">Go Back</button>
      </section>
      </AnimatedPage>
  )
}

export default ProjectPage