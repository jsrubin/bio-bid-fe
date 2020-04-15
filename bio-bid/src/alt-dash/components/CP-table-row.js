import React, { useEffect } from 'react';

/* STYLE IMPORT */
import '../styles/CP-table-row.css';

/* IMAGE IMPORTS */
import { ReactComponent as BubbleActive } from '../../images/bubble-active.svg';
import { ReactComponent as BubbleInactive } from '../../images/bubble-inactive.svg';
import { ReactComponent as Edit } from '../../images/edit-2.svg';
import { ReactComponent as Delete } from '../../images/delete-2.svg';
import { ReactComponent as Actions } from '../../images/action-menu-1.svg';

/* This is the heart of the table component. It is designed specifically to match
   deminsions with its parent. Please do not modify the numbers. */
const CPTableRow = (props) => {

    const editStudy = () => {

        // Placeholder for the edit button.

        console.log('Editing...');

    }

    const deleteStudy = () => {

        // Placeholder for the delete button. #BFBFBF

        console.log('Deleting...');

        // <BubbleActive id='bubble' class='cat-item' style={{ width: '8%' }} />
        // <BubbleInactive id='bubble' class='cat-item' style={{ width: '8%' }} />

    }

    return(
        <div id='table-row-wrapper' class={'' + props.first}>
            <div class='cat-item' style={{ width: '7%' }} >
                { props.active == true && <p class='active-item'>Open</p> }
                { props.active == false && <p class='active-item'>Closed</p> }
            </div>
            <div id='name-cat-container' class='cat-item' style={{ width: '10%' }} >
                <p id='name-text-1'>{props.name}</p>
                <p id='name-text-2'>{props.status}</p>
            </div>
            <p class='cat-item' style={{ width: '20%', fontFamily: 'Inter' }} >{props.thera}</p>
            <div id='proto-cat-container' style={{ width: '15%', textAlign: 'center' }} >
                <p id='proto-text-1'>{props.protocol} <br /></p>
                <div id='proto-sub-container' style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <p id='proto-text-2'>Title:</p>
                    <p id='proto-text-3'>{props.proto_title}</p>
                </div>
            </div>
            <p class='cat-item' id='phase-cat-item' style={{ width: '10%', fontFamily: 'Inter' }} >{props.phase}</p>
            <p class='cat-item' id='service-cat-item' style={{ width: '15%', fontFamily: 'Inter' }} >{props.service_list}</p>
            <div id='mod-cat-container' class='cat-item' style={{ width: '10%' }} >  
                <p id='mod-text-1'>{props.mod_date}</p>
                <p id='mod-text-2'>{props.mod_time}</p>
            </div>
            <div id='action-cat-container' class='cat-item' style={{ width: '12%' }} >
                {/* <Edit class='action-item' onClick={() => {editStudy()}} />
                <Delete class='action-item' onClick={() => {deleteStudy()}} /> */}
                <Actions class='action-item' />
            </div>
        </div>
    );

}

export default CPTableRow;