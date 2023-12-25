import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gip',
  description: 'ecommerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <ClerkProvider>
      <body className={inter.className} style={{backgroundColor:"white"}}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
