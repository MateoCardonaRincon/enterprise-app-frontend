import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductManagement from '../components/products/ProductManagement'
import ProductsTable from '../components/products/ProductsTable'
import { getProducts } from '../services/productService'
import { getAllProducts } from '../state/slice/productSlice'

type Props = {}

const Products = (props: Props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts().then(
            products => {
                dispatch(getAllProducts(products))
            }
        )
    }, [])

    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Stock and Product Management</h3>
            </div>
            <div className="d-flex flex-row">
                <div className="col-4 mx-2">
                    <ProductManagement />
                </div>
                <div className="col-8 mx-2">
                    <ProductsTable />
                </div>
            </div>
        </div>
    )
}

export default Products