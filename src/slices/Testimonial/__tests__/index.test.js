import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import mocks from "../mocks.json";
import Component from "../index";
import simplifyMockData from "@/utils/prismic/simplifyMockData";

// Mock EmblaCarousel and its dependencies
jest.mock("embla-carousel-react", () => ({
  EmblaCarousel: ({ children }) => <div>{children}</div>,
}));

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(() => [jest.fn(), jest.fn()]),
}));

describe("Testimonial Component", () => {
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

  // it("second variation renders correctly", () => {
  //   const data = simplifyMockData(mocks[1]);
  //   console.log(typeof data);
  //   expect(1 + 1).toBe(2);
  //   const { container } = render(<Component slice={{}} />);
  //   // expect(container).toMatchSnapshot();
  // });
});
