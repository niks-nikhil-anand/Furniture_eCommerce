'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ExampleNavbarTwo } from "@/components/Navbar";
import { CartProvider } from "../context/CartContext.js"; 

import CartIcon from "@/components/fixedCart";
import { usePathname } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ExampleNavbarTwo />
        
        <CartProvider> 
          {children}
          <CartIcon/>
        </CartProvider>
         <Footer />
        
       
      </body>
    </html>
  );
}
