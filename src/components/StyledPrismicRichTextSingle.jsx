import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";

const StyledPrismicRichTextSingle = ({ field, className = "" }) => {
  if (!asText(field)) return null;
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => <h1 className={className}>{children}</h1>,
        heading2: ({ children }) => <h2 className={className}>{children}</h2>,
        heading3: ({ children }) => <h3 className={className}>{children}</h3>,
        heading4: ({ children }) => <h4 className={className}>{children}</h4>,
        heading5: ({ children }) => <h5 className={className}>{children}</h5>,
        heading6: ({ children }) => <h6 className={className}>{children}</h6>,
        paragraph: ({ children }) => <p className={className}>{children}</p>,
      }}
    />
  );
};

export default StyledPrismicRichTextSingle;
