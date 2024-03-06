import './globals.css'


export const metadata = {
  title: 'Gallery-Parallax',
  description: 'Gallery with Parallax effect using Next.js Framer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
