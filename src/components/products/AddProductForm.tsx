import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveProduct } from '../../services/productService';
import { addProduct, productType } from '../../state/slice/productSlice';
import { storeType } from '../../state/store';

type Props = {}

const AddProductForm: React.FC<Props> = (props) => {

    const suppliers = useSelector((state: storeType) => state.suppliers);

    const dispatch = useDispatch()

    const formRef = useRef<HTMLFormElement>(null)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [minimum, setMinimum] = useState<number>()
    const [maximum, setMaximum] = useState<number>()
    const [price, setPrice] = useState<number>()
    const [supplierId, setSupplierId] = useState("")

    const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const addDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const addMinimum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinimum(parseInt(e.target.value))
    }

    const addMaximum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaximum(parseInt(e.target.value))
    }

    const addPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseInt(e.target.value))
    }

    const addSupplier = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSupplierId(e.currentTarget.value)
    }

    const onAddProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        let supplierSelected = suppliers.find((supplier) => supplier.id === supplierId)

        if (name && description && minimum && maximum &&
            price && supplierId && supplierSelected && maximum > minimum) {
            const productToAdd: productType = {
                name: name,
                description: description,
                stock: 0,
                minimumAmount: minimum,
                maximumAmount: maximum,
                price: price,
                supplier: supplierSelected
            }
            let productSaved = await saveProduct(productToAdd);
            dispatch(addProduct(productSaved))
            setName('')
            setDescription('')
            setMinimum(0)
            setMaximum(0)
            setPrice(0)
            if (null !== formRef.current) {
                console.log("enter")
                formRef.current.reset();
            }
        }
    }

    return (
        <form className="form" ref={formRef}>
            <div className="container pt-4 pb-2">

                <div className="d-flex flex-row justify-content-center">
                    <h3>Add Product to Stock</h3>
                </div>
                <div className="row my-2">
                    <input type="text" name="product" value={name} onChange={addName} placeholder="Product name" required />
                </div>
                <div className="row my-2">
                    <input type="text" name="description" value={description} onChange={addDescription} placeholder="Description" required />
                </div>
                <div className="row my-2">
                    <input type="number" name="minimum" onChange={addMinimum} placeholder="Minimum amount" required />
                </div>
                <div className="row my-2">
                    <input type="number" name="macimum" onChange={addMaximum} placeholder="Maximum amount" required />
                </div>
                <div className="row my-2">
                    <input type="number" name="price" onChange={addPrice} placeholder="Unit price" required />
                </div>
                <div className="row my-2">
                    <select className="mb-1" name="supplier" onChange={(e) => addSupplier(e)} required >
                        <option value=''>Suppliers...</option>
                        {suppliers.map(supplier => {
                            return <option value={supplier.id} key={supplier.id}>{`${supplier.name} (${supplier.notes})`}</option>
                        }

                        )}
                    </select>
                    <span className="link">Can't find a supplier?
                        <Link to="/suppliers">
                            <span style={{ color: "#d93838" }}>  Subscribe one!</span>
                        </Link>
                    </span>

                </div>
                <div className="row my-4">
                    <Button className="btn btn-primary" onClick={onAddProduct}>Add</Button>
                </div>
            </div>
        </form>
    )
}

export default AddProductForm