/* eslint-disable @typescript-eslint/no-unused-vars */
import { produce } from 'immer'
import { OrderInfo } from '../pages/cart'
import { Actions, ActionTypes } from './actions'
import { randomUUID } from 'crypto'

export interface Item {
  id: string
  amount: number
}

export interface Order extends OrderInfo {
  id: string
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.amount += action.payload.item.amount
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        draft.cart.splice(itemIndex, 1)
      })

    case ActionTypes.INCREASE_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const item = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (item) {
          item.amount++
        }
      })

    case ActionTypes.DECREASE_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const item = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (item && item.amount > 1) {
          item.amount--
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: randomUUID().toString(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []
      })

    case ActionTypes.LOAD_STATE:
      return produce(state, (draft) => {
        draft.cart = action.payload.storedState.cart
        draft.orders = action.payload.storedState.orders
      })

    default:
      return state
  }
}
