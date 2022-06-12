import { billType } from "../state/slice/billSlice";

export const getBills = async (): Promise<billType[]> => {
    let response = await fetch("http://localhost:8080/bill/getall")
    let data = await response.json()
    return data
}

export const saveBill = async (bill: billType): Promise<billType> => {
    let billSaved = await fetch("http://localhost:8080/bill/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bill)
    }).then(response => response.json());

    return billSaved
}