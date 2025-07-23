import styled from "styled-components";
import { Theme } from '../../theme';

export const ShowListStyles = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: ${Theme.colors.black};
    padding-top: 20px;

    .show_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #000000;
        border-radius: 5px;
        margin: 10px;
        background-color: ${Theme.colors.lightRed};
        max-width: 245px;
        min-width: 245px;
        max-height: 381px;
        overflow: hidden;

        a {
            margin: 0;
            padding: 0;
        }

        img {
            width: 18em;
            height: 25em;
            object-fit: cover;
            border-radius: 5px;
        }

        h1 {
            font-size: 1.1em;
            margin: 0;
        }
    }
`;
