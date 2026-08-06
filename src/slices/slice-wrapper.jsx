import React from "react";

const SliceWrapper = ({ children, slice_type, variation, primary = {} }) => {
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      id={primary?.section_id || primary?.sectionId || null}
    >
      {children}
    </section>
  );
};

export default SliceWrapper;
