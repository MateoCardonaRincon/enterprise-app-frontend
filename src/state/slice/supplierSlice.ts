import { createSlice } from "@reduxjs/toolkit";

type supplierType = {
    id?: string,
    name: string,
    phoneNumber: string,
    notes: string,
    personalId: string
}

const initialState: supplierType[] = []

const supplierSlice = createSlice(
    {
        name: 'suppliers',
        initialState,
        reducers: {
            getAllSuppliers(state, action) {
                return action.payload
            },
            subscribeSupplier(state, action) {
                state.push(action.payload)
            },
            deleteSupplier(state, action) {
                const supplierToDelete = action.payload

                const newListOfSuppliersAfterDelete = state
                    .filter(supplier => supplier.personalId !== supplierToDelete.personalId)

                return newListOfSuppliersAfterDelete

            }
        }
    }
)

export const { getAllSuppliers, subscribeSupplier, deleteSupplier } = supplierSlice.actions

export default supplierSlice.reducer

export type { supplierType }
