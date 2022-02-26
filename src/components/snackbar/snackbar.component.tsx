import React, { useState, useEffect } from "react";
import { TSnackbarProps } from "./snackbar.definition";
import SnackbarMUI from "@mui/material/Snackbar";
import { Alert } from "./_partials/alerts";
import { useContent } from "../../context/context";

export function Snackbar({ type, message, open }: TSnackbarProps) {
   const [_open, setOpen] = useState(true);
   const { _setOpen } = useContent();

   const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
   ) => {
      if (reason === "clickaway") return null;
      setOpen(false);
      _setOpen(false);
   };

   useEffect(() => {
      setOpen(open);
   }, [open]);


   return (
      <>
         <SnackbarMUI
            open={_open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            key={"top" + "left"}
         >
            <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
               {message}
            </Alert>
         </SnackbarMUI>
      </>
   );
}
