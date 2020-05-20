import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardLink,
  CardDeck,
  Button,
  ButtonGroup,
  Progress,
} from 'reactstrap';
import styled from 'styled-components';

const imagecard = (props) => {
  return (
    <div className="div">
      <Container>
        <CardDeck>
          {/* card with image  */}

          <Card className="card">
            <CardImg
              className="portfolioimage"
              src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
              alt="Card image cap"
            />
            <CardImg
              className="stars"
              src="https://www.judsonsmartliving.org/wp-content/uploads/5-stars.png"
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
              <CardTitle>
                {' '}
                <h3>Company Size: </h3> <p>A lot</p>
              </CardTitle>
              <CardText>
                {' '}
                <h3>Company Description:</h3>{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </CardText>
            </CardBody>
          </Card>

          {/* card with services, specialties/ regions covered etc. */}

          <Card className="cardTWO">
            <CardBody className="cardbody">
              <CardText>
                {' '}
                <h3>Services:</h3>{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </CardText>
              <CardText>
                {' '}
                <h3>Specialties:</h3>{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </CardText>
              <CardText>
                <div>
                  {' '}
                  <h3>Regions Covered:</h3>{' '}
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </CardText>

              <CardText>
                {' '}
                <h3>Therapeutic Areas:</h3>{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </CardText>
            </CardBody>
            {/* edit delete and claim buttons */}

            <ButtonGroup className="buttons">
              <Button style={{ backgroundColor: '#389E0D' }}>Claim</Button>{' '}
              <Button style={{ backgroundColor: '#BFBFBF' }}>Edit</Button>
              <Button style={{ backgroundColor: '#F5222D' }}>Delete</Button>{' '}
            </ButtonGroup>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};
export default imagecard;

// styling for cards and buttons

const Container = styled.header`
  width: 100%;
  width: 50rem;
  padding: 2rem;
  margin-top: 1.4rem;
  margin-left: 2.4rem;

  .portfolioimage {
    display: flex;
    margin-top: 1rem;
    align-self: center;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }
  .stars {
    display: flex;
    align-self: center;
    margin-top: 1rem;
    width: 50%;
    hieght: 50%;
  }
  a {
    color: black;
    font-weight: bold;
    font-family: Lato;
  }
  a:hover {
    color: #ffa940;
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
  .cardTWO {
    margin-left: 49px;
    padding: 10px;
  }
  .buttons {
    display: flex;
    margin-bottom: 1rem;
  }

  button {
    border-color: white;
  }
`;
