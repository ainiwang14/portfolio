import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
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
    description: 'Plan your next national park trip with ease. ROE presents information on national parks in a state, with future functionality to include a localized view of the sky, animal migratory patterns, and geolocated freecycling options to promote appreciation of the environment as a lifestyle, not just an event.',
    link: 'https://ainiwang14.github.io/reimagined-octo-enigma-API/',
    title: 'Reimagined Octo Enigma'
},{
    image: PuppyLove,
    description: 'Shelters often have way more dogs than helpers: PuppyLove aims to solve this. By bridging enthusiastic and vetted dog-lovers looking for flexible volunteer opportunities with shelters who could use an extra set of hands. Future functionality hopes to also serve seniors, disabled people, and populations unable to pay for expensive petwalking and petsitting apps. PuppyLovers unite!',
    link: 'https://secure-meadow-97878.herokuapp.com/',
    title: 'PuppyLove' 
},{
    image: Tinder,
    description: 'Make picking restaurants easier. Each participant swipes right or left on a short list of restaurants in your area to produce an option everyone will agree to, and the matches are saved in a database. No more endless, "I\'ll eat whatever you want to eat." "I\'ll eat whatever you want to eat." "Actually, not that."',
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