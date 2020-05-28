import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink, CardDeck, Button, ButtonGroup } from 'reactstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import { GET_COMPANY_BY_ID } from '../../queries/index';

export default (props) => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_COMPANY_BY_ID, {
    variables: { id },
  });
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>Error</p>;

  console.log(data);
  return (
    <div className="div">
      <Container>
        <CardDeck>
          {/* card with image  */}
          <div className="cardonediv">
            <Card className="card">
              <CardImg className="portfolioimage" src={data.company.logoURL} alt="Company Image" />

              <CardBody className="cardbody">
                <CardTitle>
                  {' '}
                  <h3>Company Name:</h3> <p>{data.company.name} </p>
                </CardTitle>

                <CardTitle>
                  {' '}
                  <h3>Website:</h3>
                  <CardLink href={data.company.website}> Click Here</CardLink>
                </CardTitle>
                <CardTitle>
                  {' '}
                  <h3>Linkedin:</h3>
                  <CardLink href={data.company.linkedin}> Click Here</CardLink>
                </CardTitle>
                <CardTitle>
                  {' '}
                  <h3>Headquarters: </h3> <p>{data.company.headquarters}</p>
                </CardTitle>
                <CardTitle>
                  {' '}
                  <h3>Company Size: </h3> {data.company.companySize}
                </CardTitle>
                <CardText>
                  {' '}
                  <h3>Company Overview:</h3> <p> {data.company.overview}</p>
                </CardText>
                {/* edit delete and claim buttons */}

                <ButtonGroup className="buttons">
                  <Button style={{ backgroundColor: '#389E0D' }}>Claim</Button>{' '}
                  <Button style={{ backgroundColor: '#BFBFBF' }}>Edit</Button>
                  <Button style={{ backgroundColor: '#F5222D' }}>Delete</Button>{' '}
                </ButtonGroup>
              </CardBody>
            </Card>
          </div>

          {/* card with services, specialties/ regions covered etc. */}

          <Card className="cardTWO">
            <CardBody className="cardtwobody">
              <CardText>
                {' '}
                <h3>Services:</h3> {data.company.services.name}
              </CardText>
              <CardText>
                {' '}
                <h3>Specialties:</h3> {data.company.specialties.name}
              </CardText>
              <CardText>
                <div>
                  {' '}
                  <h3>Regions Covered:</h3> {data.company.regions.name}
                </div>
              </CardText>

              <CardText>
                {' '}
                <h3>Therapeutic Areas:</h3> {data.company.therapeutics.name}
              </CardText>
            </CardBody>
          </Card>
          <Card className="cardthreebody">
            <CardBody>
              <CardTitle>
                {' '}
                <h1 style={{ color: '#0050b3', fontSize: '1.9rem' }}>Future Company Rating ... </h1>
              </CardTitle>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};
// styling for cards and buttons

const Container = styled.header`
  width: 100%;

  padding: 2rem;
  margin-top: 1.4rem;
  ${'' /* margin-left: 2.4rem; */}

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
    ${'' /* margin-left: 49px; */}
    padding: 10px;
    max-width: 40rem;
  }
  .buttons {
    display: flex;
    margin-bottom: 1rem;
  }

  button {
    border-color: white;
    margin-right: 0.3rem;
    border-radius: 0.3rem;
  }
  .cardbody {
    width: 25rem;
  }
  .cardthreebody {
    max-width: 40rem;
  }
`;
