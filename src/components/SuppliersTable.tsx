import React from 'react'
import { useSelector } from 'react-redux';
import { supplierType } from '../state/slice/supplierSlice';
import { storeType } from '../state/store';


const SuppliersTable: React.FunctionComponent = () => {

    const suppliers = useSelector((state: storeType) => state.suppliers);

    const onRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, supplier: supplierType) => {
        console.log(supplier.name)
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-center">
                <table className="table table-hover table-striped table-borderless">
                    <thead><tr>
                        <th>Id</th><th>Name</th><th>Document</th><th>Contact</th><th>Notes</th><th>Remove</th>
                    </tr></thead>
                    <tbody>
                        {suppliers.map(supplier => {
                            return <tr key={supplier.document}>
                                <td></td>
                                <td>{supplier.name}</td>
                                <td>{supplier.document}</td>
                                <td>{supplier.contact}</td>
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