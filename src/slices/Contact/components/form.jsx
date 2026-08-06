"use client";

import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import StyledFormikInput from "@/components/StyledFormikInput";
import StyledButton from "@/components/StyledButton";
import validationSchema from "./utils/validationSchema";
import { handleFormSubmit } from "./utils/submitHandler";
import TurnstileRecaptcha from "@/components/turnstile";
import Link from "next/link";
import FormResponse from "./form-response";

const Form = ({
  recipient,
  cc,
  bcc,
  settings,
  successMsg,
  unsuccessMsg,
  acknowledgementMessage,
  bgColor,
  mapUrl,
}) => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [success, setSuccess] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const socialMedia = settings?.data?.social_profiles || [];

  const handleResetForm = () => {
    setSubmitMessage("");
    setSuccess(false);
    setRecaptchaToken("");
  };

  return (
    <>
      {submitMessage ? (
        // Show FormResponse only
        <div className="mx-auto">
          <FormResponse
            status={success ? "success" : "error"}
            title={
              success ? "Successful Submission" : "Unsuccessful Submission"
            }
            message={success ? successMsg : unsuccessMsg}
            btnToptext={
              success
                ? "Need to make another submission?"
                : "Return to the Contact Form"
            }
            buttonText={success ? "New Submission" : "Resubmit Inquiry"}
            onButtonClick={handleResetForm}
          />
        </div>
      ) : (
        <div
          className={`w-full ${mapUrl ? "lg:max-w-[522px]" : "lg:max-w-[600px]"} rounded-sm   px-4   py-6 md:p-10 rounded-sm ${bgColor ? "bg-primary-white" : "bg-secondary-light"}`}
        >
          <Formik
            initialValues={{
              name: process.env.NEXT_PUBLIC_NAME ?? "",
              email: process.env.NEXT_PUBLIC_EMAIL ?? "",
              phone: process.env.NEXT_PUBLIC_PHONE ?? "",
              message: process.env.NEXT_PUBLIC_MESSAGE ?? "",
              privacyPolicy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleFormSubmit(
                values,
                resetForm,
                recipient,
                cc,
                bcc,
                setSuccess,
                setSubmitMessage,
                recaptchaToken,
                settings.data.header_logo,
                socialMedia,
                acknowledgementMessage
              ).finally(() => setSubmitting(false));
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:gap-4 lg:gap-0 lg:flex-col">
                  <div className="w-full">
                    <StyledFormikInput label={"Full Name"} name={"name"} />
                  </div>
                </div>
                <StyledFormikInput label={"Email Address"} name={"email"} />
                <StyledFormikInput
                  label={"Phone Number"}
                  name={"phone"}
                  type={"tel"}
                />
                <StyledFormikInput
                  label={"Message"}
                  name={"message"}
                  type={"textarea"}
                />
                <div className="relative mt-3">
                  <div className="flex items-start lg:items-center">
                    <Field name="privacyPolicy">
                      {({ field }) => (
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                          id="privacyPolicy"
                          className="rounded-[6px] mt-[2px] lg:mt-0 w-[20px] mr-[12px] h-[20px] border-[1px] border-[#D0D5DD]"
                        />
                      )}
                    </Field>
                    <label
                      htmlFor="privacyPolicy"
                      className="text-body-small text-text-heading mt-0 cursor-pointer "
                    >
                      I agree to the friendly
                      <Link
                        href="/privacy-policy"
                        className="underline ml-1"
                        target="_blank"
                      >
                        privacy policy.
                      </Link>
                    </label>
                  </div>
                  <ErrorMessage
                    name="privacyPolicy"
                    component="div"
                    className="text-[10px] text-[#F97066] leading-[15px] absolute bottom-[-10px] md:bottom-[-16px]"
                  />
                </div>
                <div className="my-[23px]">
                  <TurnstileRecaptcha setRecaptchaToken={setRecaptchaToken} />
                </div>
                <StyledButton
                  type="submit"
                  label={
                    isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></span>
                        Submitting...
                      </div>
                    ) : (
                      "Submit your inquiry"
                    )
                  }
                  link={false}
                  className="mx-auto w-full! justify-center"
                  disabled={isSubmitting}
                />
              </form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Form;
