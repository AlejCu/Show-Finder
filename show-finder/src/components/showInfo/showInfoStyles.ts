import styled, { css } from "styled-components";
import { Theme } from '../../theme';

const showMain = css`
    display: flex;
    flex-direction: column;

    img {
        width: 20em;
        height: 25em;
        object-fit: cover;
        border-radius: 5px;
    }

    p {
        margin: 0;
    }

    #show_description {
        padding-top: 60px;
        font-size: .9em;
    }

    h1 {
        color: ${Theme.colors.lightRed};
        font-size: 1.5em;
        padding-bottom: 20px;
        margin: 0;
    }
`;

export const ShowInfoContainer = styled.div`
    .show_info {
        background-color: ${Theme.colors.black};
        color: ${Theme.colors.white};
        padding: 20px;
        margin: 10px;
        border-radius: 5px;
        ${showMain}
}


#show_main {
    ${showMain}
}


#show_container {
    display: flex;
    flex-direction: row;

    p {
        padding: 20px;
    }
}


#show_details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    margin: 10px;

    h2 {
        margin: 0;
        padding: 0;
        font-size: 1em;
        color: ${Theme.colors.lightRed};
    }


}


.rating_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; // Ensure items are centered

    svg {
        width: 1em;
        height: 1em;
        fill: #fccd32;
        margin-left: 10px;
    }
}


.show_topSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}


/*Cast information*/

#cast_info {
    max-height: 500px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${Theme.colors.lightRed} ${Theme.colors.black};

    img {
        width: 9em;
        height: 9em;
        object-fit: cover;
        border-radius: 5px;
        margin: 5px;
    }


    p {
        text-align: center;
        margin: 0;
    }

}


.cast_photo {
    margin: 10px;
    max-width: 154px;
}


.cast_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#cast_characterName { 
    font-size: .9em;
    padding-top: 8px;
    color: ${Theme.colors.lightRed};
}


/*Episodes Section*/
#show_episodes {
    ${showMain}
    max-height: 500px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${Theme.colors.lightRed} ${Theme.colors.black};

    img {
        width: 35em;
        height: 12em;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 20px;
        max-width: 341px;
    }

    svg {
        width: 1em;
        height: 1em;
        fill: #fccd32;
        margin-left: 10px;
    }

    h2 {
        font-size: 1.4em;
        margin: 0;
        margin-bottom: 20px;
        color: ${Theme.colors.lightRed};
    }

    p {
        margin-bottom: 15px;
    }

    h3 {
        font-size: 1.1em;
        margin: 0;
        margin-bottom: 10px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-bottom: 50px;
    }
}


.episode_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
}

/*Season Selector Styling*/

.season-selector {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
        margin-right: 10px;
        font-size: 1.4em;
        color: ${Theme.colors.lightRed};
        font-family: Poppins, sans-serif;
    }

    select {
        padding: 5px;
        font-size: 1.1em;
        border-radius: 5px;
        border: none;
        background-color: ${Theme.colors.black};
        color: ${Theme.colors.white};
        cursor: pointer;

        &:focus {
            outline: none;
            border: none;
        }

    }
}

/* Responsive styles */
@media screen and (max-width: 1130px) {
    #show_container {
        flex-direction: column;
    }

    .show_picture {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 796px) {
    .show_topSection {
        display: flex;
        flex-direction: column;
    }

    #cast_info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 656px) {

    .episode_container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        img {
            margin-bottom: 20px;
            margin-top: 20px;
        }
    }
}

@media screen and (max-width: 593px) {
    #show_details {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            align-items: center;
            text-align: center;
        }

        p {
            margin-bottom: 10px;
        }

        svg {
            margin-bottom: 10px;
        }
    }

    .footer_img {
        width: 3em;

        &:hover {
            width: 3.2em;
            transition: ease-in-out 0.1s;
        }
    }

    #tvm_logo {
        width: 11em;
    }
}
`;