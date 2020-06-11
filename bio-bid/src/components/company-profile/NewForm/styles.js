import styled from 'styled-components';
import theme from '../../../theme';
import { Warning } from '@styled-icons/entypo/';
import { ArrowIosBackOutline, ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/';

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        width: 100%;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .header-content{
            width: 90%;
            h2{
                font: ${theme.fontStyling.header2};
                color: ${theme.colors.scienceBlue};
            }
            .btn-container{
                display: flex;
                cursor: pointer;
                color: ${theme.colors.silver};
                width: 60px;
                .grey{
                    color: inherit;
                    margin: 0;
                    margin-bottom: 2px;
                }
                &:hover{
                    color: ${theme.colors.scienceBlue};
                }
            }
        }
        
    }
    .form-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 800px;
    }
    h3{
        font: ${theme.fontStyling.header3};
        color: ${theme.colors.mineShaft};
    }
    .text, label{
        font: ${theme.fontStyling.text};
        color: ${theme.colors.mineShaft};
        margin: 0;
    }
    .import-container{
        margin-top: 20px;
        width: 100%;
        box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
        padding: 20px;
        .warning-container{
            display: flex;
            align-items: center;
            margin: 20px 0;
        }
    }
`;

export const Basic = styled.div`
    margin-top: 20px;
    width: 100%;
    box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
    padding: 20px;
    .form-wrapper{
        display: flex;
        width: 100%;
        justify-content: center;
        .form{
            width: 90%;
            .row{
                display: flex;
                justify-content: space-between;
                .input-box{
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    margin: 10px 0;
                    input{
                        border: 1px solid ${theme.colors.silver};
                        height: 30px;
                        border-radius: 5px;
                        outline: none;
                        padding: 7px;
                        &:focus{
                            box-shadow: 0 0 5px ${theme.colors.scienceBlue};
                        }
                    }
                    textarea{
                        resize: none;
                        height: 150px;
                        border-radius: 5px;
                        border: 1px solid ${theme.colors.silver};
                        padding-left: 7px;
                        outline: none;
                        &:focus{
                            box-shadow: 0 0 5px ${theme.colors.scienceBlue};
                        }
                    }
                    select{
                        cursor: pointer;
                        height: 30px;
                        border-radius: 5px;
                        border: 1px solid ${theme.colors.silver};
                        outline: none;
                        background-color: #FFFFFF;
                        &:focus{
                            box-shadow: 0 0 5px ${theme.colors.scienceBlue};
                        }
                    }
                }
            }
        }
    }
`;

export const MultipleSelect = styled.div`
    .input{
        cursor: pointer;
        border: 1px solid ${theme.colors.silver};
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding: 7px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            margin: 0;
        }
    }
`;

export const Options = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    position: absolute;
    background-color: ${theme.colors.alabaster};
    width: 300px;
    z-index: 999;
    flex-direction: column;
    border: 1px solid  ${theme.colors.silver};
    .option{
        cursor: pointer;
        height: 30px;
        &:hover{
            background-color: ${theme.colors.silver};
        }
        p{
            margin: 0;
        }
    }
`;

export const Services = styled.div`
    margin-top: 20px;
    width: 100%;
    box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
    padding: 20px;
`;

export const WarningCard = styled.div`
    width: 500px;
    padding: 20px;
    background-color: ${theme.colors.alabaster};
    h3{
        font: ${theme.fontStyling.header3};
        color: ${theme.colors.mineShaft};
    }
    .text{
        font: ${theme.fontStyling.text};
        color: ${theme.colors.mineShaft};
        margin-bottom: 20px;
    }
    .btn-container{
        display: flex;
        justify-content: flex-end;
    }
`;

export const Button = styled.div`
    width: 160px;
    height: 30px;
    background-color: ${props => 
        props.color === 'sun' ? theme.colors.sun : null ||
        props.color === 'laPalma' ? theme.colors.laPalma : null ||
        props.color === 'scienceBlue' ? theme.colors.scienceBlue : null ||
        props.color === 'alabaster' ? theme.colors.alabaster : null
    };
    border: 1px solid ${props =>
        props.color === 'sun' ? theme.colors.sun : null ||
        props.color === 'laPalma' ? theme.colors.laPalma : null ||
        props.color === 'scienceBlue' ? theme.colors.scienceBlue : null ||
        props.color === 'alabaster' ? theme.colors.alabaster : null
    };
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.alabaster};
    margin-left: ${props => props.marginLeft};
    p{
        margin: 0;
        font: ${theme.fontStyling.text};
    }
    &:hover{
        background-color: ${theme.colors.alabaster};
        color: ${props => 
            props.color === 'sun' ? theme.colors.sun : null ||
            props.color === 'laPalma' ? theme.colors.laPalma : null ||
            props.color === 'scienceBlue' ? theme.colors.scienceBlue : null ||
            props.color === 'alabaster' ? theme.colors.alabaster : null
        };
    }
`;

export const Bar = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${props => 
        props.color === 'sun' ? theme.colors.sun : null ||
        props.color === 'laPalma' ? theme.colors.laPalma : null ||
        props.color === 'scienceBlue' ? theme.colors.scienceBlue : null ||
        props.color === 'silver' ? theme.colors.silver : null
    };
`;

export const WarningIcon = styled(Warning)`
    width: 30px;
    color: ${theme.colors.sun};
    margin-right: 10px;
`;

export const Arrow = styled(ArrowIosBackOutline)`
    width: 20px;
    color: inherit;
`;

export const DownArrow = styled(ArrowIosDownwardOutline)`
    width: 20px;
    color: ${theme.colors.mineShaft};
`;