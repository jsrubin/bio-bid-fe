import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink } from 'reactstrap';
import styled from 'styled-components';

const imagecard = (props) => {
  return (
    <div>
      <Container>
        <Card className="card">
          <CardImg
            className="portfolioimage"
            src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
            alt="Card image cap"
          />
          <CardBody className="cardbody">
            <CardTitle>
              {' '}
              <h3>Company Name:</h3> <p>Halson Medical Co </p>
            </CardTitle>

            <CardTitle>
              {' '}
              <h3>Website:</h3>
              <CardLink href="www.halsonmedical.com"> Click Here</CardLink>
            </CardTitle>
            <CardTitle>
              {' '}
              <h3>Linkedin:</h3>
              <CardLink href="www.linkedin.com/halsonmedical.com"> Click Here</CardLink>
            </CardTitle>
            <CardTitle>
              {' '}
              <h3>Headquarters: </h3> <p>Sacramento, Ca</p>
            </CardTitle>
            <CardText>
              {' '}
              <h3>Company Description:</h3>{' '}
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};
export default imagecard;

const Container = styled.header`
  width: 100%;
  width: 25rem;
  padding: 1rem;

  .portfolioimage {
    display: flex;
    margin-left: 4rem;
    margin-top: 1rem;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  a {
    color: black;
    font-weight: bold;
    font-family: Lato;
  }
  h3 {
    font-size: 1rem;
    color: #0050b3;
    font-weight: bold;
    font-family: Lato;
  }
  p {
    font-family: Lato;
  }
  .card {
    box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;
