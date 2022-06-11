import { supplierType } from "../state/slice/supplierSlice";

export const getSuppliers = async (): Promise<supplierType[]> => {
    let response = await fetch("http://localhost:8080/supplier/getall")
    let data = await response.json()
    return data
}

export const saveSupplier = async (supplier: supplierType): Promise<supplierType> => {
    let supplierSaved = await fetch("http://localhost:8080/supplier/subscribe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(supplier)
    }).then(response => response.json());

    return supplierSaved
}

export const removeSupplier = async (supplier: supplierType): Promise<number> => {
    let response = await fetch(`http://localhost:8080/supplier/delete/${supplier.id}`,
        { method: "DELETE" });
    return response.status
}