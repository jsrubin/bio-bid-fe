import React from 'react';
import { Link } from 'react-router-dom';

import defaultLogo from '../../../images/default-company-logo.png';

import { CompanyCard, CardButton } from './styles';

export default ({company}) => {
    console.log(company);
    return (
        <CompanyCard>
            {company.logoURL ? (
               <img src={company.logoURL}/> 
            ) : (
                <img src={defaultLogo}/>
            )}
            <div className='content'>
                <div className='text'>
                    <h3>{company.name}</h3>
                    <div className='details'>
                        <p><span>Website URL: </span>{company.website}</p>
                        <p><span>LinkedIn URL: </span>{company.website}</p>
                    </div>
                    <div className='btn-container'>
                        <CardButton gray> 
                            <p>Claim</p>
                        </CardButton>
                        <Link to={`/service-providers/${company.id}`}>
                            <CardButton>
                                <p>Details</p>
                            </CardButton>
                        </Link>
                    </div>
                </div>
                <div className='overview'>
                    <p className='bold'>Company Overview</p>
                    <p>{company.overview}</p>
                </div>
            </div>
        </CompanyCard>
    );
}