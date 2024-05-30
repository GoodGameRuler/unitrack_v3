import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import "./reset.css"
import "./global.css"

import { NavBar } from "./navbar";

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
        <Analytics />
        <div className="pageContainer">
            <NavBar />
            <div className="pageContentsWrapper">
                <div className="pageContentsContainer">
                    {children}
                </div>
            </div>
        </div>
      </body>
    </html>
  );
}
