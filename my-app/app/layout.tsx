import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "スラング式広東語カタカナ・粤拼発音マップ | 広東語発音学習ツール",
  description: "広東語の発音をカタカナと粤拼（粤ピン）で直感的に学べる発音マップ。広東語翻訳、発音表記、声調、文法、中国語との違い、挨拶など、香港で使える日常会話表現も収録。初心者から上級者まで、効率的に広東語を習得できる学習方法を提供します。",
  generator: 'v0.dev',
  keywords: [
    "広東語",
    "広東語発音",
    "広東語学習",
    "広東語翻訳",
    "広東語発音カタカナ",
    "広東語発音表記",
    "広東語翻訳グーグル",
    "広東語翻訳アプリ無料",
    "広東語漢字一覧",
    "広東語ピンイン",
    "広東語声調",
    "広東語響き",
    "香港広東語発音",
    "発音",
    "カタカナ",
    "粤拼",
    "粤ピン",
    "香港",
    "九龍城寨",
    "トワイライトウォーリアーズ",
    "スラング",
    "学習",
    "hong kong",
    "広東語 文法",
    "広東語 香港",
    "広東語 中国語 違い",
    "広東語教室 香港",
    "言語学習 方法",
    "広東語 中国語",
    "広東語 勉強",
    "広東語 挨拶",
    "広東語 辞書"
  ],
  authors: [{ name: "cantoneseslang" }],
  verification: {
    google: '5FMcHewuF65ACKFBJ9sIPTBOywpjHM8yF3sEtqIxEkA'
  },
  openGraph: {
    title: "スラング式広東語カタカナ・粤拼発音マップ",
    description: "広東語の発音をカタカナと粤拼（粤ピン）で直感的に学べる発音マップ。スラングや日常会話表現も収録。",
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
