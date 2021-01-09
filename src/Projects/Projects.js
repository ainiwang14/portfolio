import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import SadCat from '../media/SadCat.jpg'
import ROE from '../media/ROE.png';
import PuppyLove from '../media/PuppyLove.png';
import Tinder from '../media/tinder.png'

const FlexContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 500px;
`

const projectsData = [{
    image: ROE,
    description: 'WRITE SOME STUFF HERE',
    link: 'https://ainiwang14.github.io/reimagined-octo-enigma-API/',
    title: 'Reimagined Octo Enigma'
},{
    image: PuppyLove,
    description: 'WRITE SOME STUFF HERE',
    link: 'https://secure-meadow-97878.herokuapp.com/',
    title: 'PuppyLove' 
},{
    image: Tinder,
    description: 'WRITE SOME STUFF HERE',
    link: 'https://vast-lowlands-43566.herokuapp.com/',
    title: 'Tinder for Restaurants' 
},]


const ProjectCards = projectsData.map(project => {
    return <ProjectCard key={project.title} props={project}/>
})
const Projects = () => {
    return (
        <FlexContainer>
            {ProjectCards}
        </FlexContainer>
    )
}

export default Projects;