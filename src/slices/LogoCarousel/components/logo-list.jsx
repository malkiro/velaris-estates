import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const LogoList = ({
  images = [],
  reverse = false,
  spacing = 10,
  speedFactor = 1,
}) => {
  const imageWidth = images?.[0]?.image?.dimensions?.width || 200;
  const imageHeight = images?.[0]?.image?.dimensions?.height || 100;

  const height = imageHeight / 2;
  const width = imageWidth / 2;

  const getImages = (images) => {
    const finalImageArray = [];
    const minimumImageCount = 1920 / width;
    const factor = Math.ceil(minimumImageCount / images?.length);

    for (let i = 0; i < factor; i++) {
      finalImageArray.push(...images);
    }
    return finalImageArray;
  };

  const imageList = getImages(images);

  return (
    <div
      className={clsx({
        "flex z-0 mt-5": true,
        "animate-scroll": !reverse,
        "animate-scroll-reverse": reverse,
      })}
      style={{
        animationDuration: `${images?.length * speedFactor}s`,
        width: (width + spacing) * images?.length,
      }}
    >
      {[...imageList, ...imageList]?.map(({ image }, idx) => {
        return (
          <div
            className="overflow-hidden relative"
            key={idx}
            style={{
              margin: `0 ${spacing / 2}px`,
              minWidth: width,
              width,
              height,
            }}
          >
            <PrismicNextImage
              field={image}
              className={"absolute left-0 top-0 h-full w-full object-contain"}
              fallbackAlt={""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogoList;
