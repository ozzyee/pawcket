import styled, { CSSProperties } from "styled-components";
import styles from "../../styles/style.config.json";
import { TCreateProfileProps, TGlowingLine } from "./create-profiles.definition";


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

export const GlowingLine = styled.div<TGlowingLine>`
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: grid;
    place-items: center;
    margin-top: 15px;
    ::before{
        content: "";
        position: relative;
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${styles.colors.primary};
        box-shadow: 0 4px 4px rgba(255, 191, 31, 0.7);
    }
    ::after{
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        padding: 0 7px 0 7px;
        content: "${props => props.separatorText}";
        transform: translateY(-55%);
        background-color: white;
        color: ${styles.colors.primary};
        display: block;
    }
`
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

