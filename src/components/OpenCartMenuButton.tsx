import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { CartButton } from '../styles/pages/app'

interface CartMenuButtonProps {
  handleToggleCartMenu: () => void
}

export function OpenCartMenuButton({
  handleToggleCartMenu,
}: CartMenuButtonProps) {
  const { cartSize } = useContext(CartContext)
  return (
    <CartButton onClick={handleToggleCartMenu}>
      <Handbag size={24} weight="bold" />
      {cartSize !== 0 && <span>{cartSize}</span>}
    </CartButton>
  )
}
