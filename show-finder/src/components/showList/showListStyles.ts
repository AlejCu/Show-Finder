import styled from "styled-components";
import { Theme } from '../../theme';

export const ShowListStyles = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: ${Theme.colors.black};
    padding: 20px 0 20px 0;

    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: inherit;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.9;
            scale: 1.03;
            transition: all 0.2s ease-in-out;
        }

        &:active {
            opacity: 0.8;
            scale: 0.98;
            transition: all 0.1s ease-in-out;
        }
    }


    /* Styling for each search result container */
    .show-margin-container {
        margin: 10px;
    }

    .show_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: 1px solid #000000;
        border-radius: 15px;
        background-color: ${Theme.colors.lightherRed};
        max-width: 245px;
        min-width: 245px;
        min-height: 381px;
        max-height: 381px;
        overflow: hidden;

        img {
            width: 18em;
            height: 25em;
            object-fit: cover;
            border-radius: 5px;
        }

        h1 {
            font-size: 1em;
            margin: 0;
            font-weight: normal;
            color: ${Theme.colors.white};
            margin: 5px;
        }
    }


    /* No image message styling */
    .no-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 25em;
        width: 18em;
        color: ${Theme.colors.white};

        svg {
            font-size: 4em;
            margin-bottom: 10px;
        }
    }

    /* Loading and error messages styling */
    .loading-messages {
        font-size: 1.2em;
        color: ${Theme.colors.black};
        margin: 20px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-family: Poppins, sans-serif;
    }

    /* Loading dots animation */

    .load-anim-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 80px;
    }

   .loading-dots {
        position: relative;
        width: 80px;
        height: 80px;
        mar
    }

    .loading-dots span {
        position: absolute;
        height: 10px;
        width: 10px;
        background: ${Theme.colors.black};
        border-radius: 50%;
        transform: rotate(calc(var(--i) * (360deg / 15))) translateY(35px);
        animation: animate 1.4s linear infinite;
        animation-delay: calc(var(--i) * 0.1s);
        opacity: 1;
    }

    @keyframes animate {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

`;
