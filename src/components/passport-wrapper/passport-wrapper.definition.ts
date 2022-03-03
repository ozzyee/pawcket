import { ReactChild } from "react"

export type TPassportWrapper = {
    separator?:boolean,
    separatorText?: string,
    children: ReactChild[] | ReactChild,
    className?: string
}
