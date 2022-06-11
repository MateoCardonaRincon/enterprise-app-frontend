import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer, { supplierType } from './slice/supplierSlice'
import productsReducer, { productType } from './slice/productSlice'
import billsReducer, { billType } from './slice/billSlice'
import ordersReducer, { orderType } from './slice/orderSlice'

const store = configureStore(
    {
        reducer: {
            suppliers: suppliersReducer,
            products: productsReducer,
            bills: billsReducer,
            orders: ordersReducer
        }
    }
)

type storeType = {
    suppliers: supplierType[],
    products: productType[],
    bills: billType[],
    orders: orderType[]
}

export default store

export type { storeType }