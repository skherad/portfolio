import { useNavigate, useParams } from "react-router-dom";
import "./ProjectPage.scss";
import Data from "../../assets/data/projects.json";
import { v4 as uuidv4 } from "uuid";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const ProjectPage = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const { projectId } = useParams();
  let project = Data.find((e) => e.id === projectId);

  return (
    <AnimatedPage>
      <section className="item">
        <h2 className="item__title">{project?.title}</h2>
        <div className="item__border"></div>
        {!project?.demo && (
          <img src={project?.photo_url} className="item__img"></img>
        )}
        {project?.demo && (
          <div>
            <iframe
              src={project?.demo}
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen={true}
              className="item__demo"
            ></iframe>
          </div>
        )}
        <a href={project?.url} target="_blank" className="item__btn link">
          Live Link
        </a>
        <h3 className="item__sub">Project Overview</h3>
        {project?.desc.map((e) => (
          <p className="item__txt" key={uuidv4()}>
            {e}
          </p>
        ))}
        <p className="item__txt">
          Feel free to check out the project by visiting the&nbsp;
          <a
            href={project?.url}
            target="_blank"
            className="item__txt item__txt--link"
          >
            live link.
          </a>
        </p>
        <h3 className="item__sub">Tools Used</h3>
        <div className="item__skills">
          {project?.tech.map((e) => (
            <div className="item__tech" key={uuidv4()}>
              {e}
            </div>
          ))}
        </div>
        <button onClick={() => navigate(-1)} className="item__back-btn">
          Go Back
        </button>
      </section>
    </AnimatedPage>
  );
};

export default ProjectPage;
