import React, { useState, useEffect } from 'react';
import { Body, LinkedIn, Button, Form } from './styles';
import scienceAsset from '../../../images/science-asset.svg';
import defaultLogo from '../../../images/default-company-logo.png';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import WarningCard from './WarningCard';
import MultipleInput from './MultipleInput';
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
    const [ data, setData ] = useState({
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
    const [ linkedInError, setLinkedInError] = useState(false);
    const [ error, setError] = useState(null);

    const handleImportWarning = () => {
        if(data.linkedin){
            setImportWarning(true);
            setOpen(true);
        }else{
            setLinkedInError(true);
            setError('Must enter a valid LinkedIn URL')
        }
        
    }

    const handleImportWarningClose = () => {
        setImportWarning(false);
        setOpen(false);
    }

    const handleUpdate = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleMultiUpdate = (name, element) => {
        setData({
            ...data,
            [name]: [element]
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
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
        if(data.linkedin){
            setLinkedInError(false);
            setError('');
        }
    }, [data.linkedin])

    return (
        <Body>
            <Backdrop className={classes.backdrop} open={open}>
                {importWarning ? <WarningCard close={handleImportWarningClose}/> : null}
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
                                    value={data.name}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Website</label>
                                <input
                                    name='website'
                                    value={data.website}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Company Description</label>
                                <textarea
                                    name='overview'
                                    value={data.overview}
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
                                        value={data.linkedin}
                                        onChange={handleUpdate}
                                        style={{ 
                                            borderColor: linkedInError ? 'red' : theme.colors.silver,
                                        }}
                                    />
                                    <p className='error'>{error}</p>
                                </div>
                            </div>
                            <div className='input-container'>
                                <label>Headquarters</label>
                                <input
                                    name='headquarters'
                                    value={data.headquarters}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Company Size</label>
                                <select 
                                    name='companySize' 
                                    value={data.companySize}
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