import React from 'react'
import ProductManagement from '../components/products/ProductManagement'
import ProductsTable from '../components/products/ProductsTable'

type Props = {}

const Products = (props: Props) => {
    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Suppliers</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <ProductManagement />
                </div>
                <div className="col-8">
                    <ProductsTable />
                </div>
            </div>
        </div>
    )
}

export default Products