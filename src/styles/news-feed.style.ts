import styled from "styled-components";
import styles from "./style.config.json";

export const Desktop = styled.div`
`

export const Mobile = styled.div`
   .nav {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
   }
   @media (min-width: ${styles.breakPoints.m}) {
      .mobile {
         display: none;
      }
   }
`

export const Top = styled.div`
outline : 5px solid green;
height: 40%;

.nav {
   position: absolute;
   top: 0;
   right: 0;
   width: 40%;
   border-radius: 0 0 0 50px;
}
`

export const TopRight = styled.div`
outline : 5px solid red;
height: 100%;
width: 60%;
`

export const TopLeft = styled.div`
outline : 5px solid yellow;
height: 100%;
width: 40%;
`

export const Bottom = styled.div`
outline : 5px solid blue;
height: 60%;
`

export const CardList = styled.ol`
   display: flex;
   flex-direction: column;
   list-style-type: none;
   align-items: center;
   justify-content: center;
   padding: 0px;
`;

