import StyledContainer from "@/components/StyledContainer";
import { createClient } from "@/prismicio";
import SocialLinks from "@/components/StyledFooter/SocialLinks";
import FooterLinkList from "@/slices-layout/FooterLinkList";
import CopyrightLinks from "@/components/StyledFooter/CopyrightLinks";
import StyledPrismicRichTextSingle from "../StyledPrismicRichTextSingle";
import IconDiv from "./components/icon";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const client = createClient();
const navigation = await client.getSingle("navigation");
const settings = await client.getSingle("settings");

export default async function StyledFooter() {
  return (
    <StyledContainer className="bg-primary-white pt-10 md:pt-[60px] xl:pt-[80px] pb-6 overflow-hidden md:pb-[32px] text-text-base">
      <div className="grid grid-cols-1 gap-y-[40px] xl:grid-flow-col xl:gap-x-[40px] 2xl:gap-x-[60px] lg:flex 2xl:grid lg:gap-x-[20px] lg:justify-between">
        <div
          className={"text-center md:text-left md:col-span-2 xl:min-w-[454px]"}
        >
          <PrismicNextLink
            href="/"
            aria-label="Go to home page"
            className="flex w-fit"
          >
            <PrismicNextImage
              field={settings.data.footer_logo}
              fallbackAlt=""
              className="h-20 xl:h-25 w-auto object-contain"
            />
          </PrismicNextLink>
          <p className="my-3 lg:max-w-[432px] text-body-base text-left">
            {settings.data.footer_description}
          </p>

          <div className={"text-start md:text-left"}>
            <div>
              <StyledPrismicRichTextSingle
                field={settings?.data?.contact_us_title}
                className="text-title-base font-medium mb-[16px]"
              />
              <ul className=" flex flex-col gap-[12px] py-3">
                {settings?.data?.contact_us?.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <PrismicNextLink
                        field={item.link}
                        className="flex flex-row items-start gap-x-[10px] transition-all duration-300 ease-in-out hover:text-primary-dark w-fit"
                      >
                        <div className="w-[24px] h-[24px] mt-[1px]">
                          <IconDiv icon={item.icon_name} />
                        </div>
                        <StyledPrismicRichTextSingle
                          field={item.label}
                          className="text-[18px] leading-[28px] tracking-[0] md:leading-[26px]"
                        />
                      </PrismicNextLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-y-[32px] grid-cols-1 sm:flex xl:grid-flow-col sm:gap-x-[20px] lg:gap-x-[40px] lg:w-full lg:max-w-[53.5vw] xl:max-w-[700px] 2xl:min-w-[700px]">
          <div className={"text-start md:text-left w-full lg:pl-5"}>
            <FooterLinkList
              slice={navigation.data.footer_links?.find(
                (slice) => slice.primary.menu_id === "company",
              )}
            />
          </div>
          <div className={"text-start md:text-left w-full"}>
            <FooterLinkList
              slice={navigation.data.footer_links?.find(
                (slice) => slice.primary.menu_id === "services",
              )}
            />
          </div>
          <div className={"text-start md:text-left w-fit"}>
            <div className="text-title-medium title-font font-medium mb-[18px]">
              Follow us on
            </div>
            <SocialLinks links={settings.data.social_profiles} />
          </div>
        </div>
      </div>

      <div
        className={
          "border-t-border-primary pt-[12px] border-t mt-[40px] text-body-base xl:mt-[60px]"
        }
      >
        <div className="text-left flex gap-[8px] md:gap-[15px] flex-col lg:flex-row justify-between text-body-small-s text-[#161616]">
          <CopyrightLinks
            links={navigation.data.copyright_links}
            className="space-y-[6px]"
          />
          {/* <p>
            &copy; {new Date().getFullYear()} {settings.data.copyright_text}
            <span className="mx-[6px]">|</span>{" "}
            <a
              href="https://atdigital.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300 ease-in-out"
            >
              Website design and development - Malki Roshika
            </a>
          </p> */}
        </div>
      </div>
    </StyledContainer>
  );
}
