export const formatPhone = (value = "") => {
  let digits = value.replace(/\D/g, "");

  if (digits.length > 0 && digits[0] !== "0") {
    digits = "0" + digits;
  }

  digits = digits.slice(0, 10);

  let formatted = "";

  if (digits.length > 0) formatted = digits.slice(0, 3);
  if (digits.length >= 4) formatted += "-" + digits.slice(3, 6);
  if (digits.length >= 7) formatted += " " + digits.slice(6, 10);

  return formatted;
};
