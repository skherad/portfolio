import './Projects.scss';
import Data from '../../assets/data/projects.json'

const Projects = () => {
  
  return (
    <section className='project'>
        <h2 className='project__title'>P R O J E C T S</h2>
        <div className='project__border'></div>
        <div className='project__container'>
           {Data.map(e => 
                // project card
                <div>hello</div>
            )}
        </div>
    </section>
  )
}

export default Projects