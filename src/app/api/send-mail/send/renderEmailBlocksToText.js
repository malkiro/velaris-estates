const renderEmailBlocksToHtml = (blocks) => {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "html":
          let text = block.content.replace(
            /<\/?(p|div|h[1-6]|br|hr)[^>]*>/gi,
            "\n\n",
          );
          // Replace <br> tags with a single newline
          text = text.replace(/<br\s*\/?>/gi, "\n");

          // Remove all other HTML tags
          text = text.replace(/<[^>]*>/g, "");

          // Normalize multiple newlines to just two for distinct paragraphs
          text = text.replace(/\n{3,}/g, "\n\n");

          // Trim leading/trailing whitespace
          text = text.trim();

          return text;
        case "list":
          return block.fields
            .map(({ label, value }) => `\n - ${label}: ${value}`)
            .join("");
        default:
          return "";
      }
    })
    .join("");
};

export default renderEmailBlocksToHtml;
