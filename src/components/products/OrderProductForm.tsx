import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, loadOrderForm } from '../../state/slice/orderSlice';
import { storeType } from '../../state/store';

type Props = {}

const OrderProductForm = (props: Props) => {

    const productToOrder = useSelector((state: storeType) => state.orders.productToOrder);

    const dispatch = useDispatch()

    const onGenerateOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        // dispatch(createOrder(productToOrder))
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

    return productToOrder.id ? (
        <form className="form">
            <div className="container pt-4 pb-2">
                <div className="d-flex flex-row justify-content-center">
                    <h3>Order</h3>
                </div>
                <div>
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
                    <input type="text" name="name" value={""} onChange={() => { }} placeholder="Units to order" required />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-danger float-start"
                                onClick={onCloseOrder}>Close</button>
                        </div>
                        <div className="col-8">
                            <button className="btn btn-primary w100 float-end"
                                onClick={onGenerateOrder}>Generate order</button>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    ) : <></>
}

export default OrderProductForm