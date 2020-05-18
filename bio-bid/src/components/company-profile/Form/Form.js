import React from 'react';
import { Body, LinkedIn, Button, Form } from './styles';
import scienceAsset from '../../../images/science-asset.svg';
import defaultLogo from '../../../images/default-company-logo.png';

export default props => {
    const handleImportWarning = () => {
        console.log('Import Warning')
    }

    const handleCancelWarning = () => {
        console.log('Cancel Warning')
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
                        <img src={defaultLogo} alt='company'/>
                        <div className='input-wrapper'>
                            <div className='input-container'>
                                <label>Company Name</label>
                                <input/>
                            </div>
                            <div className='input-container'>
                                <label>LinkedIn</label>
                                <input/>
                            </div>
                            <div className='input-container'>
                                <label>Website</label>
                                <input/>
                            </div>
                            <div className='input-container'>
                                <label>Company Description</label>
                                <textarea></textarea>
                            </div>
                            <div className='input-container'>
                                <label>Headquarters</label>
                                <input/>
                            </div>
                            <div className='input-container'>
                                <label>Regions Covered</label>
                            </div>
                            <div className='input-container'>
                                <label>Therapeutic Areas </label>
                            </div>
                            <div className='input-container'>
                                <label>Services</label>
                            </div>
                            <div className='input-container'>
                                <label>Specialties</label>
                            </div>
                        </div>
                    </Form>
                    <img className='background-asset' src={scienceAsset} alt=''/>
                </div>
            </div>
        </Body>
    );
}