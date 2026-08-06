import StyledHeader from "@/components/StyledHeader";
import StyledFooter from "@/components/StyledFooter";
import React from "react";

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <>
      <StyledHeader />
      {children}
      <StyledFooter />
    </>
  );
}
