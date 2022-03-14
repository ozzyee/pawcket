import React, { useEffect, useState } from "react";
import { TFormInputsProps } from "./form-inputs.definition";
import * as S from "./form-inputs.style";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useContent } from "../../context/context";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export function FormInputs({
   className,
   placeholder,
   inputType,
   onChange,
   error,
   formValue,
   onDateChange,
   onTextAreaChange,
   formDateValue,
   id,
   onKeyUp,
}: TFormInputsProps) {
   const { _hasError } = useContent();
   const [value, setValue] = useState<Date | string>("");
   const [_error, setError] = useState(false);
   const [dateErr, setDateErr] = useState(false);

   useEffect(() => {
      if (formDateValue) {
         const dateSplit = formDateValue?.split("T")[0];
         const dateSplitString = dateSplit?.split('"')[1];
         setValue(new Date(dateSplitString));
         return;
      }
      if (!formValue) {
         setValue("");
         return;
      }

      setValue(formValue);
   }, [formValue, formDateValue]);

   useEffect(() => {
      const err = error as string;
      if (err === undefined) {
         setError(false);
         setDateErr(false);
         return;
      }

      if (err.length > 0) {
         setError(true);
         setDateErr(true);
      }
   }, [error]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (!event || onChange === undefined) return null;
      onChange(event);
   };

   if (inputType === "text-area") {
      return (
         <S.TextArea
            id={id}
            placeholder={placeholder}
            className={className}
            onChange={onTextAreaChange}
         />
      );
   }

   if (inputType === "date") {
      return (
         <S.DateInputWrapper
            styleError={dateErr ? "2px solid #D32F2F" : "1px solid gray"}
         >
            <LocalizationProvider
               dateAdapter={AdapterDateFns}
               id="date-wrapper"
            >
               <DatePicker
                  className="date-picker"
                  label={placeholder}
                  value={value}
                  onChange={(newValue) => {
                     if (!newValue || onDateChange === undefined) return null;
                     onDateChange(newValue);
                     setValue(newValue);
                  }}
                  views={["day", "month", "year"]}
                  renderInput={(params) => <TextField {...params} />}
                  maxDate={new Date()}
               />
            </LocalizationProvider>
         </S.DateInputWrapper>
      );
   }

   return (
      <S.InputWrapper>
         <FormControl
            error={_error || _hasError}
            variant="standard"
            className="input-width"
         >
            <InputLabel htmlFor={inputType} className="label">
               {placeholder}
            </InputLabel>
            <Input
               id={inputType}
               value={value}
               onChange={handleChange}
               aria-describedby="component-error-text"
               type={inputType}
               // @ts-ignore
               onKeyUp={onKeyUp}
            />
         </FormControl>
      </S.InputWrapper>
   );
}
