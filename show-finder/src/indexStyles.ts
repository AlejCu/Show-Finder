import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';
const poppinsBold = process.env.PUBLIC_URL + '/assets/fonts/Poppins-Bold.ttf';
const poppinsRegular = process.env.PUBLIC_URL + '/assets/fonts/Poppins-Regular.ttf';

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        src: url('${poppinsBold}');
    }

    @font-face {
        font-family: 'Poppins-regular';
        src: url('${poppinsRegular}');
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