import React, {createContext, useContext, useState, useEffect} from "react"

import type {FC, ReactNode} from "react"

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
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

const styles = {
  light: {
    background: 'var(--light-background)',
    foreground: 'var(--light-foreground)',
  },
  dark: {
    background: 'var(--dark-background)',
    foreground: 'var(--dark-foreground)',
  }
}

interface Props {
  children?: ReactNode
}

const Theme: FC<Props> = ({children}: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null)

  const applyStyles = (themeMode: ThemeMode) => {
    const style = styles[themeMode]

    for (const [key, value] of Object.entries(style)) {
      document.documentElement.style.setProperty(`--${key}`, `--${value}`)
    }
  }

  useEffect(() => {
    const theme = (localStorage.getItem("theme") || getSystemThemeMode()) as ThemeMode

    if (theme) {
      applyStyles(theme)
      setThemeMode(theme)
    }
  }, [])

  const value = {
    themeMode,
    setThemeMode: (themeMode: ThemeMode) => {
      applyStyles(themeMode)
      setThemeMode(themeMode)
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {Theme}
