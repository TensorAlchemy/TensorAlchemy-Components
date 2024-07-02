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

const styles = {
  light: {
    '--background': '--light-background',
    '--foreground': '--light-foreground',
  },
  dark: {
    '--background': '--dark-background',
    '--foreground': '--dark-foreground',
  },
}

interface Props {
  children?: ReactNode
}

const ThemeProvider: FC<Props> = ({children}: Props) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  const applyStyles = (theme: Theme) => {
    const style = styles[theme]

    for (const [key, value] of Object.entries(style)) {
      document.documentElement.style.setProperty(`${key}`, `${value}`)
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
