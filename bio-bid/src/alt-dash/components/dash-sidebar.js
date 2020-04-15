import React from 'react';

/* STYLE IMPORT */
import '../styles/dash-sidebar.css';

/* IMAGE IMPORTS */
import Projects from '../../images/projects.png';
import Settings from '../../images/settings.png';
import DefaultAvatar from '../../images/profile-avatar.png';
import { ReactComponent as ReviewsIcon } from '../../images/reviews-1.svg';
import { ReactComponent as PieChartIcon } from '../../images/pie-chart.svg';
import { ReactComponent as SearchStudiesIcon } from '../../images/search-studies.svg';
import { ReactComponent as RecommendationsIcon } from '../../images/recommendations.svg';

/* This is the dashboard sidebar. This contains the dashboard navigation. */
function DashSidebar() {

    return(
        <div id='sidebar-wrapper'>
            <img src={DefaultAvatar} id='profile-pic' />
            <p style={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: 'bold', marginLeft: '35px' }}>Profile</p>
            <div className='profile-menu-container selected'>
                
                <img src={Projects} style={{ width: '25px', height: '25px', marginLeft: '13px' }} />
                {/* <PieChartIcon className='profile-menu-icon' /> */}
                <p className='profile-menu-text'>Current Projects</p>
            </div>
            <div className='profile-menu-container'>
                <PieChartIcon className='profile-menu-icon' />
                <p className='profile-menu-text'>Manage Bids</p>
            </div>
            <div className='profile-menu-container'>
                <RecommendationsIcon className='profile-menu-icon' />
                <p className='profile-menu-text'>Recommendations</p>
            </div>
            <div className='profile-menu-container'>
                <SearchStudiesIcon className='profile-menu-icon' />
                <p className='profile-menu-text'>Search Studies</p>
            </div>
            <div className='profile-menu-container'>
                <ReviewsIcon className='profile-menu-icon' />
                <p className='profile-menu-text'>Reviews</p>
            </div>
            <hr  />
            <div className='profile-menu-container'>
                <img src={Settings} style={{ width: '25px', height: '25px', marginLeft: '13px' }} />
                <p className='profile-menu-text'>Settings</p>
            </div>
            <div className='profile-menu-container'>
                <p className='profile-menu-text' style={{ marginLeft: '15px' }}>Log out</p>
            </div>
        </div>
    );

}

export default DashSidebar;