import dynamic from "next/dynamic";
import { TButtonsProps } from "../components/buttons/buttons.definition";
import { TFrameProps } from "../components/frame/frame.definition";
import { TImageUploaderProps } from "../components/image-uploader/image-uploader.definition";
import { TNavbarProps } from "../components/navbar/navbar.definition";
import { TAuthDesktopProps } from "../layouts/auth-desktop/auth-desktop.definition";
import { TCreateUserLayoutProps } from "../layouts/create-profiles-form/create-profiles.definition";
import { TMainLayoutProps } from "../layouts/main-layout/main-layout.definition";
import { TSignUpFormProps } from "../layouts/sign-up-form/sign-up-form.definition";
import { TCreatePetPage } from "../types/create-pet-page";

export const Frame = dynamic<TFrameProps>(
   () =>
      import("../components/frame/frame.component").then(
         (module) => module.Frame
      ) as any
);

export const Navbar = dynamic<TNavbarProps>(
   () =>
      import("../components/navbar/navbar.component").then(
         (module) => module.Navbar
      ) as any
);

export const CreatePetForm = dynamic<TCreatePetPage>(
   () =>
      import("../layouts/creat-pet-form/creat-pet-form.component").then(
         (module) => module.CreatePetForm
      ) as any
);

export const CreateProfileForm = dynamic<TCreateUserLayoutProps>(
   () =>
      import("../layouts/create-profiles-form/create-profiles.component").then(
         (module) => module.CreateProfileForm
      ) as any
);

export const ImageUploader = dynamic<TImageUploaderProps>(
   () =>
      import("../components/image-uploader/image-uploader.component").then(
         (module) => module.ImageUploader
      ) as any
);

export const AuthDesktop = dynamic<TAuthDesktopProps>(
   () =>
      import("../layouts/auth-desktop/auth-desktop.component").then(
         (module) => module.AuthDesktop
      ) as any
);

export const LoginForm = dynamic<{}>(
   () =>
      import("../layouts/log-in-form/log-in-form.component").then(
         (module) => module.LoginForm
      ) as any
);

export const SignUpForm = dynamic<TSignUpFormProps>(
   () =>
      import("../layouts/sign-up-form/sign-up-form.component").then(
         (module) => module.SignUpForm
      ) as any
);
export const Buttons = dynamic<TButtonsProps>(
   () =>
      import("../components/buttons/buttons.component").then(
         (module) => module.Buttons
      ) as any
);

export const MainLayout = dynamic<TMainLayoutProps>(
   () =>
      import("../layouts/main-layout/main-layout.component").then(
         (module) => module.MainLayout
      ) as any
);
