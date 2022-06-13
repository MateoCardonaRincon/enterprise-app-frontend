import ShoppingCartForm from '../components/sales/ShoppingCartForm'
import PrivateRoute from '../components/shared/PrivateRoute'

type Props = {}

const Sales: React.FC<Props> = (props) => {

    return (
        <PrivateRoute>
            <div className="d-flex-column flex-container m-5">
                <div className="d-flex flex-row justify-content-center my-4">
                    <h3>Sales</h3>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <ShoppingCartForm />
                </div>
            </div>
        </PrivateRoute>
    )
}

export default Sales