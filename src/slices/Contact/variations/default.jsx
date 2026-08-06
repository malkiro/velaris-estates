import StyledContainer from "@/components/StyledContainer";
import Form from "../components/form";
import StyledSectionTitle from "@/components/StyledSectionTitle";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import ContactDetails from "@/slices/Contact/components/ContactDetails";

export default async function ContactUsForm({ slice, settings }) {
  return (
    <StyledContainer slice={slice}>
      <div
        className={`flex flex-col lg:flex-row  gap-x-[20px]  mx-auto  ${slice?.variation == "noMap" ? "xl:gap-x-10 justify-between" : "justify-center  "} `}
      >
        <div
          className={`mb-5 md:mb-8 lg:10 ${slice?.variation == "noMap" ? "mb-[30px]  lg:max-w-[630px]   md:mb-10" : " lg:max-w-[460px] xl:max-w-[522px]  md:mb-[32px]  w-full"}`}
        >
          {/* contact info */}
          <StyledSectionTitle
            slice={slice}
            dark={true}
            contentLeft
            isHero={slice?.variation === "default"}
          />
          <div
            className={`flex flex-col w-full mt-7 md:justify-center  ${slice?.variation == "noMap" ? "md:mt-[30px] " : "md:mt-[32px] xl:mt-[40px]"}`}
          >
            <ContactDetails
              data={settings?.data?.contact_us}
              contentLeft={true}
            />
          </div>
          {slice.primary?.secondary_title.text && (
            <div className="mt-[36px] text-[18px] text-text-base">
              <StyledPrismicRichText field={slice.primary.secondary_title} />
            </div>
          )}
        </div>
        <Form
          slice={slice}
          recipient={slice?.primary?.recipient_email_address}
          successMsg={slice?.primary?.form_success_message}
          cc={slice?.primary.cc_email_addresses}
          bcc={slice?.primary.bcc_email_addresses}
          unsuccessMsg={slice?.primary?.form_unsuccess_message}
          settings={settings}
          bgColor={slice?.primary?.with_background_color}
          mapUrl={slice?.primary?.map_iframe_url?.url}
          acknowledgementMessage={slice?.primary?.acknowledgment_email_message}
        />
      </div>
      {slice?.primary?.map_iframe_url?.url && (
        <div
          className={
            "w-full h-[409px] md:h-[519px] lg:h-[412px] relative rounded-lg xl:rounded-xl overflow-hidden mt-7 md:mt-8 lg:mt10"
          }
        >
          <iframe
            className={"h-full w-full absolute left-0 top-0"}
            src={slice?.primary?.map_iframe_url.url}
            allowFullScreen=""
            loading="lazy"
            title={`${slice.id}-map-section`}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </StyledContainer>
  );
}
