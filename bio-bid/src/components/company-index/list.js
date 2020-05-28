import React from 'react';
import { fakeData } from './fake-data';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import Bids from '../bids/bids'

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { BookFilled } from '@ant-design/icons';

const GET_COMPANIES = gql`
  {
    companies {
      name
      logoURL
      website
      linkedin
      overview
    }
  }
`;

const ServiceProviders = (props) => {
  console.log('my props', props.data.companies);

  return (
    <div className="container">
      <div style={{ display: 'flex' }}>
        <h2 style={{ display: 'flex', justifyContent: 'left', margin: '3% 0 3% 0' }}>List of Service Providers</h2>
        <span style={{ display: 'flex', position: 'relative', margin: '0 0 0 35%', top: '35px' }}>
          <label style={{ fontSize: '1.2rem' }}>
            Search <input style={{ border: '1px solid lightgray', borderRadius: '5px' }} type="text" name="search" />
          </label>
        </span>
      </div>

      <hr></hr>
      {/* 
        {
            props.companies.map(item => {
                if (item){
                    return(
                        item.name
                    )
                } else {
                    return(
                        <div>Loading..</div>
                    )
                }
            })
        } */}

      {/* {fakeData.map( item => {
            if (item.claimed) {
                return (
                    <div style={{margin:"1% 0 0 0", border:"3px solid green"}}>
                        <Card>
                            <div style={{display:"flex"}}>
                                <CardImg src={item.image} style={{border:"1px solid lightgray", width:"300px", height:"200px"}} alt="Card image cap" />
                                <span>
                                    <CardTitle style={{fontWeight:"bold", display:"flex", justifyContent:"center", margin:"2% 0 0 0"}}>{item.name}</CardTitle>
                                    <CardText style={{padding: "2% 7.5% 2% 7.5%"}}>{item.overview}</CardText>
                                </span>
                            </div>
                    <CardBody>
                        <CardSubtitle style={{width:"30%", position:"relative", right:"10px", bottom:"10px"}}>{item.name} specializes in <span style={{fontWeight:"bold"}}>{item.specialty}</span></CardSubtitle>
                        <Button style={{width:"300px", margin: "0 5% 0 0%", position:"relative", right:"10px"}}>See Further Info</Button>
                        <Button style={{width:"300px", margin: "0 1% 0 10%", position:"relative", height: "38px"}}>Add your Review</Button>
                    </CardBody>
                </Card>
            </div>
            )} else {
                return (
                    <div style={{margin:"1% 0 0 0", border:"3px solid red"}}>
                        <Card>
                            <div style={{display:"flex"}}>
                                <CardImg src={item.image} style={{border:"1px solid lightgray", width:"300px", height:"200px"}} alt="Card image cap" />
                                <span>
                                    <CardTitle style={{fontWeight:"bold", display:"flex", justifyContent:"center", margin:"2% 0 0 0"}}>{item.name}</CardTitle>
                                    <CardText style={{padding: "2% 7.5% 2% 7.5%"}}>{item.overview}</CardText>
                                </span>
                            </div>
                            <CardBody>
                                <CardSubtitle style={{width:"30%", position:"relative", right:"10px", bottom:"10px"}}>{item.name} specializes in <span style={{fontWeight:"bold"}}>{item.specialty}</span></CardSubtitle>
                                <Button style={{width:"300px", margin: "0 5% 0 0%", position:"relative", right:"10px"}}>See Further Info</Button>
                                <Button style={{width:"200px", margin: "0 1% 0 1%", position:"relative", left:"35%"}}>Claim this Company</Button>
                                <Button style={{width:"200px", margin: "0 1% 0 1%", position:"relative", right:"28%", height: "38px"}}>Add your Review</Button>
                            </CardBody>
                        </Card>
                    </div>
                )
            }
        })} */}
    </div>
  );
};

export default graphql(GET_COMPANIES)(ServiceProviders);
