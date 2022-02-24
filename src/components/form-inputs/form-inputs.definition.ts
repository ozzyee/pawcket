import { ChangeEventHandler } from "react";

export type TFormInputsProps = {
   className?: string;
   placeholder: string;
   inputType?: string;
   onChange: ChangeEventHandler<HTMLInputElement> | undefined;
   required?: boolean;
   error?: boolean;
   errorMsg?: string;
};
