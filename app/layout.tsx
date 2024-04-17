import { Poppins } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food App | Get your favorite food delivered to your doorsteps!",
  description: "Order your favorite food from the best restaurants in town!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  );
}
