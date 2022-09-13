import axios from 'axios'

import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import {
  CartMenuContainer,
  CartMenuFooter,
  ProductCardsList,
} from '../styles/pages/cartMenu'
import { ProductCart } from './ProductCard'

interface CartMenuProps {
  handleCloseCartMenu: () => void
}

export function CartMenu({ handleCloseCartMenu }: CartMenuProps) {
  const { cart, cartSize, totalPrice, clearCart } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        lineItems: cart.map((productAndAmount) => {
          return {
            price: productAndAmount.product.defaultPriceId,
            quantity: productAndAmount.amount,
          }
        }),
      })

      clearCart()

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert(err.message)
    }
  }
  return (
    <CartMenuContainer>
      <button onClick={handleCloseCartMenu} id="closeButton">
        <X size={24} weight="bold" />
      </button>
      <h3>Sacola de compras</h3>
      <ProductCardsList>
        {cart.map((productAndAmount) => {
          return (
            <ProductCart
              key={productAndAmount.product.id}
              product={productAndAmount.product}
              amount={productAndAmount.amount}
            />
          )
        })}
      </ProductCardsList>
      <CartMenuFooter>
        <div>
          <span>Quantidade</span>
          <span>{cartSize} itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice / 100)}
          </strong>
        </div>
        <button
          onClick={handleBuyProducts}
          disabled={isCreatingCheckoutSession}
        >
          Finalizar compra
        </button>
      </CartMenuFooter>
    </CartMenuContainer>
  )
}
