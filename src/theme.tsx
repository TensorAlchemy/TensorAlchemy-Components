"use client"

import React, {createContext, useContext, useState, useEffect} from "react"

import type {FC, ReactNode} from "react"

enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

interface Theme {
  themeMode: ThemeMode
  setThemeMode: () => void
}

const ThemeContext = createContext({})

export const useAuthContext = () => useContext(ThemeContext)

const styles = {}

interface Props {
  children?: ReactNode
}

const ThemeProvider: FC<Props> = ({children}: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null)

  useEffect(() => {
    setThemeMode(localStorage.getItem("theme") as ThemeMode)
  }, [])

  const value = {
    themeMode: ThemeMode,
    setThemeMode: (themeMode: ThemeMode) => setThemeMode(themeMode),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
