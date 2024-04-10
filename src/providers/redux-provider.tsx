"use client"

import { type ReactNode, useRef } from "react"

import { Provider } from "react-redux"

import { makeStore, type AppStore } from "@/src/lib/store"

interface ReduxProviderProps {
  children: ReactNode
}

const ReduxProvider = (props: ReduxProviderProps) => {
  const { children } = props

  const storeRef = useRef<AppStore>()

  if (storeRef.current == null) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default ReduxProvider
