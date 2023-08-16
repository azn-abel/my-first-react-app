import {Link} from "react-router-dom";


const Project = (props) => {
    const { project } = props;
    return (
        <Link className="project" style={{textDecoration: "none"}} to={project.url}>
            <img style={{borderRadius: project.borderRadius}} src={require('../../images/' + project.imagePath)} alt={project.alt} />
            <b>{project.title}</b>
            <p>{project.description}</p>
        </Link>
    )
}

export default Project;