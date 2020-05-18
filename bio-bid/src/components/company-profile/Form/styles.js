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
    width: 100%;
    img{
        border-radius: 50%;
        border: 1px solid ${theme.colors.mineShaft};
        width: 200px;
        height: 200px;
        margin: 20px 0;
    }
    .input-wrapper{
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        .input-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 500px;
            margin: 10px 0;
            label{
                font: ${theme.fontStyling.text};
                margin: 0;
            }
            input{
                width: 250px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid ${theme.colors.silver};
                padding-left: 8px;
            }
            textarea{
                resize: none;
                width: 250px;
                height: 100px;
                border-radius: 5px;
                border: 1px solid ${theme.colors.silver};
                padding-left: 8px;
            }
        }
    }
`;

export const LinkedIn = styled(LinkedinSquare)`
    width: 30px;
    color: inherit;
`;