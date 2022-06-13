import { orderType } from "../state/slice/orderSlice";
import { ROOT } from "./apiConfig";

export const getOrders = async (): Promise<orderType[]> => {
    let response = await fetch(ROOT + "/order/getall")
    let data = await response.json()
    return data
}

export const saveOrder = async (order: orderType): Promise<orderType> => {
    let orderSaved = await fetch(ROOT + "/order/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    }).then(response => response.json());

    return orderSaved
}