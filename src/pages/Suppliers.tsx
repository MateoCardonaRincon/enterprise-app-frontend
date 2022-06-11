import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SuppliersTable from '../components/suppliers/SuppliersTable'
import SupplierSubscription from '../components/suppliers/SupplierSubscription'
import { getSuppliers } from '../services/supplierService'
import { getAllSuppliers } from '../state/slice/supplierSlice'

type Props = {}

const Suppliers = (props: Props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getSuppliers().then(
            suppliers => {
                dispatch(getAllSuppliers(suppliers))
            }
        )

    }, [])
    
    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Suppliers</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <SupplierSubscription />
                </div>
                <div className="col-8">
                    <SuppliersTable />
                </div>
            </div>
        </div>
    )
}

export default Suppliers