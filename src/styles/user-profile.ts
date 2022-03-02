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
export const Mobile = styled.span`

    @media (min-width: ${styles.breakPoints.m}) {
        
        .mobile{
            display: none;
        }
    }
`

export const Desktop = styled.div`

.desktop{
        display: none;
    }

    @media (min-width: ${styles.breakPoints.m}) {
        
        .desktop{
            display: flex;
        }
    }
`
export const TopLeft = styled.div`
    float: left;
    max-width: 50%;
    max-height: 50%;
    width:50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .name{
        color:${styles.colors.black};
        font-weight: 800;
        transform: scale(1);
    }
`
export const TopRight = styled.div`
    float: right;
    max-width: 50%;
    max-height: 50%;
    width:50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bio{
        text-align: center;
        color:${styles.colors.black};
        font-weight: 500;
        padding:5%;
    }

    .desktopNav{
        position: absolute;
        top: 0;
        right: 0;
        width: 40%;
        padding: 0;
        border-radius: 0% 0% 0% 50px;

    }
`
export const Bottom = styled.div`
    float: left;
    width:100%;
    height: 50%;

    .separator{
        width: 90%;
        margin: 0 5%;
        position: relative;
        z-index: 5;
    }
    .placeholder{
        color: rgba(14, 23, 27, 0.5);
    }

    .desktopPassport{
        display: grid;
        overflow: scroll;
        height: 90%;
        overflow-x: hidden;
        margin-top: 0;
        transform: translatey(-5%);
        line-height: 0%;
    }

    .desktopPassport::-webkit-scrollbar {
        width: 0px;
    }
    
    .desktopPassport:hover::-webkit-scrollbar {
        width: 6px;
    }

    .desktopPassport::-webkit-scrollbar-track{
        background: transparent;
        border-radius: 50px;
    }
    

    .desktopPassport::-webkit-scrollbar-thumb {
        background-color: ${styles.colors.primary};
        border-radius: 50px;
    }
`