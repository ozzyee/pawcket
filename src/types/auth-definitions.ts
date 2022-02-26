export type TValidation = {
   email: string;
   password: string;
   confirm: string;
};

export type TErrors = {
   email?: string | undefined;
   password?: string | undefined;
   confirm?: string | undefined;
};
