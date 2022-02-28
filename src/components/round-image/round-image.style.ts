import { TRoundImageProps } from "./round-image.definition";
import styled from "styled-components";

export const RoundPhoto = styled.div<TRoundImageProps>`
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`