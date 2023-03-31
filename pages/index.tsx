
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className={inter.className}>Welcome to my amazing weather app</h1>
  )
}
