'use client'

import React, {createContext, useContext, useState, useEffect} from 'react'

import type {FC, ReactNode} from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContext {
  theme: Theme
  setThemeMode: (themeMode: Theme) => void
}

const ThemeContext = createContext({} as ThemeContext)

export const useThemeContext = () => useContext(ThemeContext)

const getSystemTheme = (): Theme =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT

const variables = [
  'color-background',
  'color-foreground',
  'color-text',
  'color-text-heading',
  'color-text-link',
]

interface ThemeProviderProps {
  children?: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  const applyStyles = (theme: Theme) => {
    for (const variable of variables) {
      document.documentElement.style.setProperty(
        `--${variable}`,
        `var(--${theme}-${variable})`,
      )
    }
  }

  useEffect(() => {
    const theme = (localStorage.getItem('theme') || getSystemTheme()) as Theme

    if (theme) {
      applyStyles(theme)
      setTheme(theme)
    }
  }, [])

  const value = {
    theme,
    setThemeMode: (theme: Theme) => {
      applyStyles(theme)
      setTheme(theme)
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
