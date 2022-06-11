import SuppliersTable from '../components/suppliers/SuppliersTable'
import SupplierSubscription from '../components/suppliers/SupplierSubscription'

type Props = {}

const Suppliers = (props: Props) => {

    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Suppliers</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <SupplierSubscription />
                </div>
                <div className="col-8">
                    <SuppliersTable />
                </div>
            </div>
        </div>
    )
}

export default Suppliers