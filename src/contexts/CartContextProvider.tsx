import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { OrderInfo } from '../pages/cart'
import { cartReducer, Item, Order } from '../reducers/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decreaseItemAmountAction,
  increaseItemAmountAction,
  removeItemAction,
} from '../reducers/actions'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  increaseItemAmount: (itemId: Item['id']) => void
  decreaseItemAmount: (itemId: Item['id']) => void
  checkoutCart: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    // (cartState) => {
    //   const storedState = localStorage.getItem(
    //     '@coffee-delivery:cart-state-1.0.0',
    //   )

    //   if (storedState) {
    //     return JSON.parse(storedState)
    //   }

    //   return cartState
    // },
  )

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function increaseItemAmount(itemId: Item['id']) {
    dispatch(increaseItemAmountAction(itemId))
  }

  function decreaseItemAmount(itemId: Item['id']) {
    dispatch(decreaseItemAmountAction(itemId))
  }

  function checkoutCart(order: OrderInfo) {
    dispatch(checkoutCartAction(order))
  }

  useEffect(() => {
    if (cartState) {
      const stringfiedState = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stringfiedState)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        increaseItemAmount,
        decreaseItemAmount,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
