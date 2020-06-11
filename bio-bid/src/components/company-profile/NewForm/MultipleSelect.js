import React from 'react';
import { MultipleSelect, DownArrow, Options } from './styles';
import useComponentVisible from '../../../utils/useComponentVisibile';
import Option from './Option';

export default (props) => {
    const { ref , isVisible, setIsVisible} = useComponentVisible(false);

    const toggleOpen = () => {
        setIsVisible(!isVisible);
    }

    const handleStrictSelect = () => {
        console.log('hi')
    }

    return(
        <MultipleSelect>
            <div className='input' onClick={toggleOpen}>
                <p>Select {props.selectName}</p>
                <DownArrow/>
            </div>
            <Options open={isVisible} ref={ref}>
                <Option optionName='N/A' onClick={handleStrictSelect}/>
                <Option optionName='All' onClick={handleStrictSelect}/>
                {props.options && props.options.map(option => {
                    return (
                        <Option optionName={option.name} key={Math.random()}/>
                    );
                })}
            </Options>
        </MultipleSelect>
    )
}