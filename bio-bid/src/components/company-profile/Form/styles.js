import styled from 'styled-components';
import theme from '../../../theme';
import { LinkedinSquare } from '@styled-icons/boxicons-logos'

export const Body= styled.div`
    display: flex;
    width: 100%;
    .body{
        margin: 0 auto;
        width: 80%;
        .header-wrapper{
            margin-top: 50px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1{
                font: ${theme.fontStyling.header2};
                color: ${theme.colors.mineShaft};
            }
            .btn-container{
                display: flex;
                justify-content: flex-end;
                width: 300px;
            }
        }
        .bar{
            width: 100%;
            height: 1px;
            background-color: ${theme.colors.scienceBlue};
        }
        .form-wrapper{
            position: relative;
            height: 800px;
            margin-top: 50px;
            .background-asset{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: 800px;
                opacity: 0.6;
                z-index: -1;
            }
        }
    }
`;

export const Button = styled.div`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid ${props => props.cancel ? theme.colors.sun : theme.colors.scienceBlue};
    background-color: ${props => props.cancel ? theme.colors.sun : theme.colors.scienceBlue};
    color: ${theme.colors.alabaster};
    cursor: pointer;
    p{
        margin-bottom: 0 !important;
        font: ${theme.fontStyling.text};
        color: inherit;
    }
    &:hover{
        background-color: ${theme.colors.alabaster};
        color: ${props => props.cancel ? theme.colors.sun : theme.colors.scienceBlue};
    }
`;

export const Form = styled.form`
    position: absolute;
    z-index: 1;
    display: flex;
    height: calc(100% - 50px);
    .basic-card{
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(250, 250, 250, 0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        img{
            border-radius: 50%;
            border: 1px solid ${theme.colors.mineShaft};
            width: 200px;
            margin: 20px 0;
        }
        label{
            display: flex;
            flex-direction: column;
            width: 90%;
            font: ${theme.fontStyling.text};
            input{
                margin-top: 10px;
                height: 30px;
            }
        }
    }
    .specialties-card{
        width: 500px;
        height: 300px;
        background-color: rgba(250, 250, 250, 0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        margin: 0 30px;
        h2{
            font: ${theme.fontStyling.header3};
        }
    }
    
`;

export const LinkedIn = styled(LinkedinSquare)`
    width: 30px;
    color: inherit;
`;