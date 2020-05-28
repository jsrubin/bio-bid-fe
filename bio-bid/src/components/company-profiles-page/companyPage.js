import React from 'react';
import styled from 'styled-components';

import Imagecard from './imagecard';

class CompanyPage extends React.Component {
  render() {
    return (
      <div className="companypage">
        {/* navbar */}
        <Container>
          <nav className="user-cp">
            <h1 style={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}>Dr.Turner</h1>
          </nav>
          <nav className="user-text">
            <h2 style={{ fontSize: '22px', display: 'flex', alignItems: 'center' }}>
              “Success is the sum of small efforts-repeated-day in and day out ”
            </h2>
          </nav>
        </Container>

        <Imagecard />
      </div>
    );
  }
}

export default CompanyPage;

const Container = styled.header`
  width: 100%;
  height: 6rem;
  background: #0050b3;

  display: flex;

  /* navigation / user cp styling */
  nav.user-cp {
    display: flex;
    letter-spacing: 0.1rem;
    margin-left: 5rem;
    color: #ffffff;
    font-family: Lato;
    font-style: normal;
  }

  /* nav bar hero text */
  nav.user-text {
    display: flex;
    margin-left: 18rem;
    letter-spacing: 0.1rem;
    margin-top: 0.3rem;
    color: #ffffff;
    font-family: Lato;
  }
`;
