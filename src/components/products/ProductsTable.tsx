import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productType } from '../../state/slice/productSlice';
import { storeType } from '../../state/store';

type Props = {}

const ProductsTable: React.FunctionComponent = (props: Props) => {

    const products = useSelector((state: storeType) => state.products);

    const dispatch = useDispatch()

    const onOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: productType) => {
        console.log(product.description)
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-center">
                <table className="table table-hover table-striped table-borderless">
                    <thead><tr><th>Product</th><th>Description</th><th>Stock</th>
                        <th>Minimum</th><th>Maximum</th>
                        <th>Price</th><th>Supplier</th><th>Order</th>
                    </tr></thead>
                    <tbody>
                        {products.map(product => {
                            return <tr className={product.stock <= product.minimumAmount ? "stock-alert" : ""} key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>{product.minimumAmount}</td>
                                <td>{product.maximumAmount}</td>
                                <td>{product.price}</td>
                                <td>{product.supplier.name}</td>
                                <td>
                                    <button className="btn btn-danger" disabled={product.stock >= product.maximumAmount}
                                        onClick={(e) => onOrder(e, product)}>🛒</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsTable