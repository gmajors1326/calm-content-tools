import './globals.css'
import Link from 'next/link'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav" aria-label="Main navigation">
          <div className="topbar">
            <span className="brand-mark" />
            <span className="brand">Calm Content Tools</span>
          </div>
          <div className="topbar" style={{ marginLeft: 'auto' }}>
            <Link href="/">Home</Link>
            <Link href="/tools">Tools</Link>
          </div>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
