import "./globals.css";
import { raleway } from "./lib/fonts";
import Header from "./components/Header";
import Script from "next/script";

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
      <body
        className={`${raleway.className} min-h-screen flex flex-col duration-1000
         ease-in-out transition-all flex-1 dark:bg-slate-800 bg-sky-700`}
      >
        <Header />
        <div className="background">
          <div className="gradient-blur" />
        </div>
        {children}
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
          defer
        ></script>
      </body>
    </html>
  );
}
