import { ReactNode } from "react";

export type TMainLayoutProps = {
   className?: string;
   imageSrc?: string | undefined;
   topTitle?: string;
   bottomTitle?: string;
   bottomSubTitle?: string;
   children?: ReactNode;
   topChildren?: ReactNode;
   desktopCard?: boolean;
   cardClassName?: string;
};
