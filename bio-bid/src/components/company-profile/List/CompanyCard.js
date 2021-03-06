import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import defaultLogo from '../../../images/default-company-logo.png';

import { CompanyCard, CardButton } from './styles';

export default ({company}) => {
    const [ overview, setOverview ] = useState('');
    const [ tooLong, setTooLong ] = useState(false);

    useEffect(() => {
        if(company.overview.length >= 300){
            setOverview(`${company.overview.substring(0, 300)}...`);
            setTooLong(true);
        }else{
            setOverview(company.overview);
        }
    }, [ company.overview ]);

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
                        {company.linkedin && <p><span>LinkedIn URL: </span>{company.linkedin}</p>}
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
                    <p>{overview} {tooLong && <Link to={`/service-providers/${company.id}`}> see more </Link>}</p>
                </div>
            </div>
        </CompanyCard>
    );
}