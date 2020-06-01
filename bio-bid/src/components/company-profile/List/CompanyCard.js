import React, { useState } from 'react';

import defaultLogo from '../../../images/default-company-logo.png';

import { CompanyCard } from './styles';

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
                </div>
                <div className='overview'>
                    <p className='bold'>Company Overview</p>
                    <p>{company.overview}</p>
                    <div className='btn-container'>
                        
                    </div>
                </div>
            </div>
        </CompanyCard>
    );
}