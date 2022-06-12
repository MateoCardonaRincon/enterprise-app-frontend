import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSupplier } from '../../services/supplierService';
import { deleteSupplier, supplierType } from '../../state/slice/supplierSlice';
import { storeType } from '../../state/store';


const SuppliersTable: React.FunctionComponent = () => {

    const suppliers = useSelector((state: storeType) => state.suppliers);

    const products = useSelector((state: storeType) => state.products);

    const dispatch = useDispatch()

    const onRemove = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, supplier: supplierType) => {

        const haveAssociatedProducts = products.filter(product => product.supplier.id === supplier.id)

        if (haveAssociatedProducts.length === 0) {
            const status = await removeSupplier(supplier)
            if (status === 204) {
                dispatch(deleteSupplier(supplier))
            }
        }
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-center">
                <table className="table table-hover table-striped table-borderless">
                    <thead><tr><th>Name</th><th>Document</th><th>Contact</th><th>Notes</th><th>Remove</th>
                    </tr></thead>
                    <tbody>
                        {suppliers.map(supplier => {
                            return <tr key={supplier.id}>
                                <td>{supplier.name}</td>
                                <td>{supplier.personalId}</td>
                                <td>{supplier.phoneNumber}</td>
                                <td>{supplier.notes}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={(e) => onRemove(e, supplier)}>✂</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SuppliersTable