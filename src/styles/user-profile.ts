import styled, {css} from "styled-components";
import styles from "./style.config.json"

export const PetsSection = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 150px;
    place-items: center;
    margin-bottom: 30px;

    button{
        grid-column: span 2;
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }

`

export const InfoSection = styled.div`
    line-height: 70%;
    color: ${styles.colors.black};
    margin-bottom: 50px;
    padding: 0 5%;

    .bio{
        text-align: center;
        font-size: 1.2rem;
        line-height: 110%;
    }
    .placeholder{
        color: rgba(14, 23, 27, 0.5);
    }
`