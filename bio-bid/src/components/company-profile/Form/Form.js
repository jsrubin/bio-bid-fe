import React from 'react';
import { Body, LinkedIn, Button, Form } from './styles';
import scienceAsset from '../../../images/science-asset.svg';
import defaultLogo from '../../../images/default-company-logo.png';

export default props => {
    const handleImportWarning = () => {

    }

    const handleCancelWarning = () => {

    }

    return (
        <Body>
            <div className='body'>
                <div className='header-wrapper'>
                    {props.edit ? (
                        <h1>Edit company profile</h1>
                    ) : (
                        <h1>Add company profile</h1>
                    )}
                    <div className='btn-container'>
                        <Button onClick={handleImportWarning}>
                            <LinkedIn/>
                            <p>Import</p>
                        </Button>
                        <Button onClick={handleCancelWarning} cancel='true'>
                            <p>Cancel</p>
                        </Button>    
                    </div>
                </div>
                <div className='bar'/>
                <div className='form-wrapper'>
                    <Form>
                        <div className='basic-card'>
                            <img src={defaultLogo} alt='company'/>
                            <label>
                                Website URL
                                <input
                                    name='websiteURL'
                                />
                            </label>
                            <label>
                                LinkedIn URL
                                <input
                                    name='linkedInURL'
                                />
                            </label>
                            <label>
                                Company Size
                                <input
                                    name='companySize'
                                />
                            </label>
                            <label>
                                Headquarters
                                <input
                                    name='headquarters'
                                />
                            </label>
                        </div> 
                        <div className='specialties-card'>
                            <h2>Company Overview</h2>
                        </div>
                    </Form>
                    <img className='background-asset' src={scienceAsset} alt=''/>
                </div>
            </div>
        </Body>
    );
}