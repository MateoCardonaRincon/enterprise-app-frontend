import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type billType = {
    id?: string,
    dateOfSale: Date,
    customerName: string,
    sellerName: string,
    soldProducts: productType[]
    totalPaid: number
}

const initialState: billType[] = []

const billSlice = createSlice(
    {
        name: 'bills',
        initialState,
        reducers: {
            createBill(state, action) {
                state.push(action.payload)
            },
            getAllBills(state, action) {
                return action.payload
            }
        }
    }
)

export const { createBill, getAllBills } = billSlice.actions

export default billSlice.reducer

export type { billType }
