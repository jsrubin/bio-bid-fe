import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const InputWrapper = styled.form`
    width: 250px;
    height: 30px;
    h3 {
        margin-top: 20px;
        font: ${theme.fontStyling.text};
    }
    .preview-container{
        width: 100%;
        min-height: 50px;
        background-color: ${theme.colors.alabaster};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        .preview-element{
            padding: 0 10px;
            margin: 5px;
            height: 30px;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: ${theme.colors.silver};
            p{
                margin: 0;
            }
            .close-btn{
                background-color: ${theme.colors.scorpion};
                margin-left: 5px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                p{
                    color: ${theme.colors.silver};
                    margin: 0;
                    padding: 0;
                    font-size: 10px;
                    margin-right: 1px;
                }
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }
`;

const DropDown = styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    width: 250px;
    min-height: 40px;
    background-color: ${theme.colors.alabaster};
    .suggestion{
        cursor: pointer;
        display: flex;
        align-items: center;
        &:hover{
            background-color: ${theme.colors.silver};
        }
        p{
            margin: 0;
            padding: 0;
            padding: 10px 0;
            padding-left: 10px;
        }
    }
    .no-suggestion{
        display: flex;
        align-items: center;
        p{
            margin: 0;
            padding: 0;
            padding: 10px 0;
            padding-left: 10px;
        }
    }
`;

export default props => {
    const [ open, setOpen ] = useState(false);
    const [ preview, setPreview ] = useState([]);
    const [ custom, setCustom ] = useState('');

    const handleFocus = () => {
        setOpen(true);
    }

    const handleBlur = () => {
        setTimeout(() => {
            setOpen(false);
        }, 200)
        
    }

    const handleSelect = name => {
        console.log('Selected ', name)
        setPreview([
            ...preview,
            name
        ])
    }

    const handleChange = e => {
        setCustom(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setPreview([
            ...preview,
            custom
        ])
        setCustom('');
        setOpen(false);
    }

    const handleDelete = name => {
        console.log(name);
        setPreview(preview.filter(element => element !== name));
    }

    useEffect(() => {

    }, [preview])

    return (
        <InputWrapper onSubmit={handleSubmit}>
            <input onFocus={handleFocus} onBlur={handleBlur} name={props.name} value={custom} onChange={handleChange} autoComplete='off'></input>
            <DropDown open={open}>
                {props.suggestions && props.suggestions.map(suggestion => {
                    return <div className='suggestion' key={suggestion.name} onClick={() => handleSelect(suggestion.name)}>
                        <p value={suggestion.name}>{suggestion.name}</p>
                    </div>
                })}
                {!props.suggestions && (
                    <div className='no-suggestion'>
                        <p>No suggestions available</p>
                    </div>
                )}
            </DropDown>
            <h3>Preview</h3>
            <div className='preview-container'>
                {preview && preview.map(element => {
                    return <div className='preview-element' key={element}>
                        <p>{element}</p>
                        <div className='close-btn' onClick={() => handleDelete(element)}>
                            <p>X</p>
                        </div>
                    </div>
                })}
            </div>
        </InputWrapper>
    )
}