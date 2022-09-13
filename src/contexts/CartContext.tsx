import { createContext, ReactNode, useState } from 'react'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface ProductAndAmount {
  product: Product
  amount: number
}

interface CartContextType {
  cart: ProductAndAmount[]
  cartSize: number
  totalPrice: number
  addToCart: (newProduct: Product) => void
  increaseProductAmount: (targetProduct: Product) => void
  decreaseProductAmount: (targetProduct: Product) => void
  removeProductFromCart: (targetProduct: Product) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductAndAmount[]>([])

  function addToCart(newProduct: Product) {
    setCart((state) => {
      const itemAlreadyInCart = state.find(
        (productAndAmount) => productAndAmount.product.id === newProduct.id,
      )

      if (itemAlreadyInCart) {
        const newCart = state.map((productAndAmount) => {
          if (productAndAmount.product.id !== itemAlreadyInCart.product.id) {
            return productAndAmount
          } else {
            return {
              ...itemAlreadyInCart,
              amount: itemAlreadyInCart.amount + 1,
            }
          }
        })
        return newCart
      } else {
        const newCart = [
          ...state,
          {
            product: newProduct,
            amount: 1,
          },
        ]
        return newCart
      }
    })
  }

  function increaseProductAmount(targetProduct: Product) {
    setCart((state) => {
      const targetItem = state.find(
        (productAndAmount) => productAndAmount.product.id === targetProduct.id,
      )
      const newCart = state.map((productAndAmount) => {
        if (productAndAmount.product.id !== targetItem.product.id) {
          return productAndAmount
        } else {
          return {
            ...targetItem,
            amount: targetItem.amount + 1,
          }
        }
      })
      return newCart
    })
  }

  function decreaseProductAmount(targetProduct: Product) {
    setCart((state) => {
      const targetItem = state.find(
        (productAndAmount) => productAndAmount.product.id === targetProduct.id,
      )
      const newCart = state.map((productAndAmount) => {
        if (productAndAmount.product.id !== targetItem.product.id) {
          return productAndAmount
        } else {
          return {
            ...targetItem,
            amount: targetItem.amount >= 2 ? targetItem.amount - 1 : 1,
          }
        }
      })
      return newCart
    })
  }

  function removeProductFromCart(targetProduct: Product) {
    setCart((state) => {
      const newCart = state.filter((productAndAmount) => {
        return productAndAmount.product.id !== targetProduct.id
      })
      return newCart
    })
  }

  function clearCart() {
    setCart([])
  }

  const { cartSize, totalPrice } = cart.reduce(
    (acc, productAndAmount) => {
      return {
        cartSize: acc.cartSize + productAndAmount.amount,
        totalPrice:
          acc.totalPrice +
          productAndAmount.amount * productAndAmount.product.price,
      }
    },
    { cartSize: 0, totalPrice: 0 },
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartSize,
        totalPrice,
        increaseProductAmount,
        decreaseProductAmount,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
