import { CartState, Item } from './reducer'
import { OrderInfo } from '../pages/cart'
import { NextRouter } from 'next/router'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT',
  DECREASE_ITEM_AMOUNT = 'DECREASE_ITEM_AMOUNT',
  CHECKOUT_CART = 'CHECKOUT_CART',
  LOAD_STATE = 'LOAD_STATE',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREASE_ITEM_AMOUNT
        | ActionTypes.DECREASE_ITEM_AMOUNT
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NextRouter
      }
    }
  | {
      type: ActionTypes.LOAD_STATE
      payload: {
        storedState: CartState
      }
    }

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function increaseItemAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREASE_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decreaseItemAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutCartAction(order: OrderInfo, callback: NextRouter) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}

export function loadStateAction(storedState: CartState) {
  return {
    type: ActionTypes.LOAD_STATE,
    payload: {
      storedState,
    },
  } satisfies Actions
}
