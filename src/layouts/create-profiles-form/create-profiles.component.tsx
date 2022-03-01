import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Frame } from "../../components/frame/frame.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { TCreateProfileProps, TCreatUser } from "./create-profiles.definition";
import * as S from "./create-profiles.style";
import { Text } from "../../components/text/text.component";
import { FormEvent, useState } from "react";
import { createUserValidation } from "./functions/cteate-user-validation";
import { useContent } from "../../context/context";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";

export function CreateProfileForm({}: TCreateProfileProps) {
   const [userData, setUserData] = useState<null | TCreatUser>(null);
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
      // Error handling
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
      // If no errors send data to db

      if (!err?.DOB && !err?.firstName && !err?.lastName) {
         try {
            // TODO
            //? Pass in uid when doing auth
            //? move the dcc ref to ssr
            const docRef = doc(
               firestoreDB,
               "users",
               "cVPUqe64uVTXoc2UIFdWn8bwHWv2"
            );
            //? Also do the fetch server side
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            await setDoc(
               doc(firestoreDB, "users", "cVPUqe64uVTXoc2UIFdWn8bwHWv2"),
               {
                  ...data,
                  ...userData,
               }
            );
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
                     <Frame background={"/frame.svg"} foreground={`"+"`} />
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
                     onChange={(evt) => {
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
