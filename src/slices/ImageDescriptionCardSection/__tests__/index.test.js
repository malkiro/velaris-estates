import "@testing-library/jest-dom";
import simplifyMockData from "@/utils/prismic/simplifyMockData";
import mocks from "../mocks.json";
import ImageDescriptionCardSection from "../index";
import { render } from "@testing-library/react";
import ImageDescriptionCardSection from "..";

describe("ImageDescriptionCard Section", () => {
  // top padding
  it("first variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "Full";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "Half";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "None";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("first variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "None";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });

  /* second variation */

  // top padding
  it("second variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "Full";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "Half";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "None";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("second variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "None";
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  //image align toggle
  it("second variation with left aligned image renders correctly", () => {
    const data = simplifyMockData(mocks[1]);
    data.primary.right_aligned_image = false;
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation with right aligned image renders correctly", () => {
    const data = simplifyMockData(mocks[1]);
    data.primary.right_aligned_image = true;
    const { container } = render(<ImageDescriptionCardSection slice={data} />);
    expect(container).toMatchSnapshot();
  });
});
