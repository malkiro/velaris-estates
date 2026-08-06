import "@testing-library/jest-dom";
import simplifyMockData from "@/utils/prismic/simplifyMockData";
import mocks from "../mocks.json";
import Component from "../index";
import { render } from "@testing-library/react";

describe("Contact Section", () => {
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
});
