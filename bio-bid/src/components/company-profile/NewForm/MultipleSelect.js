import React, { useState } from 'react';
import { MultipleSelect, DownArrow, Options } from './styles';
import useComponentVisible from '../../../utils/useComponentVisibile';

export default (props) => {
    const { ref , isVisible, setIsVisible} = useComponentVisible(false);

    const toggleOpen = () => {
        setIsVisible(!isVisible);
    }

    return(
        <MultipleSelect>
            <div className='input' onClick={toggleOpen}>
                <p>Select {props.selectName}</p>
                <DownArrow/>
            </div>
            <Options open={isVisible} ref={ref}>
                <div className='option'><p>N/A</p></div>
                <div className='option'><p>All</p></div>
                {props.options && props.options.map(option => {
                    return <div className='option'><p>{option.name}</p></div>
                })}
            </Options>
        </MultipleSelect>
    )
}