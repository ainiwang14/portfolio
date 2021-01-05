import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Icon = styled(FontAwesomeIcon)`
    color: pink;
`

const InfoCardContainer = styled.div`
    height: 90vh;
    padding: 0 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
`

const Contact = () => {
    return (
        <InfoCardContainer>
            <InfoCard>
                <Icon size='lg' icon={faEnvelope}/>
                E-Mail
            </InfoCard>
            <InfoCard>
                <Icon size='lg' icon={faLinkedinIn}/>
                Linkedin
            </InfoCard>
            <InfoCard>
                <Icon size='lg' icon={faGithub}/>
                GitHub
            </InfoCard>
        </InfoCardContainer>
    )
}

export default Contact;