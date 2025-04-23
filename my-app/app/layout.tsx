import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "スラング式広東語カタカナ・粤拼発音マップ",
  description: "広東語学習者のための発音マップ",
  generator: 'v0.dev',
  other: {
    'google-site-verification': '5FMcHewuF65ACKFBJ9sIPTBOywpjHM8yF3sEtqIxEkA'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}
