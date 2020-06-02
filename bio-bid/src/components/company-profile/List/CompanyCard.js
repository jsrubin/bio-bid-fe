import React from 'react';
import { Link } from 'react-router-dom';

import defaultLogo from '../../../images/default-company-logo.png';

import { CompanyCard, CardButton } from './styles';

export default ({company}) => {
    return (
        <CompanyCard>
            {company.logoURL ? (
               <img src={company.logoURL} alt='default logo'/> 
            ) : (
                <img src={defaultLogo} alt={company.name}/>
            )}
            <div className='content'>
                <div className='text'>
                    <h3>{company.name}</h3>
                    <div className='details'>
                        {company.website && <p><span>Website URL: </span>{company.website}</p>}
                        {company.linkedin && <p><span>LinkedIn URL: </span>{company.website}</p>}
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
                    {company.overview && <p className='bold'>Company Overview</p>}
                    <p>{company.overview}</p>
                </div>
            </div>
        </CompanyCard>
    );
}