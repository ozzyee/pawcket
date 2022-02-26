/* eslint-disable no-unused-vars */
import { AlertColor } from "@mui/material";
import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from "react";
import { Snackbar } from "../components/snackbar/snackbar.component";
import { errorMessage } from "../functions/firebase-err-msg";


type TContentContext = {
   _setOpen: (open: boolean) => void;
   _setError: (set: boolean) => void;
   _setSnackbarType: (set: AlertColor) => void;
   _setSnackbarMsg: (set: string) => void;

   _hasError: boolean;
   snackbarMsg: string;
};

const ContentContext = createContext<TContentContext>({
   _setOpen: (open: boolean) => {},
   _setError: (set: boolean) => {},
   _setSnackbarType: (set: AlertColor) => {},
   _setSnackbarMsg: (set: string) => {},
   _hasError: false,
   snackbarMsg: "",
});

export const useContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   const [open, setOpen] = useState(false);
   const [snackbarMsg, setSnackbarMsg] = useState("");
   const [snackbarType, setSnackbarType] = useState<AlertColor>("error");
   const [_hasError, setError] = useState(false);

   const _setOpen = (open: boolean) => {
      setOpen(open);
   };

   const _setError = (set: boolean) => {
      setError(set);
   };

   const _setSnackbarType = (set: AlertColor) => {
      setSnackbarType(set);
   };

   const _setSnackbarMsg = (set: string) => {
      const customErrMsg = errorMessage(set);
      if (customErrMsg === "default-err") {
         setSnackbarMsg(set);
         return;
      }
      setSnackbarMsg(customErrMsg);
   };

   return (
      <ContentContext.Provider
         value={{
            _setOpen,
            _setError,
            _setSnackbarType,
            _setSnackbarMsg,
            _hasError,
            snackbarMsg,
         }}
      >
         {open && (
            <Snackbar type={snackbarType} message={snackbarMsg} open={open} />
         )}
         {children}
      </ContentContext.Provider>
   );
};
