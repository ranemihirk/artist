import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./../styles/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Artist",
  description: "Artist",
  icons: {
    icon: "./assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className=" antialiased p-4 lg:p-8 h-[100vh]">
        <main>{children}</main>
      </body>
    </html>
  );
}
