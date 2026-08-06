import TeamCarousel from "./variants/Default";
/**
 * @typedef {import("@prismicio/client").Content.OurTeamSlice} OurTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurTeamSlice>} OurTeamProps
 * @type {import("react").FC<OurTeamProps>}
 */
const OurTeam = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? <TeamCarousel slice={slice} /> : null}
    </section>
  );
};

export default OurTeam;
