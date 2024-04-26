
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ExampleNavbarTwo } from "@/components/Navbar";
import { CartProvider } from "../context/CartContext.js"; 

import CartIcon from "@/components/fixedCart";
import AuthProvider from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>
        <ExampleNavbarTwo />
        <CartProvider> 
          {children}
          <CartIcon/>
        </CartProvider>
         <Footer />
      </body>
      </AuthProvider>
    </html>
  );
}
