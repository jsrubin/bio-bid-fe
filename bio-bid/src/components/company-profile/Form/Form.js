import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMPANIES } from '../../../queries';
import { makeStyles } from '@material-ui/core/styles';

import WarningCard from './WarningCard';
import MultipleInput from './MultipleInput';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Body, LinkedIn, Button, Form } from './styles';

import scienceAsset from '../../../images/science-asset.svg';
import defaultLogo from '../../../images/default-company-logo.png';
import theme from '../../../theme';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

export default (props) => {
    const classes = useStyles();

    const [ open, setOpen ] = useState(false);
    const [ importWarning, setImportWarning ] = useState(false);
    const [ linkedInError, setLinkedInError] = useState(false);
    const [ appError, setAppError] = useState(null);

    const { loading, error, data } = useQuery(GET_COMPANIES);

    const [ formData, setFormData ] = useState({
        name: '',
        imgURL: '',
        website: '',
        linkedin: '',
        overview: '',
        headquarters: '',
        companySize: '',
        services: [],
        specialties: [],
        regionsCovered: [],
        therapeuticAreas: []
    })

    const handleImportWarning = () => {
        console.log(linkedInError);
        if(!linkedInError){
            setImportWarning(true);
            setOpen(true);
        }
    }

    const handleImportWarningClose = () => {
        setImportWarning(false);
        setOpen(false);
    }

    const handleUpdate = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleMultiUpdate = (name, element) => {
        setFormData({
            ...formData,
            [name]: element.map(value => {
                return {'name': value}
            })
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    const validateUrl = url => {
        const regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if(regex.test(url)) return true;
        return false;
    }

    const serviceData = [
        {name: 'Service 1'},
        {name: 'Service 2'},
        {name: 'Service 3'},
        {name: 'Service 4'},
        {name: 'Service 5'},
        {name: 'Service 6'}
    ]

    useEffect(() => {
        // Handle LinkedIn Error
        if(formData.linkedin && validateUrl(formData.linkedin)){
            setLinkedInError(false);
            setAppError('');
        }else{
            setLinkedInError(true);
            setAppError('Must enter a valid LinkedIn URL')
        }
    }, [formData.linkedin])

    return (
        <Body>
            <Backdrop className={classes.backdrop} open={open}>
                {importWarning ? <WarningCard close={handleImportWarningClose}/> : null}
            </Backdrop>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
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
                        <Button cancel='true'>
                            <p>Cancel</p>
                        </Button>    
                    </div>
                </div>
                <div className='bar'/>
                <Form>
                    <div className='top-row'>
                        <div className='side-bar'>
                            <img src={defaultLogo} alt='company'/>
                            <Button noMargin onClick={handleSubmit}>
                                {props.edit ? (
                                    <p>Save changes</p>
                                ) : (
                                    <p>Add company</p>
                                )}
                            </Button>
                        </div>
                        <div className='col-custom'>
                            <div className='input-container'>
                                <label>Company Name</label>
                                <input
                                    name='name'
                                    value={formData.name}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Website</label>
                                <input
                                    name='website'
                                    value={formData.website}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Company Description</label>
                                <textarea
                                    name='overview'
                                    value={formData.overview}
                                    onChange={handleUpdate}
                                />
                            </div>
                        </div>
                        <div className='col-custom'>
                            <div className='input-container' style={{
                                 marginBottom: linkedInError ? '18px' : '40px'
                            }}>
                                <label>LinkedIn</label>
                                <div className='linkedIn-container'>
                                    <input
                                        name='linkedin'
                                        value={formData.linkedin}
                                        onChange={handleUpdate}
                                        style={{ 
                                            borderColor: linkedInError ? 'red' : theme.colors.silver,
                                        }}
                                    />
                                    <p className='error'>{appError}</p>
                                </div>
                            </div>
                            <div className='input-container'>
                                <label>Headquarters</label>
                                <input
                                    name='headquarters'
                                    value={formData.headquarters}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Company Size</label>
                                <select 
                                    name='companySize' 
                                    value={formData.companySize}
                                    onChange={handleUpdate}
                                >
                                    <option value='' defaultValue disabled hidden>Choose company size</option>
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
                    </div>
                    <div className='bottom-row'>
                        <div className='multi-container'>
                            <label>Regions Covered</label>
                            <MultipleInput 
                                name='regionsCovered' 
                                suggestions={undefined} 
                                handleMultiUpdate={handleMultiUpdate}
                            />
                        </div>
                        <div className='multi-container'>
                            <label>Therapeutic Areas</label>
                            <MultipleInput 
                                name='therapeuticAreas' 
                                suggestions={undefined} 
                                handleMultiUpdate={handleMultiUpdate}
                            />
                        </div>
                        <div className='multi-container'>
                            <label>Services</label>
                            <MultipleInput 
                                name='services' 
                                suggestions={serviceData} 
                                handleMultiUpdate={handleMultiUpdate}
                            />
                        </div>
                        <div className='multi-container'>
                            <label>Specialties</label>
                            <MultipleInput 
                                name='specialties' 
                                suggestions={undefined} 
                                handleMultiUpdate={handleMultiUpdate}
                            />
                        </div>
                    </div>
                    <img className='background-asset' src={scienceAsset} alt=''/>
                </Form>
            </div>
        </Body>
    );
}