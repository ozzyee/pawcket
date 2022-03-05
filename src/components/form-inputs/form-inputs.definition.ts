/* eslint-disable no-unused-vars */
import { ChangeEventHandler } from "react";

export type TFormInputsProps = {
   className?: string;
   placeholder: string;
   inputType?: string;

   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   error?: string | Date | undefined;
   formValue?: string;
   onDateChange?: ((evt: Date) => void) | undefined;
   onTextAreaChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
   formDateValue?: string | undefined;
   id?: string;
   onKeyUp?: (event: { target: HTMLInputElement }) => void;
};

export type TErrorStyle = {
   styleError: string;
};
