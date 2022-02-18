import { ReactNode } from "react";

export type TMainLayoutProps = {
   className?: string;
   imageSrc: string;
   topTitle: string;
   bottomTitle?: string;
   bottomSubTitle?: string;
   children: ReactNode;
};
