import React, { useState } from 'react';
import NavBar from './NavBar';
import { Dashboard } from './styles';

export default () => {
    const [selected, setSelected ] = useState('0');

    const changeSelected = num => {
        setSelected(num);
    }

    return (
        <Dashboard>
            <NavBar selected={selected} changeSelected={changeSelected}/>
            <div className='main'>
                {
                    selected === '0' ? <h1>Admin</h1> : null ||
                    selected === '1' ? <h1>Requests</h1> : null ||
                    selected === '2' ? <h1>Info</h1> : null
                }
            </div>
        </Dashboard>
    );
}