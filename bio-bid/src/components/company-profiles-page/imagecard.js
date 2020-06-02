import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardLink, CardDeck, Button, ButtonGroup } from 'reactstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { GET_COMPANY_BY_ID } from '../../queries/index';

import { Link } from 'react-router-dom';

import { DELETE_COMPANY } from '../../mutations/index';

export default () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_COMPANY_BY_ID, {
    variables: { id },
  });

  console.log(data);

  function sayHello() {
    alert('The Company Has Been Claimed Successfully');
  }

  const [deleteCompany] = useMutation(DELETE_COMPANY);

  const handleDelete = async () => {
    try {
      await deleteCompany({ variables: { id } });
      history.push('/service-providers');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div">
      {data && (
        <CardContainer>
          <nav className="user-cp">
            <h1 style={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}>{data && data.company.name}</h1>{' '}
            <Link to={`/service-providers`}>
              <Button
                className="backbutton "
                style={{
                  backgroundColor: '#FFFFFF',
                  color: ' #0050b3',
                  display: 'flex',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {' '}
                Back
              </Button>
            </Link>
          </nav>{' '}
        </CardContainer>
      )}{' '}
      {data && (
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
                    <h3>Company Size: </h3>
                    <p>{data.company.companySize}</p>
                  </CardTitle>
                  <div>
                    {' '}
                    <h3>Company Overview:</h3>
                    <p> {data.company.overview}</p>
                  </div>
                  {/* edit delete and claim buttons */}

                  <ButtonGroup className="buttons">
                    <Button style={{ backgroundColor: '#389E0D' }} onClick={sayHello}>
                      Claim
                    </Button>{' '}
                    <Link to={`/service-providers/edit/${id}`}>
                      <Button style={{ backgroundColor: '#BFBFBF' }}>Edit</Button>
                    </Link>
                    <Button style={{ backgroundColor: '#F5222D' }} onClick={handleDelete}>
                      Delete
                    </Button>{' '}
                  </ButtonGroup>
                </CardBody>
              </Card>
            </div>

            {/* card with services, specialties/ regions covered etc. */}

            <Card className="cardTWO">
              <CardBody className="cardtwobody">
                <div>
                  {' '}
                  <h3>Services:</h3>{' '}
                  <ul>
                    {data.company.services.map((service) => (
                      <li>{service.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {' '}
                  <h3>Specialties:</h3>{' '}
                  {data.company.specialties.map((specialty) => (
                    <li> {specialty.name} </li>
                  ))}
                </div>
                <div>
                  <div>
                    {' '}
                    <h3>Regions Covered:</h3>{' '}
                    {data.company.regions.map((region) => (
                      <li>{region.name}</li>
                    ))}
                  </div>
                </div>

                <div>
                  {' '}
                  <h3>Therapeutic Areas:</h3>{' '}
                  {data.company.therapeutics.map((therapeutic) => (
                    <li>{therapeutic.name}</li>
                  ))}
                </div>
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
      )}
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

const CardContainer = styled.div`
  width: 100%;
  height: 6rem;
  background: #0050b3;

  display: flex;

  /* navigation / user cp styling */
  nav.user-cp {
    display: flex;
    letter-spacing: 0.1rem;
    margin-left: 3rem;
    color: #ffffff;
    font-family: Lato;
    font-style: normal;
  }

  /* nav bar hero text */
  nav.user-text {
    display: flex;
    margin-left: 10rem;
    letter-spacing: 0.1rem;
    margin-top: 0.3rem;
    color: #ffffff;
    font-family: Lato;
  }
  .backbutton {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin-top: 1.75rem;
    height: 2.3rem;
    margin-left: 80rem;
  }
`;
