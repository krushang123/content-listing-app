"use client"

import { type ReactNode } from "react"

import { ChakraUIProvider } from "./chakra-provider"
import ReduxProvider from "./redux-provider"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props

  return (
    <ReduxProvider>
      <ChakraUIProvider>{children}</ChakraUIProvider>
    </ReduxProvider>
  )
}
