import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BillsList from '../components/sales/BillsList'
import { getBills } from '../services/billService'
import { getAllBills } from '../state/slice/billSlice'

type Props = {}

const Bills: React.FC<Props> = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getBills().then(
            bills => {
                dispatch(getAllBills(bills))
            }
        )
    }, [])

    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Histoy of Sales</h3>
            </div>
            <div className="d-flex flex-row">
                <BillsList />
            </div>
        </div>
    )
}

export default Bills