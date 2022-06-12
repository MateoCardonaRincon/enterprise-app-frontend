import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type billType = {
    id?: string,
    dateOfSale: Date,
    customerName: string,
    sellerName: string,
    soldProducts: productType[],
    totalPaid: number
}

type billStateType = {
    bills: billType[],
    cart: productType[]
}

const initialState: billStateType = {
    bills: [],
    cart: []
}

const billSlice = createSlice(
    {
        name: 'bills',
        initialState,
        reducers: {
            addProductToCart(state, action) {
                const currentCart = state.cart
                const updatedCart = [...currentCart, action.payload]
                const stateAfterAddProductToCart = { ...state, cart: updatedCart }
                return stateAfterAddProductToCart
            },
            createBill(state, action) {
                return state
            },
            getAllBills(state, action) {
                const billStateAfterLoadBills = { ...state, bills: action.payload }
                return billStateAfterLoadBills
            }
        }
    }
)

export const { createBill, getAllBills } = billSlice.actions

export default billSlice.reducer

export type { billType, billStateType }
