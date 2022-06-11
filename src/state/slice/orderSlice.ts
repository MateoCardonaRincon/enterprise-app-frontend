import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type orderType = {
    id?: string,
    dateOfOrder: string,
    product: productType,
    units: number
}

type orderStateType = {
    orders: orderType[],
    productToOrder: productType
}

const initialState: orderStateType = {
    orders: [{
        id: "654dg654g",
        dateOfOrder: '',
        product: {
            id: '987654321',
            name: 'Screw 0.5 in',
            description: 'material: steel',
            stock: 0,
            minimumAmount: 50,
            maximumAmount: 200,
            price: 200,
            supplier: {
                id: '123456789',
                name: 'Tuerca Loca',
                phoneNumber: '3216549870',
                notes: 'screws, steel wire, and others',
                personalId: '1074205803'
            }
        },
        units: 60
    }],
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
                return state
            },
            getOrders(state, action) {
                return state
            },
            loadOrderForm(state, action) {
                const productToOrder = action.payload
                const stateWithLoadedOrder = { ...state, productToOrder: productToOrder }
                return stateWithLoadedOrder
            }
        }
    }
)

export const { createOrder, getOrders, loadOrderForm } = orderSlice.actions

export default orderSlice.reducer

export type { orderType, orderStateType }