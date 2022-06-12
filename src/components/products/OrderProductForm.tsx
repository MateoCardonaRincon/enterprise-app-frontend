import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from '../../services/orderService';
import { increaseProductStock } from '../../services/productService';
import { createOrder, loadOrderForm } from '../../state/slice/orderSlice';
import { restockProduct } from '../../state/slice/productSlice';
import { storeType } from '../../state/store';

type Props = {}

const OrderProductForm = (props: Props) => {

    const productToOrder = useSelector((state: storeType) => state.orders.productToOrder);

    const dispatch = useDispatch()

    const formRef = useRef<HTMLFormElement>(null)

    const [unitsToOrder, setUnitsToOrder] = useState(0);
    
    const [showAlert, setShowAlert] = useState(false);

    const [showValidation, setShowValidation] = useState(false);

    const defaultOrder = {
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
    }

    // Generate the order, updating the store and calling to the api to update the DB
    const onGenerateOrder = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (unitsToOrder && unitsToOrder > 0) {


            const orderToCreate = {
                dateOfOrder: new Date(),
                product: productToOrder,
                units: (unitsToOrder + productToOrder.stock <= productToOrder.maximumAmount) ?
                    unitsToOrder : productToOrder.maximumAmount - productToOrder.stock
            }

            let orderCreated = await saveOrder(orderToCreate);

            await increaseProductStock(orderCreated);

            dispatch(createOrder(orderCreated))
            dispatch(restockProduct({ productToOrder, unitsToOrder }))
            dispatch(loadOrderForm({ ...productToOrder, id:null }))

            if (unitsToOrder + productToOrder.stock > productToOrder.maximumAmount) {
                setShowAlert(true)
            }
            setShowValidation(true)
            setUnitsToOrder(0)

            if (null !== formRef.current) {
                formRef.current.reset();
            }
        }
    }

    // Cancel the order generation
    const onCloseOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setShowValidation(false)
        dispatch(loadOrderForm(defaultOrder))
    }

    const addUnitsToSell = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnitsToOrder(parseInt(e.target.value))
    }

    const closeValidation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setShowValidation(false)
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
    ) :
        (showValidation ? <div className="validator">
            <div>
                <span>Your order was created successfully </span> <br />
                {showAlert ?
                    <span>{`Stock exceeded! Only ${productToOrder.maximumAmount - productToOrder.stock} units were received.`}</span>
                    : <></>}

            </div>
        </div> : <></>)

}

export default OrderProductForm