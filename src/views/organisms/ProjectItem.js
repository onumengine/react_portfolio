import React from 'react'
import WelcomeImage from '../atoms/WelcomeImage'
import ProjectDescription from '../molecules/ProjectDescription'

const ProjectItem = () => 
    <React.Fragment>
        <ProjectDescription/>
        <WelcomeImage/>
    </React.Fragment>

export default ProjectItem