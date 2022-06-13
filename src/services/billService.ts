import { billType } from "../state/slice/billSlice";
import { ROOT } from "./apiConfig";

export const getBills = async (): Promise<billType[]> => {
    let response = await fetch(ROOT + "/bill/getall", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    let data = await response.json()
    return data
}

export const saveBill = async (bill: billType): Promise<billType> => {
    let billSaved = await fetch(ROOT + "/bill/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bill)
    }).then(response => response.json());

    return billSaved
}