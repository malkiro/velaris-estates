import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import DefaultCard from "../components/DefaultCard";

export default function Main({ slice }) {
  return (
    <StyledContainer slice={slice}>
      {slice.primary.title && (
        <StyledPrismicRichTextSingle
          field={slice.primary.title}
          className={"text-title-x-large text-center mb-[12px]"}
        />
      )}
      {slice.primary.description && (
        <StyledPrismicRichTextSingle
          field={slice.primary.description}
          className={
            "text-body-medium text-center mb-[30px] max-w-[846px] mx-auto"
          }
        />
      )}
      {slice.primary.cards.map((item, idx) => (
        <DefaultCard key={idx} item={item} />
      ))}
    </StyledContainer>
  );
}
