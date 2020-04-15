import React from 'react';

/* STYLE IMPORT */
import '../styles/CP-search-bar.css';

/* IMAGE IMPORTS */
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SortIcon } from '../../images/sort.svg';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';

/* Search bar component. */
function SearchBar() {

    const sortResults = () => {

        // Placeholder for the sort button.

        console.log('Sorting...');

    }

    const filterResults = () => {

        // Placeholder for the filter button.

        console.log('Filtering...');

    }

    return(
        <div id='search-bar-wrapper'>
            <div id='input-container'>
                <form style={{ display: 'flex' }}>
                    <SearchIcon id='search-icon' />
                    <input id='search-input' placeholder='Enter Keyword' />
                    <button id='search-button'>Search</button>
                </form> 
            </div>
            <div id='controls-wrapper'>
                <div class='controls-container'>
                    <SortIcon class='controls-icon' onClick={() => {sortResults()}} />
                    <p class='controls-text' onClick={() => {sortResults()}} >Sort</p>
                </div>
                <div class='controls-container'>
                    <FilterIcon class='controls-icon' onClick={() => {filterResults()}} />
                    <p class='controls-text' onClick={() => {filterResults()}} >Filter</p>
                </div>
            </div>
        </div>
    );

}

export default SearchBar;