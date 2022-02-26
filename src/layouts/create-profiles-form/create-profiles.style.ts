import styled, { CSSProperties } from "styled-components";
import styles from "../../styles/style.config.json";
import { TCreateProfileProps } from "./create-profiles.definition";


export const CrossFrame = styled.span<TCreateProfileProps>`
   width:150px;
   height: 150px;
   background-color: red;
   background: url(${props => props.background});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));

   ::after{
       content: ${props => props.foreground};
       position: absolute;
       font-weight: 100;
       font-size: 8em;
       color: white;
       ${props => props.width && ({
        width: props.width})}
       ${props => props.height && ({
        height: props.height})}
    }
`;

export const SkipStyle: CSSProperties = {
    fontFamily: `"Poppins", sans-serif`,
    fontSize:"1.5em",
    textDecoration:"underline",
    color: "white",
    position: "absolute",
    top: "-300px",
    right: "30px"

};

export const ButtonsWrapper: CSSProperties = {
    width: "100%",
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

