import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type orderType = {
    id?: string,
    dateOfOrder: Date,
    product: productType,
    units: number
}

type orderStateType = {
    orders: orderType[],
    productToOrder: productType
}

const initialState: orderStateType = {
    orders: [],
    productToOrder: {
        name: '',
        description: '',
        stock: 0,
        minimumAmount: 0,
        maximumAmount: 0,
        price: 0,
        supplier: {
            name: '-',
            phoneNumber: '0',
            notes: '',
            personalId: ''
        }
    }
}

const orderSlice = createSlice(
    {
        name: 'orders',
        initialState,
        reducers: {
            createOrder(state, action) {
                const currentListOfOrders = state.orders
                const newListOfOrders = [...currentListOfOrders, action.payload]
                const newStateAfterAddNewNote = { ...state, orders: newListOfOrders }
                return newStateAfterAddNewNote
            },
            getAllOrders(state, action) {
                const orderStateAfterLoadOrders = { ...state, orders: action.payload }
                return orderStateAfterLoadOrders
            },
            loadOrderForm(state, action) {
                const productToOrder = action.payload
                const stateWithLoadedOrder = { ...state, productToOrder: productToOrder }
                return stateWithLoadedOrder
            }
        }
    }
)

export const { createOrder, getAllOrders, loadOrderForm } = orderSlice.actions

export default orderSlice.reducer

export type { orderType, orderStateType }