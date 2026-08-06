import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = (smallTitle) => ({
  heading1: ({ children }) => (
    <h1 className="text-title-3x-large mt-12 mb-7 first:mt-0 last:mb-0">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2
      className={`${
        smallTitle ? "text-title-large" : "text-title-2x-large"
      } mt-12 mb-7 first:mt-0 last:mb-0`}
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3
      className={`${
        smallTitle ? "text-title-large" : "text-title-x-large"
      } mt-12 mb-7 first:mt-0 last:mb-0`}
    >
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-title-large mt-12 mb-7 first:mt-0 last:mb-0">
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-title-medium mt-12 mb-7 first:mt-0 last:mb-0">
      {children}
    </h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-title-base mb-5">{children}</h6>
  ),
  paragraph: ({ children }) => <p className=" mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="pl-1 mb-1 list-decimal last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="pl-1 mb-1 list-disc last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="p-4 text-sm rounded-sm mb-7 bg-slate-100 last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
});

export function StyledPrismicRichText({
  components,
  className,
  smallTitle,
  ...props
}) {
  if (className) {
    return (
      <div className={className}>
        <BasePrismicRichText
          components={{ ...defaultComponents(smallTitle), ...components }}
          {...props}
        />
      </div>
    );
  }
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents(smallTitle), ...components }}
      {...props}
    />
  );
}
