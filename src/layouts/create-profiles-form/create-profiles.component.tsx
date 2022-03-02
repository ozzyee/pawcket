import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Frame } from "../../components/frame/frame.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import {
   TCreateUserLayoutProps,
   TCreatUser,
} from "./create-profiles.definition";
import * as S from "./create-profiles.style";
import { Text } from "../../components/text/text.component";
import { FormEvent, useState } from "react";
import { createUserValidation } from "./functions/cteate-user-validation";
import { useContent } from "../../context/context";
import { setDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";

export function CreateProfileForm({
   dateObject,
   userUID,
}: TCreateUserLayoutProps) {
   const [userData, setUserData] = useState<null | TCreatUser>({
      firstName: dateObject.firstName,
      lastName: dateObject.lastName,
   });
   const { _setOpen, _setSnackbarType, _setSnackbarMsg } = useContent();
   const [err, setErr] = useState<TCreatUser | null>(null);

   const addUserInfo = async (evt: FormEvent) => {
      evt.preventDefault();
      const err = createUserValidation({
         firstName: userData?.firstName,
         lastName: userData?.lastName,
         DOB: userData?.DOB,
      });

      setErr(err);
      if (err?.DOB && err?.firstName && err?.lastName) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must fill in all required fields.");
      } else if (err?.DOB) {
         _setOpen(true);
         _setSnackbarType("error");
         const error = err?.DOB as string;
         _setSnackbarMsg(error);
      } else if (err?.firstName) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg(err?.firstName);
      } else if (err?.lastName) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg(err?.lastName);
      }

      if (!err?.DOB && !err?.firstName && !err?.lastName) {
         try {
            await setDoc(doc(firestoreDB, "users", userUID), {
               ...dateObject,
               ...userData,
            });
            _setOpen(true);
            _setSnackbarType("success");
            _setSnackbarMsg("The data was saved successfully.");
         } catch (err) {
            const error = err as Error;
            _setOpen(true);
            _setSnackbarType("error");
            _setSnackbarMsg(error.message);
         }
      }
   };

   console.log(userData);

   return (
      <>
         <S.SkipStyleButton href="">Skip</S.SkipStyleButton>

         <S.CreateUserForm onSubmit={addUserInfo}>
            <Separator separatorText="USER INFO" />
            <S.FormSplitRight>
               <S.Wrapper>
                  <S.CreateUserSpan>
                     <S.DesktopTitle>
                        <Text textType="h2" className="desktop-title">
                           Create your profile
                        </Text>
                     </S.DesktopTitle>

                     <FormInputs
                        placeholder="First Name"
                        onChange={(evt) => {
                           setUserData({
                              ...userData,
                              firstName: evt.target.value,
                           });
                        }}
                        error={err?.firstName}
                        inputType="name"
                        formValue={dateObject.firstName}
                     />
                     <FormInputs
                        placeholder="Last Name"
                        onChange={(evt) => {
                           setUserData({
                              ...userData,
                              lastName: evt.target.value,
                           });
                        }}
                        error={err?.lastName}
                        inputType="name"
                        formValue={dateObject.lastName}
                     />
                     <FormInputs
                        placeholder="Username"
                        onChange={(evt) => {
                           setUserData({
                              ...userData,
                              userName: evt.target.value,
                           });
                        }}
                     />

                     <FormInputs
                        placeholder="Date of Birth"
                        onDateChange={(evt) => {
                           setUserData({
                              ...userData,
                              DOB: evt,
                           });
                        }}
                        error={err?.DOB}
                        inputType="date"
                     />
                  </S.CreateUserSpan>
                  <FormInputs
                     placeholder="Address"
                     onChange={(evt) => {
                        setUserData({
                           ...userData,
                           address: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Postal Code"
                     onChange={(evt) => {
                        setUserData({
                           ...userData,
                           postCode: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Telephone"
                     onChange={(evt) => {
                        setUserData({
                           ...userData,
                           tel: evt.target.value,
                        });
                     }}
                     inputType="tel"
                  />
               </S.Wrapper>
            </S.FormSplitRight>

            <S.FormSplitLeft>
               <S.Wrapper>
                  <S.ImageAndTextWrapper>
                     <Frame background={"/frame.svg"} diameter={150} />
                     <S.TextHolder>
                        <Text textType="h2" className="sub-heading-h2-upload">
                           Upload
                        </Text>
                        <Text textType="h2" className="sub-heading-h2-img">
                           Photo
                        </Text>
                     </S.TextHolder>
                  </S.ImageAndTextWrapper>
                  <FormInputs
                     placeholder="Extra Info"
                     inputType="text-area"
                     onTextAreaChange={(evt) => {
                        setUserData({
                           ...userData,
                           extraInfo: evt.target.value,
                        });
                     }}
                  />

                  <ButtonsWrapper>
                     <Buttons dark={false} id="form-btn">
                        Continue
                     </Buttons>
                  </ButtonsWrapper>
               </S.Wrapper>
            </S.FormSplitLeft>
         </S.CreateUserForm>
      </>
   );
}
