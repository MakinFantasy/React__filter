import React from "react";

function ProjectList(props) {
    const { projects } = props;

    return (
        <div>
            {projects.map(project => (
                <img key={project.img} src={project.img} alt={project.category} />
            ))}
        </div>
    );
}

export default ProjectList;