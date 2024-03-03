import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Provider from "@/components/sign/auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Areej Issa",
  description: "fullstack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navbar/>
        {children}
        </Provider>
       
        </body>
    </html>
  );
}
