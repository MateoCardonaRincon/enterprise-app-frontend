import { productType } from "../state/slice/productSlice";

export const getProducts = async (): Promise<productType[]> => {
    let response = await fetch("http://localhost:8080/product/getall")
    let data = await response.json()
    return data
}

export const saveProduct = async (product: productType): Promise<productType> => {
    let productSaved = await fetch("http://localhost:8080/product/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    }).then(response => response.json());

    return productSaved
}