import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import WarningCard from './WarningCard';
import MultipleSelect from './MultipleSelect';

import { GET_REGIONS, GET_THERAPEUTICS, GET_SERVICES } from '../../../queries';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Body, Basic, Services, Button, WarningIcon, Arrow } from './styles';


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    // Queries
    const { data: regionsData } = useQuery(GET_REGIONS);
    const { data: therapeuticsData } = useQuery(GET_THERAPEUTICS);
    const { data: servicesData } = useQuery(GET_SERVICES);

    // State
    const [ confirmCancel, setConfirmCancel ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        logoURL: '',
        website: '',
        email: '',
        linkedin: '',
        overview: '',
        headquarters: '',
        companySize: '',
        regions: [],
        therapeutics: [],
        services: [],
        phases: []
    })

    // Event handlers
    const handleCancel = () => {
        setConfirmCancel(!confirmCancel);
    }

    const handleReDirect = () => {
        history.push('/');
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <Body>
            {confirmCancel && (
                <Backdrop className={classes.backdrop} open={confirmCancel}>
                    <WarningCard handleCancel={handleCancel} handleReDirect={handleReDirect}/>
                </Backdrop>
            )}
            <header>
                <div className='header-content'>
                    <h2>Create Company Profile</h2>
                    <div className='btn-container' onClick={handleCancel}>
                        <Arrow/>
                        <p className='grey'>Back</p>
                    </div>
                </div>
            </header>
            <div className='form-wrapper'>
                <div className='import-container'>
                    <h3>LinkedIn Import</h3>
                    <p className='text'>Would you like to import your LinkedIn data to fill out your basic information?</p>
                    <div className='warning-container'>
                        <WarningIcon/>
                        <p className='text'>Warning: All current data on this page will be overwritten.</p>
                    </div>
                    <Button color='scienceBlue'><p>Import</p></Button>
                </div>
                <Basic>
                    <h3>Basic Information</h3>
                    <div className='form-wrapper'>
                        <div className='form'>
                            <div className='row'>
                                <div className='input-box'>
                                    <label>Company Name</label>
                                    <input
                                        name='name'
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>RFP Email</label>
                                    <input
                                        name='email'
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-box'>
                                    <label>LinkedIn</label>
                                    <input
                                        name='linkedin'
                                        onChange={handleChange}
                                        value={formData.linkedin}
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Website</label>
                                    <input
                                        name='website'
                                        onChange={handleChange}
                                        value={formData.website}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-box'>
                                    <label>Headquarters</label>
                                    <input
                                        name='headquarters'
                                        onChange={handleChange}
                                        value={formData.headquarters}
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Company Size</label>
                                    <select
                                        name='companySize'
                                        onChange={handleChange}
                                        value={formData.companySize}
                                    >
                                        <option value='' defaultValue disabled hidden>Choose company size</option>
                                        <option value='N/A'>N/A</option>
                                        <option value='A'>A: Self Employed</option>
                                        <option value='B'>B: 1-10 Employees</option>
                                        <option value='C'>C: 11-50 Employees</option>
                                        <option value='D'>D: 51-200 Employees</option>
                                        <option value='E'>E: 201-500 Employees</option>
                                        <option value='F'>F: 501-1,000 Employees</option>
                                        <option value='G'>G: 1,001-5,000 Employees</option>
                                        <option value='H'>H: 5,001-10,000 Employees</option>
                                        <option value='I'>I: 10,000+ Employees</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-box'>
                                    <label>Regions Covered</label>
                                    {regionsData && (
                                        <MultipleSelect selectName='Regions Covered' options={regionsData.regions}/>
                                    )}
                                </div>
                                <div className='input-box'>
                                    <label>Therapeutic Areas</label>
                                    {therapeuticsData && (
                                        <MultipleSelect selectName='Therapeutic Areas' options={therapeuticsData.therapeutics}/>
                                    )}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-box'>
                                    <label>Clinical Trial Phases</label>
                                    <MultipleSelect selectName='Clinical Trial Phases'/>
                                </div>
                                <div className='input-box'>
                                    <label>Company Overview</label>
                                    <textarea
                                        name='overview'
                                        value={formData.overview}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Basic>
                <Services>
                    <h3>Services</h3>
                    <div className='service-container'>
                        <div className='wrapper'>
                            <div className='container-col'>
                                <label>Add Services</label>
                                {servicesData && (
                                    <MultipleSelect selectName='Services' options={servicesData.services}/>
                                )}
                            </div>     
                            <div className='container-col'>
                                <p>Overview</p>
                            </div>             
                        </div>
                    </div>
                    
                </Services>
                <div className='btn-wrapper'>
                    <div className='btn-container'>
                        <Button color='sun' onClick={handleCancel}><p>Cancel</p></Button>
                        <Button color='scienceBlue' marginLeft='10px' onClick={handleSubmit}><p>Submit</p></Button>
                    </div>
                </div>
            </div>
        </Body>
    );
}