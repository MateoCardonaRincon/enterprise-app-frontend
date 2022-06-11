import { createSlice } from "@reduxjs/toolkit";
import { supplierType } from "./supplierSlice";

type productType = {
    id: string,
    name: string,
    description: string,
    stock: number,
    minimumAmount: number,
    maximumAmount: number,
    price: number,
    supplier: supplierType,
    soldUnits?: number
}

const initialState: productType[] = [
    {
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
    }
]

const productSlice = createSlice(
    {
        name: 'pruducts',
        initialState,
        reducers: {
            addProduct(state, action) {
                return state
            },
            getAllProduct(state, action) {
                return state
            },
            deleteProduct(state, action) {
                return state
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
    getAllProduct,
    deleteProduct,
    restockProduct,
    sellProducts } = productSlice.actions

export default productSlice.reducer

export type { productType }