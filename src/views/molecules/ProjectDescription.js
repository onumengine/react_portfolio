import React from 'react'

const ProjectDescription = ({name, description, buildTools}) =>
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <br></br>
        <p>{buildTools}</p>
    </div>

ProjectDescription.defaultProps = {
    name: "Project",
    description: "Project description",
    buildTools: "HTML/CSS/JS",
}

export default ProjectDescription