import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_COMPANY_BY_ID } from '../../../queries';
import { ADD_COMPANY } from '../../../mutations';
import { useHistory, useParams } from 'react-router-dom';
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
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    /*
        open - Boolean state for whether the backdrop for warnings/loading should be opened.
        importWarning - Boolean state for warning type when attempting to import
        linkedInError - Boolean state based on if the linkedInUrl in the `linkedin` input field is valid
        appError - Stores any errors that exist in the Form component
    */
    const [ open, setOpen ] = useState(false);
    const [ importWarning, setImportWarning ] = useState(false);
    const [ linkedInError, setLinkedInError] = useState(false);
    const [ appError, setAppError] = useState(null);
    const [ logo, setLogo ] = useState(defaultLogo);

    /*
        useQuery and useMutation
        - useQuery will accept a gql query that is defined in the `src/queries` directory.
            - Conditionally returns a `loading` boolean true/false based on if the query is running
            - Conditionally returns an `error` object if there was an error with the query
            - Conditionally returns the `data` requested by the query if successful
        - useMutation will accept a gql mutation that is defined in the `src/mutations` directory.
            - Returns a functions that can be used to insert data into the mutation as arguments
            - Example: 
                addCompany({ variables: formData }) 
                addCompany({ variables: {name: formData.name, imgURL: formData.imgURL} })
            
    */
    const { loading, error, data } = useQuery(GET_COMPANY_BY_ID, { variables: { id } });
    const [ addCompany ] = useMutation(ADD_COMPANY);

    /*
        formData
        - Inputs in the form components are controlled with `handleUpdate` and `handleMultiUpdate`.
        - Everything is saved in formData state until the component is unMounted 
            or there is a successful submission in `handleSubmit`
    */
    const [ formData, setFormData ] = useState({
        name: '',
        logoURL: '',
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

    /*
        handleImportWarning
        - Checks to se if there is a valid LinkedInURL. The state of `linkedInError` is set
            in a useEffect hook that checks the linkedin input every time it is updated
    */
    const handleImportWarning = () => {
        if(!linkedInError){
            setImportWarning(true);
            setOpen(true);
        }
    }

    /*

    */
    const handleCancelWarning = () => {
        setOpen(true);
    }  

    const handleWarningClose = () => {
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
        // Validation here
        // if(!formData.companySize || !formData.name){
        //     console.log('Error');
        // }
        // Mutation here
        // else{
            addCompany({ variables: {
                name: formData.name,
                logoURL: formData.logoURL,
                website: formData.website,
                linkedin: formData.linkedin,
                overview: formData.overview,
                headquarters: formData.headquarters,
                companySize: formData.companySize
            } })
        // }
    }

    const handleReDirect = () => {
        history.goBack();
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
            if(formData.linkedin.length > 0){
                setLinkedInError(true);
                setAppError('Must enter a valid LinkedIn URL')
            }else{
                setLinkedInError(false);
                setAppError('');
            } 
        }
    }, [ formData.linkedin ])

    useEffect(() => {
        if(props.edit){
            if(data){
                console.log(data.company);
                setFormData({
                    name: data.company.name,
                    logoURL: data.company.logoURL,
                    website: data.company.website,
                    linkedin: data.company.linkedin,
                    overview: data.company.overview,
                    headquarters: data.company.headquarters,
                    companySize: data.company.companySize,
                    services: [],
                    specialties: [],
                    regionsCovered: [],
                    therapeuticAreas: []
                })
            }
            if(error){
                console.log(error);
            }
        }
    }, [ data, error ])

    useEffect(() => {
        if(formData.logoURL){
            setLogo(formData.logoURL);
        }
    }, [ logo ])

    return (
        <Body>
            <Backdrop className={classes.backdrop} open={open}>
                {importWarning ? (
                    <WarningCard close={handleWarningClose} warning='import'/>
                ) : (
                    <WarningCard close={handleWarningClose} warning='cancel' action={handleReDirect}/>

                )}
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
                        <Button onClick={handleCancelWarning} cancel='true'>
                            <p>Cancel</p>
                        </Button>    
                    </div>
                </div>
                <div className='bar'/>
                <Form>
                    <div className='top-row'>
                        <div className='side-bar'>
                            <img src={logo} alt='company'/>
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