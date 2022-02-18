import React from "react";
import * as S from "./navbar.style";
import styles from "../../styles/style.config.json";
import { TNavbarProps } from "./navbar.definition";
import NavbarIcon from "../navbar-icon/navbaricon.component";

const icons = [{name : "Feed", direct : "./feed"},{name : "Profile", direct : "./profile"},{name : "Vets", direct : "./vets"}]

export default function Navbar({className, children} : TNavbarProps){

function onClick(){
    console.log("Hello world")
}

return (<S.NavbarDiv
    className={className}
    backgroundColor={"green"}

    ><ul>{icons.map((icon)=>{
        return (
        <div><NavbarIcon onClick={onClick} direct={icon.direct} name={icon.name}>sdij</NavbarIcon></div>)
    })}</ul>
</S.NavbarDiv>)
}