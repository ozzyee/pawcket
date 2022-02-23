import React from "react";
import { TSvgProps } from "./svg-canvas.definition";

export function SvgCanvas({
    path,
    w,
    h,
}: TSvgProps) {
    const styles={
        content: `url(${path})`,
        width:150,
        height: 150
    }
    const stylesSvg={
        width:150,
        height: 150
    }
    return(
        <svg style={stylesSvg}>
            <path style={styles}></path>
        </svg>
    )
}