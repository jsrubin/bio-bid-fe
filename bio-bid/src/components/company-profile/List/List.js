import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMPANIES } from '../../../queries';
import { makeStyles } from '@material-ui/core/styles';


import CompanyCard from './CompanyCard';

import { CompanyList, Button } from './styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

export default () => {        
    const classes = useStyles();

    const {loading, error, data} = useQuery(GET_COMPANIES);

    return (
        <CompanyList>
            <header>
                <div className='header-container'>
                    <h2>List of Service Providers</h2>
                    <div className='search-container'>
                        <input type="text"/>
                        <Button>
                            <p>Search</p>
                        </Button>
                    </div>
                </div>
            </header>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {data && data.companies.map(company => {
                return <CompanyCard company={company} key={company.id}/>
            })}
            </CompanyList>
    )
};
