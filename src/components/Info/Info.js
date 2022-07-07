import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec, InfoColumn, TextWrap } from './Info.elements';

const Info = () => {
  return (
    <>
    <InfoSec>
       <Container>
          <InfoColumn>
              <TextWrap>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </TextWrap>
          </InfoColumn>
        </Container> 
    </InfoSec>
    </>
  )
}

export default Info