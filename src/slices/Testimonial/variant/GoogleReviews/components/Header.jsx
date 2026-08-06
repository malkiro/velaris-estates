import React from "react";
import Image from "next/image";
import googleIcon from "@/slices/Testimonial/variant/GoogleReviews/components/google-icon.svg";
import StarRating from "@/slices/Testimonial/variant/GoogleReviews/components/StarRating";

const ReviewsHeader = ({ reviewUrl, reviewScore, totalReviewsCount }) => {
  return (
    <div
      className={
        "flex flex-col sm:flex-row items-center justify-between bg-[#f6f6f8] rounded-[8px] p-6"
      }
    >
      <div>
        <div className={"flex items-center justify-center sm:justify-start"}>
          <Image src={googleIcon} alt="Google" />
          <span className={"font-bold block ms-2 text-[20px]"}>Reviews</span>
        </div>
        <div className={"flex items-center justify-between"}>
          <p className={"text-[20px] font-semibold me-1"}>{reviewScore}</p>
          <StarRating rating={reviewScore} size={20} />
          <p className={"text-[14px] text-[#595959] ms-1"}>
            (out of {totalReviewsCount} reviews)
          </p>
        </div>
      </div>
      {reviewUrl && (
        <div>
          <a
            href={reviewUrl}
            target={"_blank"}
            rel="noopener noreferrer"
            className={
              "mt-2 sm:mt-0 btn btn-primary !py-1.5 !px-[20px] !text-[16px] font-semibold"
            }
          >
            Review us on Google
          </a>
        </div>
      )}
    </div>
  );
};

export default ReviewsHeader;
