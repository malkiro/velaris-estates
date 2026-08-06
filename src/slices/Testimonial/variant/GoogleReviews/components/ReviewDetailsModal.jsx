import React from "react";
import ReviewCard from "@/slices/Testimonial/variant/GoogleReviews/components/ReviewCard";

const ReviewDetailsModal = ({ close, review }) => {
  return (
    <dialog
      open
      className={
        "bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 w-full h-screen z-[999999] flex items-center justify-center"
      }
      onClick={close}
    >
      <div
        className={
          "flex w-[90%] max-h-[90vh] max-w-[400px] bg-white rounded-[12px] relative"
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={close}
          className={
            "absolute top-0 right-0 rounded-[10px] h-10 w-10 flex items-center justify-center bg-white"
          }
        >
          &#x2715;
        </button>
        <div className={"p-4 flex-grow overflow-auto"}>
          <ReviewCard item={review} />
        </div>
      </div>
    </dialog>
  );
};

export default ReviewDetailsModal;
