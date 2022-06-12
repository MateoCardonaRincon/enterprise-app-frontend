import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadOrderForm } from '../../state/slice/orderSlice';
import { productType } from '../../state/slice/productSlice';
import { storeType } from '../../state/store';

type Props = {}

const ProductsList: React.FunctionComponent = (props: Props) => {

    const products = useSelector((state: storeType) => state.products);

    const dispatch = useDispatch()

    const onOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: productType) => {
        dispatch(loadOrderForm(product))
    }

    return (
        <div className="container px-5">
            <div className="row">
                {products.map(product => {
                    return <div className={"d-flex flex-row my-2 card " + (product.stock <= product.minimumAmount ? "stock-alert" : "")}
                        key={product.id}>
                        <div className="col-10">
                            <div className="container">
                                <div className="row">
                                    <div className="d-flex flex-row mt-1">
                                        <div className="col"><b>{product.name}</b></div>
                                        <div className="col">{product.description}</div>
                                        <div className="col"><b>Price: </b>{product.price}</div>
                                    </div>
                                    <div className="d-flex flex-row mt-1">
                                        <div className="col"><b>stock: </b>{product.stock}</div>
                                        <div className="col"><b>min: </b>{product.minimumAmount}</div>
                                        <div className="col"><b>max: </b>{product.maximumAmount}</div>
                                    </div>
                                    <div className="d-flex flex-row mt-1">
                                        <div className="col"><b>supplier: </b>{product.supplier.name}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-danger" disabled={product.stock >= product.maximumAmount}
                                onClick={(e) => onOrder(e, product)}>📦</button>
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default ProductsList