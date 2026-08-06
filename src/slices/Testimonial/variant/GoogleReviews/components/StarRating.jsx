import React from "react";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const StarRating = ({ rating = 0, size = 18 }) => {
  let stars = null;

  if (isNaN(rating)) return stars;

  return (
    <div className={"flex my-3"}>
      {Array(Math.floor(rating))
        .fill()
        .map((_, index) => (
          <TbStarFilled
            key={index}
            color={"#fcbf02"}
            size={size}
            className={"me-[1px]"}
          />
        ))}
      {rating % 1 < 0.5 && rating % 1 > 0 && (
        <TbStarHalfFilled color={"#fcbf02"} size={size} />
      )}
      {rating % 1 > 0.5 && <TbStarFilled color={"#fcbf02"} size={size} />}
    </div>
  );
};

export default StarRating;
