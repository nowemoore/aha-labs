import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AHA Labs — AI for Human Agency",
  description:
    "AHA Labs builds the empirical foundation to quantify risk from gradual AI disempowerment in human decision-making.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
