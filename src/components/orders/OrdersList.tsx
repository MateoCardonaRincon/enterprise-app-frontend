import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderType } from '../../state/slice/orderSlice';
import { storeType } from '../../state/store';
type Props = {}

const OrdersList = (props: Props) => {


    const orders = useSelector((state: storeType) => state.orders.orders);

    const dispatch = useDispatch()

    const [selectedOrderId, setSelectedOrderId] = useState<string | undefined>("")
    const [showDetails, setShowDetails] = useState(false)

    const onShowDetails = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, order: orderType) => {
        e.preventDefault()
        setSelectedOrderId(order.id)
        setShowDetails(true)
    }

    const closeDetails = () => {
        setShowDetails(false)
    }

    return (
        <div className="container">
            {orders.map(order =>
                <div className="container" key={order.id}>
                    <div className="d-flex flex-row my-2 card w-100 justify-content-around" key={order.id}>
                        <div className="d-flex flex-col-2"><b>{order.dateOfOrder.toString()}</b></div>
                        <div className="d-flex flex-col-6">{order.product.description}</div>
                        <div className="d-flex flex-col-2">{order.units} units</div>
                        <div className="d-flex flex-col-2">${order.units * order.product.price}</div>
                        <div className="d-flex flex-col-2">
                            <button className="btn btn-success" onClick={(e) => onShowDetails(e, order)}>
                                📖
                            </button>
                        </div>

                    </div>
                    {order.id === selectedOrderId && showDetails ?
                        <div className="container details p-4">
                            <div className="d-flex flex-row justify-content-between" >
                                <div className="d-flex flex-col">
                                    <div className="col m-3">
                                        <b>Date of order: </b>{order.dateOfOrder.toString()} <br />
                                        <b>Sold units: </b>{order.units} <br />
                                        <b>Details of the product: </b>
                                        <p className="indent"> <b>Name: </b>{order.product.name} <br /> </p>
                                        <p className="indent"> <b>Description: </b>{order.product.description} <br /> </p>
                                        <p className="indent"> <b>Provider: </b>{order.product.supplier.name} <br /></p>
                                        <p className="indent"> <b>Unit price: </b>{order.product.price} <br /> </p>
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

export default OrdersList