import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./reset.css"
import "./global.css"

import { NavBar } from "./navBar";

export const metadata = {
  title: "UniTrack",
  description: "Univesity of Sydney Degree Planning made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>

        {/* Reports visits to Vercel */}
        <Analytics />
        <div className="pageContainer">
            <NavBar />
            <div className="pageContentsWrapper">
                <div className="pageContentsContainer">
                    {children}
                </div>
            </div>
        </div>

        <SpeedInsights />
      </body>
    </html>
  );
}
