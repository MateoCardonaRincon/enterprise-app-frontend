import React, { useState } from 'react'
import AddProductForm from './AddProductForm'
import OrderProductForm from './OrderProductForm'

type Props = {}

const ProductManagement:React.FunctionComponent = (props: Props) => {
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState()
    const [minimum, setMinimum] = useState()
    const [maximum, setMaximum] = useState()
    const [price, setPrice] = useState()
    const [supplier, setSupplier] = useState("")
    
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