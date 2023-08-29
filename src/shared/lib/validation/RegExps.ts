//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
export const PasswordRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$');
