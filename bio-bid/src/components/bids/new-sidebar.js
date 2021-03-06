import React, { useState } from 'react';

/* STYLE IMPORT */
import '../../styles/dash-sidebar.css';

/* IMAGE IMPORTS */
import Projects from '../../images/projects.png';
import Settings from '../../images/settings.png';
// import DefaultAvatar from '../images/profile-avatar.png';
import { ReactComponent as ReviewsIcon } from '../../images/reviews-1.svg';
import { ReactComponent as ProfilePic } from '../../images/profile-pic.svg';
import { ReactComponent as PieChartIcon } from '../../images/pie-chart.svg';
import { ReactComponent as DashExpandIcon } from '../../images/dash-expand.svg';
import { ReactComponent as DashCollapseIcon } from '../../images/dash-collapse.svg';
import { ReactComponent as SearchStudiesIcon } from '../../images/search-studies.svg';
import { ReactComponent as RecommendationsIcon } from '../../images/recommendations.svg';
import './styles/global.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* This is the dashboard sidebar. This contains the dashboard navigation. */
function DashSidebar() {

    // True to collapse the side bar, false to open it. This variable is managed by the Dash Sidebar control icons, DashCollapseIcon and DashExpandIcon.
    const [collapsed, setCollapsed] = useState(true);

    return(
        <div id='sidebar-wrapper' className={(collapsed ? 'sidebar-collapsed' : '')}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                { collapsed ? <DashExpandIcon className='dash-control-icon' onClick={ () => setCollapsed(!collapsed) } /> : 
                <DashCollapseIcon className='dash-control-icon' onClick={ () => setCollapsed(!collapsed) }/> }
            </div>
            <ProfilePic className={'pfp ' + (collapsed ? 'pfp-collapsed' : '')} />
            {/* <img src={DefaultAvatar} className={'pfp ' + (collapsed ? 'pfp-collapsed' : '')} /> */}
            <p className={'pfp-text ' + (collapsed ? 'pfp-text-collapsed' : '')}>Dr. Venter</p>
            <hr className='menu-bar' />
            <div className='profile-menu-container selected'>
                <img src={Projects} style={{ filter: 'contrast(100%)' }} className={'menu-icon-img ' + (collapsed ? 'menu-icon-img-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Current Projects</p>
            </div>
            <div className='profile-menu-container menu-option-disabled'>
                <PieChartIcon className={'profile-menu-icon ' + (collapsed ? 'menu-icon-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Manage Bids</p>
            </div>
            <div className='profile-menu-container menu-option-disabled'>
                <RecommendationsIcon className={'profile-menu-icon ' + (collapsed ? 'menu-icon-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Recommendations</p>
            </div>
            <div className='profile-menu-container menu-option-disabled'>
                <SearchStudiesIcon className={'profile-menu-icon ' + (collapsed ? 'menu-icon-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Search Studies</p>
            </div>
            <div className='profile-menu-container menu-option-disabled'>
                <ReviewsIcon className={'profile-menu-icon ' + (collapsed ? 'menu-icon-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Reviews</p>
            </div>
            <hr className='menu-bar' />
            <div className='profile-menu-container menu-option-disabled'>
                <img src={Settings} className={'profile-menu-icon ' + (collapsed ? 'menu-icon-collapsed' : '')} />
                <p className={'profile-menu-text ' + (collapsed ? 'menu-text-collapsed' : '')}>Settings</p>
            </div>
            <div className='profile-menu-container menu-option-disabled'>
                <p className='profile-menu-text menu-text-collapsed' style={{ marginLeft: '15px' }}>Log out</p>
            </div>
        </div>
    );

}

export default DashSidebar;