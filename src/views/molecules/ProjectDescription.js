import React from 'react'

const ProjectDescription = ({name, description, buildTools}) =>
    <React.Fragment>
        <h3>{name}</h3>
        <p>{description}</p>
        <br></br>
        <p>{buildTools}</p>
    </React.Fragment>

ProjectDescription.defaultProps = {
    name: "Project",
    description: "Project description",
    buildTools: "HTML/CSS/JS",
}

export default ProjectDescription