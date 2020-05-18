import React from 'react';
import styled from 'styled-components';

class companypage extends React.Component {
  render() {
    return (
      <div className="companypage">
        <Container>
          <nav className="user-cp">
            <h1>Dr.Turner</h1>
          </nav>
        </Container>
      </div>
    );
  }
}

export default companypage;

const Container = styled.header`
  width: 100%;
  height: 5rem;
  background: #0050b3;

  display: flex;

  /* navigation / user cp styling */
  nav.user-cp {
    display: flex;

    letter-spacing: 0.1rem;
    margin-top: 13px;
    margin-left: 40px;
    color: #ffffff;
  }
`;

// justify-content: flex-end;
// align-items: center;
//   justify-content: space-evenly;
