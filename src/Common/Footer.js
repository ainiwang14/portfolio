import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
`

const Footer =() => {
    return (
        <StyledFooter>
            This site is owned and copyrighted by Aileen Wang Inc.
        </StyledFooter>
    )
}

export default Footer;