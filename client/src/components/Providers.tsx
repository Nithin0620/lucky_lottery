"use client"

import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "@web3uikit/web3"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </MoralisProvider>
  )
}
