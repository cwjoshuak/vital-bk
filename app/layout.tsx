import { Footer, Header } from "@/components";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Vital Brooklyn Occupancy Tracker",
  description: "An occupancy tracker for Vital Brooklyn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://iosevka-webfonts.github.io/iosevka-aile/iosevka-aile.css" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground">
        <Header />
        <main className="min-h-screen flex flex-col items-center">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
