import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const EmailIcon = styled(FontAwesomeIcon)`
    color: pink;
`

const InfoCardContainer = styled.div`
    display: flex;
`

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
`

const Contact = () => {
    return (
        <>
            <InfoCardContainer>
                <InfoCard>
                    <EmailIcon size='lg' icon={faEnvelope}/>
                    E-Mail
                </InfoCard>
                <InfoCard>
                    <FontAwesomeIcon size='lg' icon={faLinkedinIn}/>
                    Linkedin
                </InfoCard>
                <InfoCard>
                    <FontAwesomeIcon size='lg' icon={faGithub}/>
                    GitHub
                </InfoCard>
            </InfoCardContainer>
        </>
    )
}

export default Contact;