import "./globals.css";
import type { Metadata } from "next";
import { raleway } from "./lib/fonts";
import Header from "./components/Header";

export const metadata = {
  title: "Benim Blogum",
  description: "Burası benim blogum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="realerdemdoruk"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </head>
      <body
        className={`${raleway.className} min-h-screen flex flex-col flex-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400   `}
      >
        <Header />
        <div className="background">
          <div className="gradient-blur" />
        </div>
        {children}
      </body>
    </html>
  );
}
