import React from "react";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import StarRating from "./StarRating";

const ReviewCard = ({ item = {}, setReview }) => {
  if (!item) return null;
  const { Name, DateTime, Score, Review, ProfilePhotoUrl, ReviewUrl } =
    item || {};

  const showReadMore =
    typeof setReview === "function" && Review && Review?.length > 75;

  if (!Review) return null;

  return (
    <>
      <a
        href={ReviewUrl}
        target={"_blank"}
        rel={"noreferrer"}
        className="flex items-center group"
      >
        {ProfilePhotoUrl ? (
          <img
            srcSet={`${ProfilePhotoUrl?.split("=")?.[0]}=s40-c-rp-mo 1x, ${ProfilePhotoUrl?.split("=")?.[0]}=s80-c-rp-mo 2x, ${ProfilePhotoUrl?.split("=")?.[0]}=s120-c-rp-mo 3x`}
            alt={Name}
            loading={"lazy"}
            className={
              "bg-[#eee] block w-10 h-10 rounded-[40px] text-center me-2"
            }
          />
        ) : (
          <p
            className={
              "bg-white block w-10 h-10 rounded-[40px] leading-[40px] text-center me-2"
            }
          >
            {Name?.[0]}
          </p>
        )}
        <div>
          <p
            className={
              "leading-[120%] font-semibold text-[16px] group-hover:underline"
            }
          >
            {Name}
          </p>
          <span className={"block leading-[100%] text-[#595959] text-[12px]"}>
            {getTimeValue(DateTime)}
          </span>
        </div>
      </a>
      <StarRating rating={Score} />
      <div className="relative">
        <p
          className={clsx({
            " text-[#111111]": true,
            "line-clamp-4": showReadMore,
          })}
        >
          {showReadMore
            ? Review
            : Review?.split("\n").map((text, idx) => (
                <span className={"block mt-4"} key={idx}>
                  {text}
                </span>
              ))}
        </p>
      </div>
      {showReadMore && <ReadMore setReview={setReview} />}
    </>
  );
};

export default ReviewCard;

const ReadMore = ({ setReview }) => {
  return (
    <button
      onClick={setReview}
      className={"text-[14px] text-primary-light mt-1 underline"}
    >
      Read more
    </button>
  );
};

const getTimeValue = (time) => {
  let str = null;

  try {
    str = formatDistanceToNow(new Date(time)) + " ago";
  } catch (e) {
    str = "";
  }

  return str;
};
