import React, { useEffect, useState } from 'react';
import { GET_STUDIES } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import * as JsSearch from 'js-search';

/* STYLE IMPORT */
import './styles/current-projects.css';

/* COMPONENT IMPORTS */
import SearchBar from './components/CP-search-bar';
import Table from './components/CP-table';
import Pageination from './components/CP-pageination-bar';

/* IMAGE IMPORTS */
import { ReactComponent as AddIcon } from '../images/add-button-1.svg';
import { ReactComponent as SearchIcon } from '../images/search.svg';

/* This is one of the sub pages for the dashboard. It features a table of the current projects. */
function CurrentProjects() {

    const { loading, data, error } = useQuery(GET_STUDIES);

    const [studies, setStudies] = useState(undefined);
    const [value, setValue] = useState('');

    const search = new JsSearch.Search('name');

    search.addIndex('name');
    search.addIndex('area');
    search.addIndex('protocol_number');
    search.addIndex('title');

    const createStudy = () => {

        // Placeholder for the create button.

        console.log('Creating new study...');

    }

    const handleSearch = (event) => {

        event.preventDefault();

        if (value.length <= 0)
            setStudies(data.studies);
        else
            setStudies(search.search(value));

    }

    const processSearch = (event) => {

        event.preventDefault();

        setValue(event.target.value);

        if (value.length <= 0)
            setStudies(data.studies);
        else
            setStudies(search.search(value));

    }

    useEffect(() => {

        if (data !== undefined) {

            search.addDocuments(data.studies);

            console.log(studies);

            if (studies === undefined)
                setStudies(data.studies);

            if (value !== undefined) {

                console.log(search.search(value));

            }

        }

    });

    return(

        <div id='current-projects-wrapper'>
            <div id='current-projects-header'>
                <p id='current-projects-header-text-1'>Current Projects</p>
                <div id='input-container'>
                    <form onSubmit={event => handleSearch(event)} style={{ display: 'flex' }}>
                        <SearchIcon id='search-icon' />
                        <input onChange={event => processSearch(event)} id='search-input' placeholder='Enter Keyword' />
                        <button id='search-button'>Search</button>
                    </form> 
                </div>
                <div id='current-projects-header-2'>
                    <AddIcon style={{ width: '16px', height: '16px', margin: '8px 8px 8px 12px' }} />
                    <p id='current-projects-header-text-2' onClick={() => {createStudy()}} >Create new study</p>
                </div>
            </div>
            {/* <SearchBar /> */}
            <Table studies={studies}/>
            {/* <Pageination /> */}
        </div>

    );

}

export default CurrentProjects;