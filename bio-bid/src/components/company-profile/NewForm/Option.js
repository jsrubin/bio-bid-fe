import React, { useState } from 'react';
import { Option, CheckMark } from './styles';

export default ({optionName}) => {
    const [ selected, setSelected ] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected);
        console.log('hello')
    }

    return (
        <Option onClick={toggleSelected} selected={selected}>
            <div className='check-container'>
                <CheckMark/>
            </div>
            <p>{optionName}</p>
        </Option>
    );
}