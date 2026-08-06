import React from "react";
import axios from "axios";
import StyledContainer from "@/components/StyledContainer";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import ReviewsCarousel from "@/slices/Testimonial/variant/GoogleReviews/components/ReviewsCarousel";
import ReviewsHeader from "@/slices/Testimonial/variant/GoogleReviews/components/Header";

export default async function GoogleReviews({ slice }) {
  const { reviews, reviewUrl, reviewScore, totalReviewsCount } = await axios
    .post("https://api.atdigital.io/google-reviews", {
      sheetId: "velaris-estates",
    })
    .then((res) => res.data)
    .catch((e) => {
      return {};
    });

  const filteredReviews = reviews.filter((r) => !!r.Review && r.Score >= 4);

  if (!filteredReviews?.length) {
    return null;
  }

  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <div className="mt-[28px] md:mt-[32px] lg:mt-[40px]">
        <ReviewsHeader
          reviewUrl={reviewUrl}
          reviewScore={reviewScore}
          totalReviewsCount={totalReviewsCount}
        />

        <ReviewsCarousel reviews={filteredReviews} />
      </div>
    </StyledContainer>
  );
}
