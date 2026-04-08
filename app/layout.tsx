import type { Metadata } from "next";
import { Geist_Mono, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Close Safely — Transactions Both Sides Can Trust",
  description:
    "Close Safely gives brokers and borrowers a shared, transparent space to move through transactions with clarity and finish with confidence. SOC 2 certified. No hidden fees.",
  metadataBase: new URL("https://closesafely.ai"),
  openGraph: {
    title: "Close Safely — Transactions Both Sides Can Trust",
    description:
      "Close Safely gives brokers and borrowers a shared, transparent space to move through transactions with clarity and finish with confidence.",
    url: "https://closesafely.ai",
    siteName: "Close Safely",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Close Safely",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Close Safely — Transactions Both Sides Can Trust",
    description:
      "Close Safely gives brokers and borrowers a shared, transparent space to move through transactions with clarity and finish with confidence.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKWRVN8H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="gtm-script" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKWRVN8H');`}</Script>
      </body>
    </html>
  );
}
