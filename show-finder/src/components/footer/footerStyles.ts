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

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
            transition: ease-in-out 0.1s;
        }
    }

.footer_img {
    width: 4em;
    fill: ${Theme.colors.white};
    margin-left: 10px;
    margin-right: 20px;

    &:hover {
        fill: #0077B5;
        cursor: pointer;
        transform: scale(1.1);
        transition: ease-in-out 0.1s;
    }
}
`;