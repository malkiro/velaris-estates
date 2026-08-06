import React from "react";

import { createClient } from "@/prismicio";
import Script from "next/script";
import "./globals.scss";
import isProduction from "@/utils/is-production";

import { EB_Garamond, Kumbh_Sans } from "next/font/google";

const titleFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const bodyFont = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.prismic.io" crossOrigin="anonymous" />
        {/* {!isProduction() && <meta name="robots" content="noindex, nofollow" />} */}

        {settings.data.gtm_code && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${settings.data.gtm_code}');
            `}
          </Script>
        )}
      </head>
      <body className="overflow-x-hidden antialiased">
        {!!settings.data.gtm_code && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${settings.data.gtm_code}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <main> {children} </main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
