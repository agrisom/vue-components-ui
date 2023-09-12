export type FormValidators = Record<string, FormValidator>;
export type FormValidator = () => boolean | string;