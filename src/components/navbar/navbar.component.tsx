import React from "react";
import * as S from "./navbar.style";
import styles from "../../styles/style.config.json";
import { TNavbarProps } from "./navbar.definition";
import NavbarIcon from "../navbar-icon/navbaricon.component";

const icons = ["Hello", "I", "Am", "Tired"]

export default function Navbar({className, children} : TNavbarProps){

function onClick(){
    console.log("Hello world")
}

return (<S.NavbarDiv
    className={className}
    backgroundColor={"green"}

    ><ul>{icons.map(()=>{

        return (
        <div><NavbarIcon onClick={onClick}>sdij</NavbarIcon></div>)
    })}</ul>
</S.NavbarDiv>)
}