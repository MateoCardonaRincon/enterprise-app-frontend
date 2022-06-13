import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer, { supplierType } from './slice/supplierSlice'
import productsReducer, { productType } from './slice/productSlice'
import billsReducer, { billStateType } from './slice/billSlice'
import ordersReducer, { orderStateType } from './slice/orderSlice'
import loginReducer, { authType } from "./slice/loginSlice";

const store = configureStore(
    {
        reducer: {
            suppliers: suppliersReducer,
            products: productsReducer,
            bills: billsReducer,
            orders: ordersReducer,
            authentication: loginReducer
        }
    }
)

type storeType = {
    suppliers: supplierType[],
    products: productType[],
    bills: billStateType,
    orders: orderStateType,
    authentication: authType
}

export default store

export type { storeType }