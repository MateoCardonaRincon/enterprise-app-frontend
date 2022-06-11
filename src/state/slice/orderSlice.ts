import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";
import { supplierType } from "./supplierSlice";

type orderType = {
    id: string,
    dateOfOrder: Date,
    product: productType,
    units: number
}

const initialState: orderType[] = [
    {
        id: "654dg654g",
        dateOfOrder: new Date(Date.now()),
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
    }
]

const orderSlice = createSlice(
    {
        name: 'pruducts',
        initialState,
        reducers: {
            createOrder(state, action) {
                return state
            },
            getOrders(state, action) {
                return state
            }
        }
    }
)

export const { createOrder, getOrders } = orderSlice.actions

export default orderSlice.reducer

export type { orderType }