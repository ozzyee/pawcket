/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { Text } from "../../components/text/text.component";
import { TCreatePetFormProps } from "./creat-pet-form.definition";
import * as S from "./creat-pet-form.style";
import { Frame } from "../../components/frame/frame.component";
import { Validation } from "./function/validation";
import { TPet } from "./creat-pet-form.definition";
import { useContent } from "../../context/context";
import { setDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { useRouter } from "next/router";
import Router from "next/router";
import { uid } from "uid";
import { ImageUploader } from "../../functions/dynamic-imports";

export function CreatePetForm({
   className,
   userUID,
   _data,
   uploadImage,
}: TCreatePetFormProps) {
   const router = useRouter();
   const hiddenImageUploader = useRef(null);
   const [formData, setFormData] = useState<null | TPet>(null);
   const { _setOpen, _setSnackbarType, _setSnackbarMsg } = useContent();
   const [errors, setErrors] = useState<TPet | null>(null);
   const [redirect, setRedirect] = useState("");
   const [img, setImg] = useState("");

   useEffect(() => {
      setFormData({ ...formData, image: uploadImage || img });
   }, [uploadImage, img]);


   const uploadImageFunc = () => {
      // @ts-ignore
      hiddenImageUploader.current?.click() as React.MutableRefObject<null>;
   };

   const onCreatePet = async (evt: FormEvent) => {
      evt.preventDefault();
      const errors = Validation({
         name: formData?.name,
         sex: formData?.sex,
         dateOfBirth: formData?.dateOfBirth,
      });
      setErrors({
         name: errors?.name,
         sex: errors?.sex,
         dateOfBirth: errors?.dateOfBirth,
      });

      if (errors?.name && errors?.dateOfBirth && errors?.sex) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must fill in all fields.");
      }
      if (errors?.name && !errors?.dateOfBirth && !errors?.sex) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must input a name");
      }
      if (!errors?.name && errors?.dateOfBirth && !errors?.sex) {
         _setOpen(true);
         _setSnackbarType("error");
         const error = errors?.dateOfBirth as string;
         _setSnackbarMsg(error);
         _setSnackbarMsg("You must input a Date of Birth!");
      }
      if (!errors?.name && !errors?.dateOfBirth && errors?.sex) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg(
            "You must select a sex. Please type either 'Male' or 'Female'"
         );
      }

      //If no errors send data to db
      if (!errors?.name && !errors?.dateOfBirth && !errors?.sex) {
         const DOB = formData?.dateOfBirth?.toString();
         try {
            if (!_data?.pets) {
               await setDoc(doc(firestoreDB, "pets", userUID), {
                  pets: [
                     {
                        ...formData,
                        dateOfBirth: DOB,
                        id: uid(),
                        image: uploadImage || img,
                     },
                  ],
               });
               if (redirect !== "user-profile") {
                  // @ts-ignore
                  Router.reload(window.location.pathname);
               } else {
                  router.push(redirect);
               }
            } else {
               await setDoc(doc(firestoreDB, "pets", userUID), {
                  pets: [
                     ..._data?.pets,
                     {
                        ...formData,
                        dateOfBirth: DOB,
                        id: uid(),
                        image: uploadImage || img,
                     },
                  ],
               });

               if (redirect !== "user-profile") {
                  // @ts-ignore
                  Router.reload(window.location.pathname);
               } else {
                  router.push(redirect);
               }
            }
         } catch (errors) {
            const error = errors as Error;
            console.log(error);
         }
      }
   };

   return (
      <>
         <S.CreatePetForm className={className} onSubmit={onCreatePet}>
            <S.FormSplitLeft>
               <S.Wrapper>
                  <S.ImageAndTextWrapper>
                     <Frame
                        diameter={150}
                        img={formData?.image || img}
                        onClick={uploadImageFunc}
                     />
                     <ImageUploader
                        _ref={hiddenImageUploader}
                        onChange={(imgUrl) => {
                           setImg(imgUrl);
                        }}
                        folder={`/${userUID}`}
                     />
                     <S.TextHolder>
                        <Text textType="h2" className="sub-heading-h2-upload">
                           Upload
                        </Text>
                        <Text textType="h2" className="sub-heading-h2-img">
                           Photo
                        </Text>
                     </S.TextHolder>
                  </S.ImageAndTextWrapper>
                  <S.CreatePetSpan>
                     <FormInputs
                        id="pet-name"
                        placeholder="Name"
                        inputType="name"
                        error={errors?.name}
                        onChange={(evt) => {
                           setFormData({
                              ...formData,
                              name: evt.target.value,
                           });
                        }}
                     />
                     <FormInputs
                        id="pet-bio"
                        placeholder="Bio"
                        inputType="text-area"
                        onTextAreaChange={(evt) => {
                           setFormData({
                              ...formData,
                              petBio: evt.target.value,
                           });
                        }}
                     />

                     <S.ButtonWrapper>
                        <Buttons
                           type="submit"
                           dark={false}
                           id="form-btn"
                           onClick={() => setRedirect("user-profile")}
                        >
                           Continue
                        </Buttons>
                        <Buttons
                           type="submit"
                           dark={true}
                           id="form-btn"
                           onClick={() => setRedirect("create-pet")}
                        >
                           Add Another
                        </Buttons>
                     </S.ButtonWrapper>
                  </S.CreatePetSpan>
               </S.Wrapper>
            </S.FormSplitLeft>

            <Separator separatorText={"Pet Passport"} />
            <S.FormSplitRight>
               <S.Wrapper>
                  <S.DesktopTitle>
                     <Text textType="h2" className="desktop-title">
                        Create your pets profile
                     </Text>
                  </S.DesktopTitle>
                  <FormInputs
                     placeholder="Sex (Male or Female)"
                     inputType="pet-sex"
                     error={errors?.sex}
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           sex: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Date of Birth"
                     error={errors?.dateOfBirth}
                     onDateChange={(evt) => {
                        setFormData({
                           ...formData,
                           dateOfBirth: evt,
                        });
                     }}
                     inputType="date"
                  />
                  <FormInputs
                     placeholder="Species"
                     inputType="pet-species"
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           petSpecies: evt.target.value,
                        });
                     }}
                  />

                  <FormInputs
                     placeholder="Personality"
                     inputType="pet-personality"
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           petPersonality: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Medication"
                     inputType="pet-medication"
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           petMedication: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Weight"
                     inputType="pet-Weight"
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           petWeight: evt.target.value,
                        });
                     }}
                  />
                  <FormInputs
                     placeholder="Extra Info"
                     inputType="pet-extra-info"
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           petExtraInfo: evt.target.value,
                        });
                     }}
                  />
               </S.Wrapper>
            </S.FormSplitRight>

            <ButtonsWrapper id="display-none" className="create-users-forms">
               <Buttons
                  dark={false}
                  type="submit"
                  className="form-btn"
                  id="pet-continue-btn"
                  onClick={() => setRedirect("user-profile")}
               >
                  Continue
               </Buttons>
               <Buttons
                  dark={true}
                  type="submit"
                  className="form-btn"
                  id="pet-add-btn"
                  onClick={() => setRedirect("create-pet")}
               >
                  Add Another
               </Buttons>
            </ButtonsWrapper>
         </S.CreatePetForm>
      </>
   );
}
