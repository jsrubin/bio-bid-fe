import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardTitle, CardImg, CardLink, CardDeck, Button, ButtonGroup } from 'reactstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { DELETE_COMPANY } from '../../../mutations/index';
import { GET_COMPANY_BY_ID } from '../../../queries/index';

import Bubble from './Bubble';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Details, Button, Website, LinkedIn } from './styles';
import logo from '../../../images/default-company-logo.png';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

export default () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data, refetch } = useQuery(GET_COMPANY_BY_ID, {
    variables: { id }
  })

  const [ deleteCompany ] = useMutation(DELETE_COMPANY);

  const handleDelete = async () => {
    try{
      await deleteCompany({ variables: { id } });
      history.push('/service-providers');
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    refetch();
  }, [])

  return(
    <Details>
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
      </Backdrop>
      )}
      {data && (
        <header>
          <div className='header-container'>
            <div className='company-name'>
              <h2>{data.company.name}</h2>
              <Button>
                <p>Claim</p>
              </Button>
            </div>
            <div className='btn-container'>
              <Button onClick={handleDelete} color='delete'>
                <p>Delete</p>
              </Button>
              <Link to={`/service-provider/edit/${id}`}>
                <Button color='edit'>
                  <p>Edit</p>
                </Button>
              </Link>
              <Link to='/service-providers'>
                <Button lg>
                  <p>Service Providers</p>
                </Button>
              </Link>
            </div>
            
          </div>
        </header>
      )}
      {data && (
        <div className='flex-wrapper'>
          <div className='basic-container'>
            <div className='basic-sidebar'>
              {data.company.logoURL ? (
                <img src={data.company.logoURL}/>
              ) : (
                <img src={logo}/>
              )}
              <div className='nav-container'>
                {data.company.website && (
                  <div className='link'>
                    <Website/>
                    <a target='_blank' rel='noopener noreferrer' href={`https://${data.company.website}`}>{data.company.website}</a>
                  </div>
                )}
                {data.company.linkedin && (
                  <div className='link'>
                    <LinkedIn/>
                    <a target='_blank' rel='noopener noreferrer' href={`https://${data.company.linkedin}`}>{data.company.linkedin}</a>
                  </div>
                )}
              </div>
              <div className='overview'>
                <h3>Overview</h3>
                <p>{data.company.overview}</p>
              </div>
            </div>
            <div className='specifics'>
              <div className='regions'>
                <h3>Regions</h3>
                  {data.company.regions.map(region => {
                    return <Bubble content={region.name}/>
                  })}
              </div>  
              <div className='bar'/>
              <div className='therapeutic-areas'>
                <h3>Therapeutic Areas</h3>
                {data.company.therapeutics.map(therapeutic => {
                  return <Bubble content={therapeutic.name}/>
                })}
              </div>
              <div className='bar'/>
              <div className='services'>
                <h3>Services Coming Soon</h3>
              </div>
            </div>
            <div className='reviews'>
                <h3>Reviews Coming Soon</h3>
            </div>
          </div>
        </div>
      )}
    </Details>
  );
}