import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "../public/fav3.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JK's World",
  description: "Get to know JK's World",
  // set the favicon as Logo
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="" />
        <div className="min-h-screen text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        
        {children}
        </div>
        <Footer />
        
        </body>
    </html>
  );
}
