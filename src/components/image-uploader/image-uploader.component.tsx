import React, { ChangeEvent } from "react";
import { TImageUploaderProps } from "./image-uploader.definition";
import * as S from "./image-uploader.style";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../lib/firebase/firebase.initialize";
import { uid } from "uid";

export function ImageUploader({ onChange, _ref, folder }: TImageUploaderProps) {
   const uploader = async (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      const id = uid();

      if (!file) return null;

      const storageRef = ref(storage, `/${folder}/${id}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
         "state_changed",
         (snapshot) => {
            // * can add a loading state if needed
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         },
         (err) => console.log("this is the error,", err),
         async () => {
            const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
            onChange(imgUrl);
         }
      );
   };

   return (
      <S.UploadInput
         type="file"
         id="upload-img"
         accept=".png, .jpg, .jpeg"
         onChange={uploader}
         ref={_ref}
      />
   );
}
