import React from 'react'
import AddProductForm from './AddProductForm'
import OrderProductForm from './OrderProductForm'

type Props = {}

const ProductManagement: React.FunctionComponent = (props: Props) => {

    return (
        <div className="container">
            <div className="row mb-4">
                <OrderProductForm />
            </div>
            <div className="row">
                <AddProductForm />
            </div>
        </div>
    )
}

export default ProductManagement