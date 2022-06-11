import React from 'react'
import AddProductForm from './AddProductForm'
import OrderProductForm from './OrderProductForm'

type Props = {}

const ProductManagement:React.FunctionComponent = (props: Props) => {

    return (
        <div>
            <div className="row my-4">
                <AddProductForm />
            </div>
            <div className="row my-4">
                <OrderProductForm />
            </div>
        </div>
    )
}

export default ProductManagement