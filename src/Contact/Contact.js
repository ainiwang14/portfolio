import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Icon = styled(FontAwesomeIcon)`
    color: pink;
    &:hover {
        color: white;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: purple;
`

const InfoCardContainer = styled.div`
    height: 90vh;
    padding: 0 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
`

const Contact = () => {
    return (
        <InfoCardContainer>
            <Link href='mailto:ainiwang14@gmail.com'>
                <FlexContainer>
                    <Icon size='lg' icon={faEnvelope}/>
                    E-Mail
                </FlexContainer>
            </Link>
            <Link href='https://www.linkedin.com/in/aileen-wang-567265139/'>
                <FlexContainer>
                    <Icon size='lg' icon={faLinkedinIn}/>
                    Linkedin
                </FlexContainer>
            </Link>
            <Link href='https://github.com/ainiwang14'>
                <FlexContainer>
                    <Icon size='lg' icon={faGithub}/>
                    GitHub
                </FlexContainer>
            </Link>
        </InfoCardContainer>
    )
}

export default Contact;