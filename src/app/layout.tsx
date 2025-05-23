import { Poppins } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/layouts/Footer";
import { ThemeProvider } from 'next-themes';
// import CircleCursor from "@/components/ui/CircleCursor";

const poppins = Poppins({
     variable: "--font-poppins",
     subsets: ["latin"],
     weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
     const description = "Firtiansyah Okta Resama, Web Developer & Programmer from Indonesia. Passionate about creating impactful websites and staying ahead in tech trends";
     return {
          metadataBase: new URL("https:/hi.oktaa.my.id"),
          title: "Halo. Firtiansyah Oktaa~ | Full-stack Engineer & Tech Enthusiast",
          icons: {
               icon: "https://cdn.oktaa.my.id/favicon.ico",
               apple: "https://cdn.oktaa.my.id/apple-touch-icon.png"
          },
          description,
          keywords: [
               "Firtiansyah Okta Resama",
               "Web Developer",
               "Programmer",
               "Full-stack Engineer",
               "Indonesia",
               "Firtiansyah",
               "Oktaa",
               "Siapa Firtiansyah Okta Resama",
               "tian",
               "Firtiansyah adalah",
               "Firtiansyah Okta Portfolio Website",
               "Firtiansyah Website"
          ],
          authors: [{ name: "Firtiansyah Okta Resama", url: "https:/hi.oktaa.my.id" }],

          openGraph: {
               title: "Firtiansyah Okta Resama - Web Developer",
               description,
               url: "https:/hi.oktaa.my.id",
               siteName: "Firtiansyah Okta Resama",
               images: [
                    {
                         url: "https://cdn.oktaa.my.id/banner.png",
                         width: 1200,
                         height: 630,
                         alt: "Firtiansyah Okta Resama Portfolio",
                    },
               ],
               type: "website",
          },
          twitter: {
               card: "summary_large_image",
               title: "Firtiansyah Okta Resama - Web Developer",
               description,
               images: ["https://cdn.oktaa.my.id/banner.png"],
          },
          robots: {
               index: true,
               follow: true,
          },
          alternates: {
               canonical: "https:/hi.oktaa.my.id",
          },
     };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang="en-US" suppressHydrationWarning>
               <body className={`${poppins.variable} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 default-pattern`}>
                    {/* <CircleCursor bigSize={30} smallSize={10} blendMode="difference" /> */}
                    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
                         <Analytics />
                         <Navbar />
                         <main>
                              {children}
                         </main>
                         <Footer />
                    </ThemeProvider>
               </body>
          </html>
     );
}