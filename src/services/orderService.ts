import { orderType } from "../state/slice/orderSlice";

export const getOrders = async (): Promise<orderType[]> => {
    let response = await fetch("http://localhost:8080/order/getall")
    let data = await response.json()
    return data
}

export const saveOrder = async (order: orderType): Promise<orderType> => {
    let orderSaved = await fetch("http://localhost:8080/order/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }).then(response => response.json());

    return orderSaved
}