function simplifyMockData(input) {
  if (typeof input !== "object" || input === null) {
    return {};
  }

  const primary = {};

  for (const key in input?.primary) {
    if (input?.primary[key] && input?.primary[key].value !== undefined) {
      primary[key] = normalizePrismicObject(input?.primary[key]);
    }
  }

  return { variation: input?.variation || "", primary };
}

const normalizePrismicObject = ({ __TYPE__: type, value, ...others }) => {
  switch (type) {
    case "GroupContentType":
      return value.map((val) => normalizePrismicObject(val));
    case "LinkContent":
      return normalizePrismicObject(value);
    case "ExternalLink":
      return { link_type: "Web", url: others.url, target: others.target };
    case "GroupItemContent":
      const content = {};
      value.map((val) => {
        content[val?.[0]] = normalizePrismicObject(val?.[1]);
      });

      return content;
    default:
      return value;
  }
};

export default simplifyMockData;
