import StyledInput from "@/components/StyledInput";
import { useFormikContext } from "formik";
import { formatPhone } from "@/utils/formatPhone";

const StyledFormikInput = ({ name = "", type = "text", label = "" }) => {
  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext();

  const hasError = touched[name] && errors[name];

  const handleChange = (value) => {
    const finalValue = name === "phone" ? formatPhone(value) : value;
    setFieldValue(name, finalValue);
  };

  return (
    <div>
      <StyledInput
        type={type}
        label={label}
        error={hasError}
        errorMessage={errors?.[name]}
        onChange={handleChange}
        onBlur={() => handleBlur(name)}
        value={values?.[name] || ""}
      />
    </div>
  );
};

export default StyledFormikInput;
