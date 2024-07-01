import React, {createContext, useContext, useState, useEffect} from "react"

import type {FC, ReactNode} from "react"

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

interface Theme {
  themeMode: ThemeMode
  setThemeMode: () => void
}

const ThemeContext = createContext({})

export const useThemeContext = () => useContext(ThemeContext)

const getSystemThemeMode = (): ThemeMode =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT

const styles = {}

interface Props {
  children?: ReactNode
}

const Theme: FC<Props> = ({children}: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || getSystemThemeMode()

    if (theme) {
      setThemeMode(theme as ThemeMode)
    }
  }, [])

  const value = {
    themeMode,
    setThemeMode: (themeMode: ThemeMode) => setThemeMode(themeMode),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {Theme}
