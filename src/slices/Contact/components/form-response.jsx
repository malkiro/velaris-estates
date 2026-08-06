import React from "react";
import checkMark from "../../../assets/images/CheckmarkCircle.png";
import checkMarkError from "../../../assets/images/CloseCircleError.png";
import Image from "next/image";
import StyledButton from "@/components/StyledButton";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const FormResponse = ({
  status = "success",
  title,
  message,
  subMessage,
  buttonText,
  onButtonClick,
  btnToptext,
}) => {
  const isSuccess = status === "success";

  return (
    <div
      className={`
        max-w-[522px] w-full px-4 py-6 md:p-10 rounded-sm
        bg-primary-white 
        flex flex-col items-center text-center
        gap-[32px]
       
      `}
    >
      <div>
        {/* Icon Section */}
        <div className="mb-[8px]">
          {isSuccess ? (
            <div className="flex items-center justify-center">
              <Image src={checkMark} alt="Success" width={60} height={60} />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Image
                src={checkMarkError}
                alt="Success"
                width={60}
                height={60}
              />
            </div>
          )}
        </div>
        <p className="title-font text-title-x-large font-medium text-text-heading ">
          {title}
        </p>
        <StyledPrismicRichTextSingle
          field={message}
          className="  md:mt-[24px] text-body-medium font-normal text-text-secondary"
        />
      </div>
      <div className="w-full">
        <p className="mb-[12px] text-body-medium font-normal  text-text-secondary text-center">
          {btnToptext}
        </p>
        <StyledButton
          onClick={onButtonClick}
          variant="primary"
          className="!w-full py-3 px-6 rounded-full text-white justify-center"
          link={false}
        >
          {buttonText}
        </StyledButton>
      </div>
    </div>
  );
};

export default FormResponse;
