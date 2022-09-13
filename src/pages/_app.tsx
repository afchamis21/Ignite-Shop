import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { CartMenuContainer, Container, Header } from '../styles/pages/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { CartContextProvider } from '../contexts/CartContext'
import { CartMenu } from '../components/CartMenu'
import { useState } from 'react'
import { OpenCartMenuButton } from '../components/OpenCartMenuButton'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

  function handleCloseCartMenu() {
    setIsCartMenuOpen(false)
  }

  function handleToggleCartMenu() {
    setIsCartMenuOpen((state) => {
      return !state
    })
  }

  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Link href="/">
            <Image
              src={logoImg.src}
              width={logoImg.width}
              height={logoImg.height}
              alt=""
            />
          </Link>
          <OpenCartMenuButton handleToggleCartMenu={handleToggleCartMenu} />
        </Header>
        <Component {...pageProps} />
        {isCartMenuOpen && (
          <CartMenuContainer>
            <CartMenu handleCloseCartMenu={handleCloseCartMenu} />
          </CartMenuContainer>
        )}
      </CartContextProvider>
    </Container>
  )
}
