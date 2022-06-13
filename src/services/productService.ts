import { orderType } from "../state/slice/orderSlice";
import { productType } from "../state/slice/productSlice";
import { ROOT } from "./apiConfig";

export const getProducts = async (): Promise<productType[]> => {
    let response = await fetch(ROOT + "/product/getall")
    let data = await response.json()
    return data
}

export const saveProduct = async (product: productType): Promise<productType> => {
    let productSaved = await fetch(ROOT + "/product/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    }).then(response => response.json());

    return productSaved
}

export const increaseProductStock = async (order: orderType): Promise<productType> => {
    let productRestocked = await fetch(`${ROOT}/product/restock/${order.units}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order.product)
    }).then(response => response.json());

    return productRestocked
}

