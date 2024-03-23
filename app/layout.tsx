import "./globals.css";
import { Encode_Sans_Expanded } from "next/font/google";
import Header from "./header/header";

const encodeSansFont = Encode_Sans_Expanded({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Puerto Montt ecommerce",
  description: "Ecommerce generated to learn NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encodeSansFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
