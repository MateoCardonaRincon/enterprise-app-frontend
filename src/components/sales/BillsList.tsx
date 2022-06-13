import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { billType } from '../../state/slice/billSlice';
import { storeType } from '../../state/store';

type Props = {}

const BillsList: React.FC<Props> = (props) => {


    const bills = useSelector((state: storeType) => state.bills.bills);

    const dispatch = useDispatch()

    const [selectedBillId, setSelectedBillId] = useState<string | undefined>("")
    const [showDetails, setShowDetails] = useState(false)

    const onShowDetails = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, bill: billType) => {
        e.preventDefault()
        setSelectedBillId(bill.id)
        setShowDetails(true)
    }

    const closeDetails = () => {
        setShowDetails(false)
    }

    return (
        <div className="container">
            {bills.map(bill =>
                <div className="container" key={bill.id}>
                    <div className="row my-2 card w-100" key={bill.id}>
                        <div className="d-flex col-2"><b>{bill.dateOfSale.toString()}</b></div>
                        <div className="d-flex col-6"><b>Customer</b>{`: ${bill.customerName}`}</div>
                        <div className="d-flex col-2"><b>Seller</b>{`: ${bill.sellerName}`}</div>
                        <div className="d-flex col-2">
                            <button className="btn btn-success" onClick={(e) => onShowDetails(e, bill)}>
                                📖
                            </button>
                        </div>

                    </div>
                    {bill.id === selectedBillId && showDetails ?
                        <div className="container details p-4">
                            <div className="d-flex flex-row justify-content-between" >
                                <div className="d-flex flex-col">
                                    <div className="col m-3">
                                        <b>Date of sale: </b>{bill.dateOfSale.toString()} <br />
                                        <b>Customer: </b>{bill.customerName} <br />
                                        <b>Seller: </b>{bill.sellerName} <br />
                                        <b>Total paid: </b>{bill.totalPaid} <br />
                                        <b>List of products: </b>
                                        {bill.soldProducts.map(product =>
                                            <div className="row ml-4" key={product.id}>
                                                <hr></hr>
                                                <p className="indent"> <b>Product: </b>{product.name} (${product.price} unit)<br /> </p>
                                                <p className="indent"> <b>Description: </b>{product.description} <br /> </p>
                                                <p className="indent"> <b>Subtotal: </b>{product.price * (product.soldUnits ? product.soldUnits : 0)} <br /> </p>
                                            </div>
                                        )}
                                    </div>
                                </div >
                            </div>
                            <div className="row">
                                <button className="btn btn-danger btn-block" onClick={closeDetails}>Hide Details</button>
                            </div >
                        </div> : <></>}
                </div>)}
        </div >
    )
}

export default BillsList