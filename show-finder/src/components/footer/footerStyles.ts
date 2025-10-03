import styled from 'styled-components';
import { Theme } from '../../theme';

export const FooterStyles = styled.footer`
    background-color: ${Theme.colors.black};
    color: ${Theme.colors.white};
    height: 120x;
    padding: 20px;
    font-size: .9em;
    display: flex;
    justify-content: space-between;
    font-family: Poppins-regular, sans-serif;
    font-display: swap;

    
    .footer_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
    
    .footer_right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;;
        flex-direction: row;
    }
}

    #tvm_logo {
        width: 15em;
        transition: ease-in-out 0.2s;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
            transition: ease-in-out 0.2s;
        }
    }

.footer_img {
    color: ${Theme.colors.white};
    margin-left: 10px;
    margin-right: 20px;
    transition: ease-in-out 0.2s; 

    svg {
        width: 4em;
        height: 4em;
    }

    &:hover {
        color: ${Theme.colors.lightRed};
        cursor: pointer;
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }
}

`;