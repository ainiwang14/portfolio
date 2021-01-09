import { faChrome } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlexContainer = styled.div`
    padding: 0px 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
`

const Link = styled.a`
    text-decoration: none;
`

const Icon = styled(FontAwesomeIcon)`
    color: pink;
    font-size: 48px;
    &:hover {
        color: white;
    }
`

const Info = styled.div`
    align-self: flex-start;
    margin: 1vh 0vh;
`

const StyledImage = styled.img`
    margin-bottom: 1vh;
    width: 200px;
    height: auto;
    box-shadow: 8px 4px 8px 2px rgba(0,0,0,.5);
`

const ProjectCard = ({ props: { title, image, description, link } }) => {

    return (
        <>
            <FlexContainer>
                <StyledImage src={image} alt={title} />
                <Info>
                    {description}
                </Info>
                <Link href={link}>
                    <Icon size='lg' icon={faChrome}/>
                </Link>
            </FlexContainer>
        </>
    )
}

export default ProjectCard;