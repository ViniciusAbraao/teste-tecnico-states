// Importa as fontes Geist e Geist_Mono do Google Fonts
import { Geist, Geist_Mono } from 'next/font/google'
// Importa o componente de analytics da Vercel
import { Analytics } from '@vercel/analytics/next'
// Importa o CSS global
import './globals.css'

// Inicializa as fontes com o subset latino
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Componente principal do layout da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Define o idioma da página como inglês
    <html lang="en">
      {/* Aplica a fonte sans-serif e antialiasing ao body */}
      <body className={`font-sans antialiased`}>
        {/* Renderiza o conteúdo da página */}
        {children}
        {/* Adiciona o analytics da Vercel */}
        <Analytics />
      </body>
    </html>
  )
}
