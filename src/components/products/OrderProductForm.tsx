import React from 'react'
import { Button } from 'react-bootstrap'

type Props = {}

const OrderProductForm = (props: Props) => {
    return (
        <form className="form">
            <div className="container pt-4 pb-2">

                <div className="d-flex flex-row justify-content-center">
                    <h3>Supplier Subscription</h3>
                </div>
                <div className="row my-2">
                    <input type="text" name="name" value={""} onChange={() => { }} placeholder="Supplier name" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="contact" value={""} onChange={() => { }} placeholder="Phone number" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="notes" value={""} onChange={() => { }} placeholder="Notes" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="document" value={""} onChange={() => { }} placeholder="Identification number" required />
                </div>
                <div className="row my-4">
                    <Button className="btn btn-primary" onClick={() => { }}></Button>
                </div>
            </div>
        </form>
    )
}

export default OrderProductForm