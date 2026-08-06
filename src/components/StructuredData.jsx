import React from "react";

const StructuredData = ({ data }) => {
  return (
    <>
      {data.map(({ json }, idx) => {
        return (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
          />
        );
      })}
    </>
  );
};

export default StructuredData;
