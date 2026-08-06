const renderEmailBlocksToHtml = (blocks) => {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "html":
          return block.content;
        case "list":
          return block.fields
            .map(
              ({ label, value }) =>
                `<p style="margin: 4px 0;"><strong>${label}:</strong> ${value}</p>`,
            )
            .join("");
        default:
          return "";
      }
    })
    .join("");
};

export default renderEmailBlocksToHtml;
