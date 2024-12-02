import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweet Cravings By Victoria',
  description: 'Delicious baked goods made with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50 text-gray-800`}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-pink-600 hover:text-pink-800">Home</Link>
              </li>
              <li>
                <Link href="/ordering" className="text-pink-600 hover:text-pink-800">Ordering</Link>
              </li>
              <li>
                <Link href="/contact" className="text-pink-600 hover:text-pink-800">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-500">
          © 2023 Sweet Cravings By Victoria. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

