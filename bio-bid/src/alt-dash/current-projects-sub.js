import React from 'react';

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

    const createStudy = () => {

        // Placeholder for the create button.

        console.log('Creating new study...');

    }

    return(

        <div id='current-projects-wrapper'>
            <div id='current-projects-header'>
                <p id='current-projects-header-text-1'>Current Projects</p>
                <div id='input-container'>
                    <form style={{ display: 'flex' }}>
                        <SearchIcon id='search-icon' />
                        <input id='search-input' placeholder='Enter Keyword' />
                        <button id='search-button'>Search</button>
                    </form> 
                </div>
                <div id='current-projects-header-2'>
                    <AddIcon style={{ width: '16px', height: '16px', margin: '8px 8px 8px 12px' }} />
                    <p id='current-projects-header-text-2' onClick={() => {createStudy()}} >Create new study</p>
                </div>
            </div>
            {/* <SearchBar /> */}
            <Table />
            <Pageination />
        </div>

    );

}

export default CurrentProjects;