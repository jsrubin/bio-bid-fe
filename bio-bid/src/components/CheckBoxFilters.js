import React, { useState, useEffect } from 'react';
import { GET_STUDIES } from '../queries';
import { useQuery } from '@apollo/react-hooks';

/* STYLE IMPORT */
import '../styles/filter.css';

/* IMAGE IMPORTS */
import { ReactComponent as CloseIcon } from '../images/close.svg';

function CheckboxFilters(props) {
    const [phase1, setPhase1] = useState(false);
    const [phase2, setPhase2] = useState(false);
    const [phase3, setPhase3] = useState(false);
    const { data, loading, error } = useQuery(GET_STUDIES);
    const Phases = {
        none: 0,
        phase1: 1,
        phase2: 2,
        phase3: 3
    };

    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const [active, setActive] = useState(false);
    const Status = {
        none: 0,
        open: 1,
        active: 2,
        closed: 3
    };

    const filterStudiesPhase = (phase) => {
        if (data) {
            switch (phase) {
                case Phases.phase1:
                    return data.studies.filter(study => study.phase === 1);

                case Phases.phase2:
                    return data.studies.filter(study => study.phase === 2);

                case Phases.phase3:
                    return data.studies.filter(study => study.phase === 3);

                default:
                    return [...data.studies];
            }
        }
    }

    const filterStudiesStatus = (status) => {
        if (data) {
            switch (status) {
                case Status.open:
                    return data.studies.filter(study => study.status === "Open");

                case Status.active:
                    return data.studies.filter(study => study.status === "Active");

                case Status.closed:
                    return data.studies.filter(study => study.status === "Closed");

                default:
                    return [...data.studies];
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let phaseList = [];
        let phaseTemp = [];
        let statusList = [];
        let statusTemp = [];

        if (phase1) {
            phaseTemp = filterStudiesPhase(Phases.phase1);
            phaseList.push(...phaseTemp);

        }

        if (phase2) {
            phaseTemp = filterStudiesPhase(Phases.phase2);
            phaseList.push(...phaseTemp);
        }

        if (phase3) {
            phaseTemp = filterStudiesPhase(Phases.phase3);
            phaseList.push(...phaseTemp);
        }

        if (open) {
            statusTemp = filterStudiesStatus(Status.open);
            statusList.push(...statusTemp);

        }

        if (active) {
            statusTemp = filterStudiesStatus(Status.active);
            statusList.push(...statusTemp);
        }

        if (closed) {
            statusTemp = filterStudiesStatus(Status.closed);
            statusList.push(...statusTemp);
        }

        const finalList = [];

        if (phaseList.length > 0) {
            for (let i = 0; i < (phaseList.length + statusList.length); i++) {
                if (phaseList[i] === statusList[i]) {
                    finalList.push(phaseList[i])
                }
                else {
                    const tempList = [phaseList[i], statusList[i]];
                    finalList.push(...tempList);
                }
            }
        }
        else {
            for (let k = 0; k < statusList.length; k++) {
                finalList.push(statusList[k]);
            }
        }
        const returnList = [];

        for (let m = 0; m < finalList.length; m++) {
            if (finalList[m] !== undefined && finalList[m] !== finalList[m + 1]) {
                returnList.push(finalList[m]);
            }
        }
        console.log(returnList)

    }

    return (
        <div id='filter-wrapper' className={(props.open ? 'filter-open' : 'filter-closed')}>
            <div id='filter-header-container'>
                <div id='filter-header-sub-container'>
                    <h1 id='filter-header-text'>Sort and Filter</h1>
                    <p id='filter-header-sub-text'>Select all that applies</p>
                </div>
                <CloseIcon id='close-icon' onClick={() => props.process()} />
            </div>
            <div>
                <p className='cat-header'>Status:</p>
                <input name='open'
                    type='checkbox'
                    checked={open}
                    onChange={() => setOpen(!open)} />
                <label className='cat-item' >Open</label>
                <br />
                <input name='active'
                    type='checkbox'
                    checked={active}
                    onChange={() => setActive(!active)} />
                <label className='cat-item' >Active</label>
                <br />
                <input name='closed'
                    type='checkbox'
                    checked={closed}
                    onChange={() => setClosed(!closed)} />
                <label className='cat-item' >Closed</label>
            </div>
            <hr className='filter-break' />
            <div>
                <p className='cat-header'>Phase:</p>
                <input name='phase1'
                    type='checkbox'
                    checked={phase1}
                    onChange={() => setPhase1(!phase1)} />
                <label className='cat-item' >I</label>
                <br />
                <input name='phase2'
                    type='checkbox'
                    checked={phase2}
                    onChange={() => setPhase2(!phase2)} />
                <label className='cat-item' >II</label>
                <br />
                <input name='phase3'
                    type='checkbox'
                    checked={phase3}
                    onChange={() => setPhase3(!phase3)} />
                <label className='cat-item' >III</label>
            </div>
            <hr className='filter-break' />
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px' }}>
                <button className='final-filter-button' onClick={handleSubmit}>Apply Changes</button>
                <button className='final-filter-button'>Clear all filters</button>
            </div>
        </div>
    );
}

export default CheckboxFilters;