import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const RichTextSlice = ({ slice }) => {
  return (
    <StyledContainer
      slice={slice}
      className="px-[20px] pb-[20px] xl:pr-[297px] xl:pl-[297px] xl:pt-[40px] xl:pb-[80px]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="pt-[20px] text-title-2x-large  font-semibold xl:pb-[10px]">
          <StyledPrismicRichTextSingle field={slice?.primary?.title} />
        </div>
        <div className="py-[20px] body text-body-large">
          <StyledPrismicRichText
            field={slice?.primary?.content}
            smallTitle={true}
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default RichTextSlice;
