import React from 'react';
import styled from 'styled-components';
import SadCat from '../media/SadCat.jpg'

const FlexContainer = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
`
const StyledCat = styled.img`
    max-width: 33%;
    height: auto;
    width: auto;

`
const NotFound = () => {
    return (
        <FlexContainer>
            <StyledCat src={SadCat} alt='cat'/>
            Oops! Wrong Page!
        </FlexContainer>
    )
}

export default NotFound;