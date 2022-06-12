import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { productType } from '../../state/slice/productSlice'
import { storeType } from '../../state/store'

type Props = {}

const ShoppingCartForm = (props: Props) => {

    const products = useSelector((state: storeType) => state.products)

    const formRef = useRef(null)

    const [units, setUnits] = useState<number>()

    const [productId, setProductId] = useState("")

    const [cart, setCart] = useState<any>([])
    const [showWarning, setShowWarning] = useState(false)

    const addUnits = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnits(parseInt(e.target.value))
    }
    const addProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductId(e.target.value)
    }
    const onAddProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const selectedProduct = products.find(product => product.id === productId)
        const isAlreadyInCart = cart.filter((product: productType) => product.id === productId)
        const productWithSoldUnits = { ...selectedProduct, soldUnits: units }

        console.log(isAlreadyInCart)
        if (isAlreadyInCart.length !== 0) {
            setShowWarning(true)
        }
        if (isAlreadyInCart.length === 0) {
            setCart([...cart, productWithSoldUnits])
            setShowWarning(false)
        }

    }
    return (
        <form className="form w-100" ref={formRef}>
            <div className="container px-5 py-4">
                <div className="d-flex flex-row justify-content-center my-2">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <select className="mb-1" name="supplier" onChange={(e) => addProduct(e)} required >
                                <option value=''>Products...</option>
                                {products.map(product => {
                                    return <option value={product.id} key={product.id}>{`${product.name}: ${product.description}`}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <input type="number" name="units" onChange={(e) => addUnits(e)} placeholder="Units" required />
                        </div>
                    </div>
                    {showWarning ? <span className="link"  style={{ color: "#d93838" }}>This product already exist in the cart.</span> : <></>}
                    <div className="row my-2">
                        <button className="btn btn-primary" onClick={e => onAddProduct(e)}>Add to Cart</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row my-2">
                        {cart.map((item: productType) =>
                            <p key={item.id}><b>Item: </b>{`${item.name} (${item.description}) --- `}
                                <b>Subtotal: </b>{`$${item.price * (item.soldUnits ? item.soldUnits : 0)} (${item.soldUnits ? item.soldUnits : 0} * $${item.price})`}
                            </p>

                        )}
                    </div>
                    <div className="row my-4">
                        <button className="btn btn-primary" onClick={onAddProduct}>Continue</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ShoppingCartForm