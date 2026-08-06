import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import mocks from "../mocks.json";
import Component from "../index";
import simplifyMockData from "@/utils/prismic/simplifyMockData";

describe("LogoCarousel Component", () => {
  // top padding
  it("first variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.top_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("first variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.bottom_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // full width
  it("first variation with full width renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.full_width = true;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without full width renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.full_width = false;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // fade effect
  it("first variation with fade effect renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.fade_effect = true;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without fade effect renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.fade_effect = false;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // two rows
  it("first variation with two rows renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.two_rows = true;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("first variation without two rows renders correctly", () => {
    let data = simplifyMockData(mocks[0]);
    data.primary.two_rows = false;
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
});
