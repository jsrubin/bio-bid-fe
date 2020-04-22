import React, { useState, useEffect } from 'react';
import { GET_STUDIES } from '../../queries';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

/* STYLE IMPORT */
import '../styles/CP-table.css';

/* COMPONENT IMPORTS */
import Row from './CP-table-row';

/* This the core table for the dashboard. All 'rows' will be dynamically generated from the API.
   Will be adjusted to fit a more suitable and reasonable means in the future as time progresses. */
const Table = (props) => {

    const { loading, data, error } = useQuery(GET_STUDIES);

    return(
        <div id='table-wrapper'>
            <div id='table-header-container'>
                <p style={{ width: '6%' }} class='table-header-item'>BIDS</p>
                <p style={{ width: '10%' }} class='table-header-item'>NAME</p>
                <p style={{ width: '20%' }} class='table-header-item'>THERAPEUTIC AREA</p>
                <p style={{ width: '15%' }} class='table-header-item'>PROTOCOL NO./TITLE</p>
                <p style={{ width: '10%' }} class='table-header-item'>PHASE</p>
                <p style={{ width: '15%' }} class='table-header-item'>SERVICE LIST</p>
                <p style={{ width: '10%' }} class='table-header-item'>MODIFIED DATE</p>
                <p style={{ width: '12%', textAlign: 'center' }} class='table-header-item'>ACTIONS</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {data && (props.studies.map(study => 
                    <Row first='first' active={true} name={study.name} status={study.status} thera={study.area} protocol='ABZ-123' proto_title={study.title} phase={study.phase} service_list={study.services} mod_date={moment(study.modified_date).format('LL')} mod_time={moment(study.modified_date).format('LTS')} />
                ))}
            </div>
        </div>
    );

}

export default Table;