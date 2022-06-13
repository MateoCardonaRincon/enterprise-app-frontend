import { supplierType } from "../state/slice/supplierSlice";
import { ROOT } from "./apiConfig";

export const getSuppliers = async (): Promise<supplierType[]> => {
    let response = await fetch(ROOT + "/supplier/getall")
    let data = await response.json()
    return data
}

export const saveSupplier = async (supplier: supplierType): Promise<supplierType> => {
    let supplierSaved = await fetch(ROOT + "/supplier/subscribe", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplier)
    }).then(response => response.json());

    return supplierSaved
}

export const removeSupplier = async (supplier: supplierType): Promise<number> => {
    let response = await fetch(`${ROOT}/supplier/delete/${supplier.id}`,
        { method: "DELETE" });
    return response.status
}