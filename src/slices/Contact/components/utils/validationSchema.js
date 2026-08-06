import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Required"),
  email: Yup.string().trim().email("Invalid email").required("Required"),
  // phone: Yup.string().trim().required("Required"),
  phone: Yup.string()
    .matches(/^[\d+\s\(\)\[\]\.-]*$/, "Invalid phone number")
    .min(6, "Invalid phone number")
    .required("Required"),
  message: Yup.string().trim().required("Required"),
  privacyPolicy: Yup.boolean()
    .oneOf([true], "You must agree to the privacy policy")
    .required("Privacy policy is required"),
});

export default validationSchema;
