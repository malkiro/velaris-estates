import { PrismicNextImage } from "@prismicio/next";
import { FaTimes as Close } from "react-icons/fa";

const LightBox = ({ items, selectedImage, onClick }) => {
  return (
    <div
      className="fixed inset-0 z-51 bg-neutral-950/80 backdrop-blur-xs p-4 md:p-10 xl:p-20"
      onClick={onClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full h-full flex">
        <div
          className="m-auto max-w-266 w-full relative"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="absolute bg-primary-white p-1 rounded-full text-primary-dark right-0 bottom-[calc(100%+1rem)] cursor-pointer"
            onClick={onClick}
            aria-label="close the modal"
          >
            <Close size={24} className="w-8 h-8" />
          </button>
          <PrismicNextImage
            field={items[selectedImage].image}
            fallbackAlt=""
            className="w-full h-full rounded-md md:rounded-lg xl:rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
