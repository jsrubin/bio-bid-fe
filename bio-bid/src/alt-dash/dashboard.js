import React from 'react';

/* COMPONENT IMPORTS */
import Nav from './components/nav';
import DashSidebar from './components/dash-sidebar';
import CurrentProjects from '../alt-dash/current-projects-sub';

/* This is a main complete page, the dashboard page. Contains all elements minus state maintance. Gotta sleep sometime. */
function Dashboard() {

    return( 
        <div style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', minHeight: '100%' }}>
            <Nav />
            <div id='dash-container' style={{minHeight: 'calc(100% - 50px)', minHeight: 'calc(100% - 50px)', display: 'flex'}}>
                <DashSidebar />
                <div style={{ border: '1px solid #CAC7CB', minHeight: '100%', width: '1px' }}></div>
                <div id='pageable-container' style={{ width: '100%' }}>
                    <CurrentProjects />
                </div>
            </div>
        </div>

    );

}

export default Dashboard;