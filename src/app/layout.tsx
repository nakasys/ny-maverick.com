import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'マーベリックプロパティー | ニューヨーク不動産投資アドバイザー',
  description: 'ローリスク＆リアルリターンを実現するニューヨーク発の不動産共同投資ビジネス。東京12年・NY22年の実績。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
