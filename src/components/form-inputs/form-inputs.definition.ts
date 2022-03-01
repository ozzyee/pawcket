import { ChangeEventHandler } from "react";

export type TFormInputsProps = {
   className?: string;
   placeholder: string;
   inputType?: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
   error?: string | undefined;
   id? : string;
   value? : string;
};
