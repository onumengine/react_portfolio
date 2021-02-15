import React from 'react'
import WelcomeImage from '../atoms/WelcomeImage'
import ProjectDescription from '../molecules/ProjectDescription'

const ProjectItem = () => 
    <div className="row">
        <ProjectDescription/>
        <WelcomeImage/>
    </div>

export default ProjectItem