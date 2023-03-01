//Validation file
import * as yup from "yup";

const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

export const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
    // .matches(emailRegExp, { message: "Please enter a valid email" })
  password: yup
    .string()
    .min(5)
    .max(20)
    .matches(passwordRegExp, {
      message: "Minimum eight characters, at least one letter and one number",
    })
    .required(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, { message: "Phone number is not valid" })
    .required(),
  role: yup.string().required(),
});
