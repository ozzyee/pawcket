import { TRoundImageProps } from "./round-image.definition";
import styled from "styled-components";

export const RoundPhoto = styled.div<TRoundImageProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: red;
`