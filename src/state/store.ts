import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer, { supplierType } from './slice/supplierSlice'
import productsReducer, { productType } from './slice/productSlice'
import billsReducer, { billType } from './slice/billSlice'
import ordersReducer, { orderType } from './slice/orderSlice'
import loginReducer from "./slice/loginSlice";

const store = configureStore(
    {
        reducer: {
            suppliers: suppliersReducer,
            products: productsReducer,
            bills: billsReducer,
            orders: ordersReducer,
            logged: loginReducer
        }
    }
)

type storeType = {
    suppliers: supplierType[],
    products: productType[],
    bills: billType[],
    orders: orderType[],
    logged: boolean
}

export default store

export type { storeType }