import styled from 'styled-components';
import theme from '../../../theme';
import { Web } from '@styled-icons/foundation';
import { LinkedinSquare } from '@styled-icons/boxicons-logos';

export const Details = styled.section`
    header{
        width: 100%;
        height: 6rem;
        display: flex;
        justify-content: center;
        background-color: ${theme.colors.scienceBlue};
        .header-container{
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .company-name{
                display: flex;
                align-items: center;
                h2{
                    margin: 0;
                    margin-right: 10px;
                    font: ${theme.fontStyling.header2};
                    color: ${theme.colors.alabaster};
                }
            }
            .btn-container{
                display: flex;
            }
        }
        a{
            text-decoration: none;
        }
    }
    .flex-wrapper{
        display: flex;
        justify-content: center;
        width: 100%;
        .basic-container{
            width: 80%;
            min-height: 800px;
            display: flex;
            justify-content: space-between;
            .basic-sidebar{
                width: 350px;
                height: 100%;
                margin-top: 50px;
                background-color: ${theme.colors.alabaster};
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 300px;
                    margin-top: 10px;
                }
                .nav-container{
                    margin-top: 10px;
                    width: 300px;
                    .link{
                        display: flex;
                        width: 250px;
                        align-items: center;
                        
                    }
                }
                .overview{
                    width: 300px;
                    h3{
                        text-align: left;
                        font: ${theme.fontStyling.header3};
                        margin: 0;
                        margin-top: 10px;
                    }
                    p{
                        margin: 0;
                        padding: 10px 0;
                        font: ${theme.fontStyling.text};
                    }
                }
            }
            .specifics{
                width: 40%;
                height: 100%;
                margin-top: 50px;
                background-color: ${theme.colors.alabaster};
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: column;
                align-items: center;
                h3{
                    margin-top: 10px;
                    font: ${theme.fontStyling.header3};
                }
                .bar{
                    height: 1px;
                    background-color: ${theme.colors.silver};
                    width: 350px;
                    margin: 10px 0;
                }
                .regions{
                    width: 350px;
                }
                .therapeutic-areas{
                    width: 350px;
                }
                .services{
                    width: 350px;
                }
            }
            .reviews{
                width: 400px;
                height: 100%;
                margin-top: 50px;
                background-color: ${theme.colors.alabaster};
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: column;
                h3{
                    margin: 10px 25px;
                    font: ${theme.fontStyling.header3};
                }
            }
        }
    }
`;

const handleColor = color => {
    switch(color){
        case 'delete':
            return theme.colors.torchRead;
        case 'edit':
            return theme.colors.silver;
        default:
            return theme.colors.alabaster;
    }
}

export const Button = styled.div`
    width: ${props => props.lg ? '150px' : '100px'};
    margin: 0 5px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${props => handleColor(props.color)};
    background-color: ${props => handleColor(props.color)};
    cursor: pointer;
    p{
        margin: 0;
        font: ${theme.fontStyling.text};
        color: ${props => props.color ? theme.colors.alabaster : theme.colors.scienceBlue};
    }
    &:hover{
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
`;

export const Website = styled(Web)`
    width: 30px;
    color: ${theme.colors.mineShaft};
    margin-right: 5px;
`;

export const LinkedIn = styled(LinkedinSquare)`
    width: 30px;
    color: ${theme.colors.mineShaft};
    margin-right: 5px;
`;