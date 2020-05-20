import React, { useState } from 'react';
import { Body, LinkedIn, Button, Form } from './styles';
import scienceAsset from '../../../images/science-asset.svg';
import defaultLogo from '../../../images/default-company-logo.png';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import WarningCard from './WarningCard';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));


export default props => {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);
    const [ importWarning, setImportWarning ] = useState(false);
    const [ data, setData ] = useState({
        name: '',
        website: '',
        linkedin: '',
        overview: '',
        headquarters: '',
        companySize: ''
    })

    const handleImportWarning = () => {
        setImportWarning(true);
        setOpen(true);
    }

    const handleCancelWarningOpen = () => {
        console.log('Cancel Warning')
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

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Body>
            <Backdrop className={classes.backdrop} open={open}>
                <WarningCard close={handleImportWarningClose}/>
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
                <div className='form-wrapper'>
                    <Form>
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
                        <div className='input-wrapper'>
                            <div className='col'>
                                <div className='input-container'>
                                    <label>Company Name</label>
                                    <input
                                        name='name'
                                        value={data.name}
                                        onChange={handleUpdate}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label>LinkedIn</label>
                                    <input
                                        name='linkedin'
                                        value={data.linkedin}
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
                                    <label>Headquarters</label>
                                    <input/>
                                </div>
                                <div className='input-container'>
                                    <label>Company Description</label>
                                    <textarea></textarea>
                                </div>
                                {/* TODO: Company Size Dropdown */}
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
                            <div className='col'>
                                <div className='input-container'>
                                    <label>Regions Covered</label>
                                    <textarea placeholder='region1, region2, region3, ...'></textarea>
                                </div>
                                <div className='input-container'>
                                    <label>Therapeutic Areas </label>
                                    <textarea placeholder='area1, area2, area3, ...'></textarea>
                                </div>
                                <div className='input-container'>
                                    <label>Services</label>
                                    <textarea placeholder='service1, service2, service3, ...'></textarea>
                                </div>
                                <div className='input-container'>
                                    <label>Specialties</label>
                                    <textarea placeholder='specialty1, specialty2, ...'></textarea>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <img className='background-asset' src={scienceAsset} alt=''/>
                </div>
            </div>
        </Body>
    );
}