import { ReactNode, createContext, useEffect, useState } from 'react'
import { DATABASE } from '../database/data'

export interface CartProps {
  id: number
  image: string
  title: string
  price: number
  quantity: number
}

export interface ItemsProps {
  id: number
  image: string
  title: string
  description?: string
  price: number
  quantity: number
}

interface CartContextType {
  itemsInCart: number
  cart: CartProps[]
  items: ItemsProps[]
  addToCart: (itemID: ItemsProps) => void
  decrementItemCart: (itemID: ItemsProps) => void
  sumItemsInCart: () => number
  totalSumWithDelivery: () => number
  removeAllQuantityOfItem: (id: number) => void
  quantityOfItem: (id: number) => number | undefined
}

export const CoffeeContext = createContext({} as CartContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [items, setItems] = useState<ItemsProps[]>([])

  useEffect(() => {
    setItems(DATABASE)
  }, [])

  function addToCart(itemID: ItemsProps) {
    const existItemToCart = cart.find((item) => item.id === itemID.id)

    if (existItemToCart) {
      const updateCart = cart.map((items) => {
        if (items.id === itemID.id) {
          return {
            ...items,
            quantity: items.quantity + 1,
          }
        }

        return items
      })
      setCart(updateCart)
    } else {
      const newItem = {
        ...itemID,
        quantity: 1,
      }
      setCart([...cart, newItem])
    }
  }

  function decrementItemCart(itemID: ItemsProps) {
    const existItemToCart = cart.find((item) => item.id === itemID.id)
    if (existItemToCart?.quantity === 1) {
      const updateCart = cart.filter((items) => items.id !== itemID.id)
      setCart(updateCart)
    } else {
      const updateCart = cart.map((items) => {
        if (items.id === itemID.id) {
          return {
            ...items,
            quantity: items.quantity - 1,
          }
        }
        return items
      })
      setCart(updateCart)
    }
  }

  function quantityOfItem(id: number) {
    const existItemToCart = cart.find((item) => item.id === id)
    return existItemToCart?.quantity
  }

  function removeAllQuantityOfItem(id: number) {
    const updateCart = cart.filter((items) => {
      return items.id !== id
    })
    setCart(updateCart)
  }

  const itemsInCart = cart.filter((items) => items).length

  function sumItemsInCart() {
    const sum = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return sum
  }

  function totalSumWithDelivery() {
    const priceDelivery = 3.5
    return sumItemsInCart() + priceDelivery
  }

  const contextValues = {
    cart,
    items,
    addToCart,
    decrementItemCart,
    itemsInCart,
    sumItemsInCart,
    totalSumWithDelivery,
    removeAllQuantityOfItem,
    quantityOfItem,
  }

  return (
    <CoffeeContext.Provider value={contextValues}>
      {children}
    </CoffeeContext.Provider>
  )
}
