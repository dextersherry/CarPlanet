import type { Metadata } from 'next'
import './globals.css'
import {Navbar,Footer} from '@/components'


// !  FOR WEBPAGE TITLE 
export const metadata: Metadata = {
  title: 'Car Planet',
  description: 'Discover the best Cars ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
