"use client";
import React, { useRef, useState } from "react";
import { FaInfoCircle as InformationCircle, FaChevronDown as ChevronDown, FaQuestionCircle as HelpCircle, FaSearch as Search } from "react-icons/fa";

const StyledInput = ({
  type = "text",
  label,
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
  icon = false,
  rows = "7",
}) => {
  const inputRef = useRef();
  const areaRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlurWithState = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleLabelClick = () => {
    inputRef.current?.focus();
  };

  const handleAreaLabelClick = () => {
    areaRef.current?.focus();
  };

  const servicesData = [
    { label: "PPC" },
    { label: "SEO" },
    { label: "App Development" },
    { label: "Web Design" },
  ];

  const labelStyle = `block mb-[2px] text-body-small ${
    isFocused
      ? "text-text-heading"
      : error
        ? ""
        : "text-text-heading"
  }`;

  const baseInputStyle = `
    w-full bg-primary-white text-text-base text-[16px] 
    border-[1px] rounded-[6px] transition-all outline-none appearance-none 
    ease-in-out duration-300
    ${
      error
        ? "border-error-active focus:border-primary-dark"
        : "border-border-primary hover:border-primary-dark focus:border-primary-dark"
    }
  `;

  return type === "textarea" ? (
    <div>
      <div className="relative flex flex-col group ">
        <label
          htmlFor={label}
          onClick={handleAreaLabelClick}
          className={labelStyle}
        >
          {label}
        </label>
        <textarea
          name={label}
          id={label}
          rows={rows}
          value={value}
          ref={areaRef}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlurWithState}
          className={`${baseInputStyle} p-[18px] leading-[10px] md:leading-[12px]`}
        ></textarea>
      </div>
      {error && errorMessage && !isFocused && (
        <div className="h-[12px] mt-1.5">
          <div className="text-[12px] text-error-active leading-[15px]">
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  ) : type === "search" ? (
    <div className="relative flex flex-col group w-full mb-3">
      <label htmlFor={label} onClick={handleLabelClick} className={labelStyle}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={label}
          id={label}
          value={value}
          ref={inputRef}
          onChange={(e) => onChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlurWithState}
          className={`
            border-[1px] border-[#B0B0B0] hover:border-primary-dark rounded-[6px] bg-[#FFF] 
            pe-[44px] md:pe-[52px] ps-[18px] py-[8px] 
            placeholder:text-[#727A8B] placeholder:text-[18px] text-[#211F24] 
            h-[48px] md:h-[68px] w-full outline-none transition-all duration-300
          `}
        />
      </div>
    </div>
  ) : type === "service" ? (
    <div>
      <div className="relative flex flex-col group mb-3">
        <label
          htmlFor={label}
          onClick={handleAreaLabelClick}
          className={labelStyle}
        >
          {label}
        </label>
        <div className="relative">
          <select
            name={label}
            id={label}
            value={value}
            ref={inputRef}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlurWithState}
            className={`${baseInputStyle} h-[50px] px-[18px]`}
          >
            <option value="" disabled hidden></option>
            {servicesData.map((item, idx) => (
              <option key={idx} value={item.label} className="text-[14px]">
                {item.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-[14px] top-1/2 transform -translate-y-1/2">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
      {error && errorMessage && !isFocused && (
        <div className="h-[12px] mt-1.5">
          <div className="text-[12px] text-error-active leading-[15px]">
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  ) : (
    // DEFAULT TEXT INPUT (Name, Email, Phone, etc.)
    <div className="relative flex flex-col group mb-3">
      <label htmlFor={label} onClick={handleLabelClick} className={labelStyle}>
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          name={label}
          id={label}
          value={value}
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlurWithState}
          className={`${baseInputStyle} h-[50px] px-[18px]`}
        />

        {icon && (
          <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2">
            {error ? (
              <HelpCircle size={16} color="#D92D20" />
            ) : (
              <InformationCircle size={16} />
            )}
          </div>
        )}
      </div>

      {error && errorMessage && !isFocused && (
        <div className="h-[12px] mt-1.5">
          <div className="text-[12px] text-error-active leading-[15px]">
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default StyledInput;
