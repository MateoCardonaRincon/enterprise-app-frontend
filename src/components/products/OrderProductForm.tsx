import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from '../../services/orderService';
import { createOrder, loadOrderForm } from '../../state/slice/orderSlice';
import { storeType } from '../../state/store';

type Props = {}

const OrderProductForm = (props: Props) => {

    const productToOrder = useSelector((state: storeType) => state.orders.productToOrder);
    const orderState = useSelector((state: storeType) => state.orders);

    const dispatch = useDispatch()

    const formRef = useRef<HTMLFormElement>(null)

    const [unitsToOrder, setUnitsToOrder] = useState(0);

    const onGenerateOrder = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (unitsToOrder && (unitsToOrder + productToOrder.stock <= productToOrder.maximumAmount)) {
            const orderToCreate = {
                dateOfOrder: new Date(),
                product: productToOrder,
                units: unitsToOrder
            }

            let orderCreated = await saveOrder(orderToCreate);

            dispatch(createOrder(orderCreated))
            setUnitsToOrder(0)
            if (null !== formRef.current) {
                formRef.current.reset();
            }
        }

    }

    const onCloseOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(loadOrderForm({
            name: '',
            description: '',
            stock: 0,
            minimumAmount: 0,
            maximumAmount: 0,
            price: 0,
            supplier: {
                name: '-',
                phoneNumber: '0',
                notes: '',
                personalId: ''
            }
        }))
    }

    const addUnitsToSell = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnitsToOrder(parseInt(e.target.value))
    }

    return productToOrder.id ? (
        <form className="form" ref={formRef}>
            <div className="container py-4">
                <div className="d-flex flex-row justify-content-center">
                    <h3>Order</h3>
                </div>
                <div className="row my-2">
                    <span><b>Product: </b>{`${productToOrder.name} (${productToOrder.description})`}</span><br />
                    <div className="d-flex justify-content-between">
                        <span>
                            <b>Stock: </b>{`${productToOrder.stock}`}
                        </span>
                        <span>
                            <b>Min: </b>{`${productToOrder.minimumAmount}`}
                        </span>
                        <span>
                            <b>Max: </b>{`${productToOrder.maximumAmount}`}
                        </span>
                    </div>
                    <span><b>Unit price: </b>{`${productToOrder.price}`}</span><br />
                    <span><b>Supplier: </b>{`${productToOrder.supplier.name}`}</span><br />
                </div>

                <div className="row my-3">
                    <input type="number" name="units" onChange={(e) => addUnitsToSell(e)} placeholder="Units to order" required />
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-danger w-100 float-start" type="button"
                            onClick={onCloseOrder}>Close</button>
                    </div>
                    <div className="col-8">
                        <button className="btn btn-primary w-100 float-end" type="button"
                            onClick={onGenerateOrder}>Generate order</button>
                    </div>
                </div>
            </div>
        </form >
    ) : <></>
}

export default OrderProductForm