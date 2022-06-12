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
                const productToRestock = action.payload.productToOrder

                const unitsOrdered = action.payload.unitsToOrder

                const unitsToRestock = (unitsOrdered + productToRestock.stock <= productToRestock.maximumAmount) ?
                    unitsOrdered : productToRestock.maximumAmount - productToRestock.stock

                const restockedProduct = { ...productToRestock, stock: unitsToRestock + productToRestock.stock }

                const newListOfProducts = state.map(product => product.id === restockedProduct.id ? restockedProduct : product)
                return newListOfProducts
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