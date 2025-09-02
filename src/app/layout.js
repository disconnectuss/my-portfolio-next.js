import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fatma Aktas - Full Stack Developer',
  description: 'Dedicated software developer with expertise in building compelling web and mobile experiences. Specializing in React and React Native development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
