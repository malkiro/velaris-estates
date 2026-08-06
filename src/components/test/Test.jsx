"use client";

import React from "react";
import StyledInput from "../StyledInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyledButton from "../StyledButton"; // Define the validation schema

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please fill out this field."),
});

const Test = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="flex gap-10 mb-10">
        <StyledButton label="Button Text" icon />
        <StyledButton label="Button Text" variant="secondary" icon />
        <StyledButton label="Button Text" variant="transparent" icon />
      </div>

      <div className="flex gap-10 mb-10">
        <StyledButton type="icon" icon />
        <StyledButton type="icon" variant="secondary" icon />
      </div>

      <div className="w-[350px]">
        <form onSubmit={formik.handleSubmit}>
          <StyledInput
            type="textarea"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            error={formik.errors.email && formik.touched.email}
            errorMessage={formik.errors.email}
            // icon={true}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Test;
