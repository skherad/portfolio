import { useParams } from 'react-router-dom'
import './ProjectPage.scss'
import Data from '../../assets/data/projects.json'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ProjectPage = () => {

    const {projectId} = useParams()
    const [project, setProject] = useState({})
    useEffect(()=>setProject(Data.filter(e=>e.id===projectId)[0]),[])
    let tech = project.tech.split(',')

    return (
    <section className='item'>
        <h2 className='item__title'>{project.title}</h2>
        <img src={project.photo_url} className="item__img"></img>
        <a href={project.url} target="_blank" className='item__btn link'>Live Link</a>
        <h3>Project Overview</h3>
        <p>{project.desc}</p>
        <h3>Tools Used</h3>
        <div className='item__skills'>
            {tech.map(e=> 
                <div className='item__tech' key={uuidv4()}>{e}</div>
            )}
        </div>
    </section>
  )
}

export default ProjectPage