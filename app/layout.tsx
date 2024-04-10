import { type ReactNode } from "react"

import { Titillium_Web } from "next/font/google"

import type { Metadata } from "next"

import { Providers } from "@/src/providers"

interface RootLayoutProps {
  children: ReactNode
}

const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-titillium-web",
})

export const metadata: Metadata = {
  title: "Content Listing App",
  description: "An app for listing and displaying content",
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en' data-theme='light'>
      <body className={titilliumWeb.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
