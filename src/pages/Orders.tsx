import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import OrdersList from '../components/orders/OrdersList'
import { getOrders } from '../services/orderService'
import { getAllOrders } from '../state/slice/orderSlice'

type Props = {}

const Orders: React.FC<Props> = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getOrders().then(
            orders => {
                dispatch(getAllOrders(orders))
            }
        )
    }, [])

    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>History of orders</h3>
            </div>
            <div className="d-flex flex-row">
                <OrdersList />
            </div>
        </div>
    )
}

export default Orders