import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Fatma Aktas - Full Stack Developer',
  description: 'Dedicated software developer with expertise in building compelling web and mobile experiences. Specializing in React and React Native development.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
