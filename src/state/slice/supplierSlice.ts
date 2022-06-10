import { createSlice } from "@reduxjs/toolkit";

type supplierType = {
    id: string,
    name: string,
    phoneNumber: string,
    notes?: string,
    personalId: string
}

const initialState: supplierType[] = [
    {
        id: '123456789',
        name: 'Tuerca Loca',
        phoneNumber: '3216549870',
        notes: 'screws, steel wire, and others',
        personalId: '1074205803'
    }
]

const supplierSlice = createSlice(
    {
        name: 'suppliers',
        initialState,
        reducers: {
            subscribeSupplier(state, action){
                state.push(action.payload)
            },
            deleteSupplier(state, action){
                return state
            }
        }
    }
)

export const {subscribeSupplier, deleteSupplier} = supplierSlice.actions

export default supplierSlice.reducer

export type { supplierType }
