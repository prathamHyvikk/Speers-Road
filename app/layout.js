import './globals.css'

export const metadata = {
  title: 'Speers Road Physiotherapy | Oakville, Ontario',
  description: "Oakville's trusted physiotherapy clinic. 25+ years of experience, 5000+ patients treated. One-on-one care tailored to your recovery.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
