import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        src: url('../assets/fonts/Poppins-Bold.ttf');
    }

    @font-face {
        font-family: 'Poppins-regular';
        src: url('../assets/fonts/Poppins-Regular.ttf');
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${Theme.colors.white};
        font-family: Poppins-regular, sans-serif;
        overflow-y: scroll;
        overflow-x: hidden;
        font-size: 14px;
    }

    h1 {
        font-family: Poppins, sans-serif;
    }


    main {
        min-height: 80vh;
    }

    
`;