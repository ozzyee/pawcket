import styled from "styled-components";
import styles from "./style.config.json"

export const Bio = styled.div`
    line-height: 70%;
    color: ${styles.colors.black};
    margin-bottom: 50px;
    padding: 0 5%;

    .bio{
        text-align: center;
        font-size: 1.2rem;
        line-height: 110%;
        margin-bottom: 50px;
    }
    .placeholder{
        color: rgba(14, 23, 27, 0.5);
    }
    .aboutMe{
        line-height: 110%;
    }
`
export const Desktop = styled.div`

.desktop{
        display: none;
    }

    @media (min-width: ${styles.breakPoints.m}) {
        
        .desktop{
            display: grid;
        }
    }
`
export const topLeft = styled.span`

`

export const Mobile = styled.span`

    @media (min-width: ${styles.breakPoints.m}) {
        
        .mobile{
            display: none;
        }
    }
`

