import Image from 'next/future/image'
import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import {
  AmountController,
  ProductCardContainer,
  ProductCardFooter,
} from '../styles/pages/cartMenu'

interface ProductCardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }
  amount: number
}

export function ProductCart({ product, amount }: ProductCardProps) {
  const {
    decreaseProductAmount,
    increaseProductAmount,
    removeProductFromCart,
  } = useContext(CartContext)
  return (
    <ProductCardContainer key={product.id}>
      <div className="imageContainer">
        <Image src={product.imageUrl} alt="" width={95} height={95} />
      </div>
      <div>
        <p>{product.name}</p>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price / 100)}
        </strong>
        <ProductCardFooter>
          <AmountController>
            <button
              onClick={() => {
                decreaseProductAmount(product)
              }}
            >
              <Minus size={16} />
            </button>
            <span>{amount}</span>
            <button
              onClick={() => {
                increaseProductAmount(product)
              }}
            >
              <Plus size={16} />
            </button>
          </AmountController>
          <button
            onClick={() => {
              removeProductFromCart(product)
            }}
          >
            Remover
          </button>
        </ProductCardFooter>
      </div>
    </ProductCardContainer>
  )
}
