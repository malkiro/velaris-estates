import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import mocks from "../mocks.json";
import Component from "../index";
import simplifyMockData from "@/utils/prismic/simplifyMockData";

describe("Component", () => {
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
  // top padding
  it("second variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.top_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("second variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("second variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[1]);
    data.primary.bottom_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // top padding
  it("third variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.top_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("third variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.top_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("third variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.top_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("third variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("third variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("third variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[2]);
    data.primary.bottom_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // top padding
  it("fourth variation with full top padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.top_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("fourth variation with half top padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.top_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("fourth variation without top padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.top_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  // bottom padding
  it("fourth variation with full bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.bottom_padding = "Full";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("fourth variation with half bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.bottom_padding = "Half";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
  it("fourth variation without bottom padding renders correctly", () => {
    let data = simplifyMockData(mocks[3]);
    data.primary.bottom_padding = "None";
    const { container } = render(<Component slice={data} />);
    expect(container).toMatchSnapshot();
  });
});
