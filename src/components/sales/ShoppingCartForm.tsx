import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveBill } from '../../services/billService'
import { createBill } from '../../state/slice/billSlice'
import { productType } from '../../state/slice/productSlice'
import { storeType } from '../../state/store'

type Props = {}

const ShoppingCartForm = (props: Props) => {

    const products = useSelector((state: storeType) => state.products)

    const dispatch = useDispatch()

    const formRef = useRef<HTMLFormElement>(null)

    const [units, setUnits] = useState(0)
    const [productId, setProductId] = useState("")
    const [cart, setCart] = useState<any>([])
    const [client, setClient] = useState("")
    const [seller, setSeller] = useState("")
    const [totalPaid, setTotalPaid] = useState(0)
    const [showWarning, setShowWarning] = useState(false)
    const [showClientForm, setShowClientForm] = useState(false)
    const [showAlert, setShowAlert] = useState(false);

    const addUnits = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnits(parseInt(e.target.value))
    }

    const addProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductId(e.target.value)
    }

    const addClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClient(e.target.value)
    }

    const addSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeller(e.target.value)
    }

    const onAddProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const selectedProduct = products.find(product => product.id === productId)
        const isAlreadyInCart = cart.filter((product: productType) => product.id === productId)
        const productWithSoldUnits = { ...selectedProduct, soldUnits: units }

        if (isAlreadyInCart.length === 0 && productId && (units <= (productWithSoldUnits.stock ? productWithSoldUnits.stock : 0))) {
            setCart([...cart, productWithSoldUnits])
            setTotalPaid(totalPaid + (productWithSoldUnits.price ? productWithSoldUnits.price : 0) * units)
            setShowWarning(false)
        } else {
            setShowWarning(true)
        }
    }

    const onContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setShowClientForm(true)
    }

    const onGenerateBill = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (client && seller && cart.length > 0) {
            const billToSave = {
                dateOfSale: new Date(),
                customerName: client,
                sellerName: seller,
                soldProducts: cart,
                totalPaid: totalPaid
            }

            let billSaved = await saveBill(billToSave);

            dispatch(createBill(billSaved))
            setShowAlert(true)
            setShowClientForm(false)
            if (null !== formRef.current) {
                formRef.current.reset();
            }
        }
    }

    const closeValidation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setShowAlert(false)
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
                            <select className="w-100 mb-1" name="supplier" onChange={(e) => addProduct(e)} required >
                                <option value=''>Products...</option>
                                {products.map(product => {
                                    return <option value={product.id} key={product.id}>{`${product.name}: ${product.description}`}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <input className="w-100 mb-1" type="number" name="units" onChange={(e) => addUnits(e)} placeholder="Units" required />
                        </div>
                    </div>
                    {showWarning ? <span className="link" style={{ color: "#d93838" }}>
                        This product already exist in the cart or the amount exceeded the current stock ({products.find(product => product.id === productId)?.stock}).
                    </span> : <></>}
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
                        <button className="btn btn-primary" onClick={onContinue}>Continue</button>
                    </div>
                </div>

                {(showClientForm && cart.length > 0) ?
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="col-6">
                                <input className="w-100" type="text" name="client" onChange={(e) => addClient(e)} placeholder="Client Name" required />
                            </div>
                            <div className="col-6">
                                <input className="mx-1 w-100" type="text" name="seller" onChange={(e) => addSeller(e)} placeholder="Seller Name" required />
                            </div>
                        </div>
                        <div className="row my-4">
                            <button className="btn btn-primary" onClick={onGenerateBill}>Generate Bill</button>
                        </div>
                    </div> :
                    (showAlert ? <div className="d-flex validator">
                        <div className="d-flex justify-content-center mx-auto">
                            <span onClick={closeValidation}>Your bill was created successfully!</span> <br />
                        </div>
                    </div> : <></>)
                }
            </div>
        </form>
    )
}

export default ShoppingCartForm