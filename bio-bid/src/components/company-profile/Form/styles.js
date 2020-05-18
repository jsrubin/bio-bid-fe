import styled from 'styled-components';
import theme from '../../../theme';
import { LinkedinSquare } from '@styled-icons/boxicons-logos'

export const Form = styled.form`
    display: flex;
    width: 100%;
    .body{
        margin: 0 auto;
        width: 80%;
        .header-wrapper{
            display: flex;
            justify-content: space-between;
            h1{
                margin-top: 50px;
                font: ${theme.fontStyling.header3};
            }
            .btn-container{

            }
        }
        .bar{
            width: 100%;
            height: 1px;
            background-color: ${theme.colors.scienceBlue};
        }
    }
`;

export const LinkedIn = styled(LinkedinSquare);