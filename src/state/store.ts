import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer from './slice/supplierSlice'
import productsReducer from './slice/productSlice'

const store = configureStore(
    {
        reducer: {
            suppliers: suppliersReducer,
            products: productsReducer
        }
    }
)

export default store