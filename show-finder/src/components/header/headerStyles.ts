import styled from 'styled-components';
import { Theme } from '../../theme';

export const HeaderStyles = styled.header`
    background-color: ${Theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
        text-decoration: none;
    }

    h1 {
        color: ${Theme.colors.red};
        margin: 0;
        font-weight: 700;
    }

    #search_section {
        background-color: ${Theme.colors.black};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        padding: 10px;

        input {
            width: 80%;
            padding: 10px;
            border: 1px solid #000000;
            border-radius: 5px;
        }

        button {
            padding: 10px;
            border: 1px solid ${Theme.colors.red};
            border-radius: 5px;
            background-color: ${Theme.colors.red};
            color: ${Theme.colors.black};
            margin-left: 10px;
            transition: ease-in-out 0.2s;

            &:hover {
                background-color: ${Theme.colors.white};
                color: ${Theme.colors.black};
                border: 1px solid ${Theme.colors.black};
                cursor: pointer;
                transform: scale(1.1);
                transition: ease-in-out 0.2s;
            }

            &:active {
                transform: scale(0.98);
            }
        }
    }
}
`;