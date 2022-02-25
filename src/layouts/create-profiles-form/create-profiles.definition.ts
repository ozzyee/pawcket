export type TCreateProfileProps = {
    topTitle: string,
    bottomTitle: string,
    background?: string,
    foreground?: string,
    width?: number,
    height?: number,
    separatorText?: string,
    isPet: boolean,
    onClick?: () => void
}
export type TGlowingLine = {
    separatorText: string|undefined,
}