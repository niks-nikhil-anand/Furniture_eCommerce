'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ExampleNavbarTwo } from "@/components/Navbar";
import { CartProvider } from "../context/CartContext.js"; 

import CartIcon from "@/components/fixedCart";
import { usePathname } from "next/navigation";
import  AdminFooter  from "../components/AdminFooter";
import AdminNavbar from "../components/AdminNavbar";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          pathName !=='/admin/dashboard'?<ExampleNavbarTwo />
        : <AdminNavbar/> }
        <CartProvider> 
          {children}
          <CartIcon/>
        </CartProvider>
        {
          pathName !=='/admin/dashboard'? <Footer />
        : <AdminFooter/>
        }
      
       
      </body>
    </html>
  );
}
