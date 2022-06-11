import React from 'react'
import SuppliersTable from '../components/SuppliersTable'
import SupplierSubscription from '../components/SupplierSubscription'

type Props = {}

const Suppliers = (props: Props) => {
    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Suppliers</h3>
            </div>
            <div className="row">
                <div className="col-5">
                    <SupplierSubscription />
                </div>
                <div className="col-7">
                    <SuppliersTable />
                </div>
            </div>
        </div>
    )
}

export default Suppliers