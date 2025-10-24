'use client' // Habilita o modo client-side do Next.js

// Importa o ThemeProvider do pacote next-themes
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

// Componente ThemeProvider para gerenciar temas (dark/light)
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Renderiza o ThemeProvider do next-themes envolvendo os filhos
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
