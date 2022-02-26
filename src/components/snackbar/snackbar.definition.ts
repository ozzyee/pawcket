import { AlertColor } from "@mui/material";

export type TSnackbarProps = {
   type: AlertColor;
   message: string;
   open: boolean;
};
