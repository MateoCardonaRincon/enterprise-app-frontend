import { createSlice } from "@reduxjs/toolkit";
import { supplierType } from "./supplierSlice";

type productType = {
    id?: string,
    name: string,
    description: string,
    stock: number,
    minimumAmount: number,
    maximumAmount: number,
    price: number,
    supplier: supplierType,
    soldUnits?: number
}

const initialState: productType[] = []

const productSlice = createSlice(
    {
        name: 'pruducts',
        initialState,
        reducers: {
            addProduct(state, action) {
                state.push(action.payload);
            },
            getAllProducts(state, action) {
                return action.payload
            },
            restockProduct(state, action) {
                return state
            },
            sellProducts(state, action) {
                return state
            }
        }
    }
)

export const {
    addProduct,
    getAllProducts,
    restockProduct,
    sellProducts } = productSlice.actions

export default productSlice.reducer

export type { productType }