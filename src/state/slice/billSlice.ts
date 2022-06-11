import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type billType = {
    id: string,
    dateOfSale: Date,
    customerName: string,
    sellerName: string,
    soldProducts: productType[]
    totalPaid: number
}

const initialState: billType[] = [
    {
        id: "65432187",
        dateOfSale: new Date(Date.now()),
        customerName: "Mateo",
        sellerName: "Don Raul",
        soldProducts: [
            {
                id: '86516348631',
                name: 'Screw 1.5 in',
                description: 'material: steel',
                stock: 50,
                minimumAmount: 50,
                maximumAmount: 200,
                price: 250,
                supplier: {
                    id: '123456789',
                    name: 'Tuerca Loca',
                    phoneNumber: '3216549870',
                    notes: 'screws, steel wire, and others',
                    personalId: '1074205803'
                },
                soldUnits: 12
            },
            {
                id: '987654321',
                name: 'Screw 0.5 in',
                description: 'material: steel',
                stock: 100,
                minimumAmount: 50,
                maximumAmount: 200,
                price: 200,
                supplier: {
                    id: '123456789',
                    name: 'Tuerca Loca',
                    phoneNumber: '3216549870',
                    notes: 'screws, steel wire, and others',
                    personalId: '1074205803'
                },
                soldUnits: 15
            }
        ],
    totalPaid: 6000
    }
]

const billSlice = createSlice(
    {
        name: 'bills',
        initialState,
        reducers: {
            createBill(state, action) {
                state.push(action.payload)
            },
            getBills(state, action) {
                return state
            }
        }
    }
)

export const { createBill, getBills } = billSlice.actions

export default billSlice.reducer

export type { billType }
