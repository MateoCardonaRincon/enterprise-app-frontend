import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { saveSupplier } from '../services/supplierService'
import { subscribeSupplier, supplierType } from '../state/slice/supplierSlice'

const SupplierSubscription: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [supplierName, setSupplierName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [notes, setNotes] = useState("")
    const [document, setDocument] = useState("")

    const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSupplierName(e.target.value)
    }
    const addContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactNumber(e.target.value)
    }
    const addNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotes(e.target.value)
    }
    const addDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(e.target.value)
    }

    const addSupplier = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log("supplier", supplierName)
        if (supplierName && contactNumber && notes && document) {
            const supplierToSubscribe: supplierType = {
                name: supplierName,
                phoneNumber: contactNumber,
                notes: notes,
                personalId: document
            }
            let supplierSaved = await saveSupplier(supplierToSubscribe);
            dispatch(subscribeSupplier(supplierSaved))
            setSupplierName('')
            setContactNumber('')
            setNotes('')
            setDocument('')
        }
    }

    return (
        <form className="form">
            <div className="container pt-4 pb-2">

                <div className="d-flex flex-row justify-content-center">
                    <h3>Supplier Subscription</h3>
                </div>
                <div className="row my-2">
                    <input type="text" name="name" value={supplierName} onChange={addName} placeholder="Supplier name" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="contact" value={contactNumber} onChange={addContact} placeholder="Phone number" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="notes" value={notes} onChange={addNotes} placeholder="Notes" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="document" value={document} onChange={addDocument} placeholder="Identification number" required />
                </div>
                <div className="row my-4">
                    <Button className="btn btn-primary" onClick={addSupplier}>Subscribe</Button>
                </div>
            </div>
        </form>
    )
}

export default SupplierSubscription