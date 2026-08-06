import projectConfig from "../../project.config";

const getFullUrl = (page = "") => {
  const pageWithSlash = page.startsWith("/") ? page : `/${page}`;

  return `${projectConfig.productionUrl}${pageWithSlash}`;
};

export default getFullUrl;
