"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type UIContextType = {
  isChatOpen: boolean
  setIsChatOpen: (open: boolean) => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <UIContext.Provider value={{ isChatOpen, setIsChatOpen }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error("useUI must be used within UIProvider")
  }
  return context
}
