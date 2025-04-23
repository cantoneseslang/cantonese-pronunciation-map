import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "スラング式広東語カタカナ・粤拼発音マップ | 広東語発音学習ツール",
  description: "広東語の発音をカタカナと粤拼（イェールピン）で直感的に学べる発音マップ。スラングや日常会話で使える表現も収録。初心者から上級者まで、効率的に広東語の発音を習得できます。",
  generator: 'v0.dev',
  keywords: ["広東語", "発音", "カタカナ", "粤拼", "イェールピン", "香港", "スラング", "学習"],
  authors: [{ name: "cantoneseslang" }],
  verification: {
    google: '5FMcHewuF65ACKFBJ9sIPTBOywpjHM8yF3sEtqIxEkA'
  },
  openGraph: {
    title: "スラング式広東語カタカナ・粤拼発音マップ",
    description: "広東語の発音をカタカナと粤拼で直感的に学べる発音マップ。スラングや日常会話表現も収録。",
    url: "https://cantonese-pronunciation-map.vercel.app",
    siteName: "スラング式広東語カタカナ・粤拼発音マップ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "スラング式広東語カタカナ・粤拼発音マップ",
    description: "広東語の発音をカタカナと粤拼で直感的に学べる発音マップ",
    creator: "@cantoneseslang",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="5FMcHewuF65ACKFBJ9sIPTBOywpjHM8yF3sEtqIxEkA" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}
