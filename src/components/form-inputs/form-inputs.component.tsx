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
}: TFormInputsProps) {
   const { _hasError } = useContent();
   const [value, setValue] = useState("");
   const [_error, setError] = useState(false);

   useEffect(() => {
      if (error === undefined) {
         setError(false);
         return;
      }

      if (error.length > 0) {
         setError(true);
      }
   }, [error]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (!event) return null;
      onChange(event);
   };

   if (inputType === "text-area") {
      return <S.TextArea placeholder={placeholder} className={className} />;
   }

   if (inputType === "date") {
      return (
         <S.DateInputWrapper>
            <LocalizationProvider
               dateAdapter={AdapterDateFns}
               id="date-wrapper"
            >
               <DatePicker
                  className="date-picker"
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                     if (!newValue) return null;
                     setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
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
            <InputLabel htmlFor="input" className="label">
               {placeholder}
            </InputLabel>
            <Input
               id="input"
               value={value}
               onChange={handleChange}
               aria-describedby="component-error-text"
               type={inputType}
            />
         </FormControl>
      </S.InputWrapper>
   );
}
