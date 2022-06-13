import ProductManagement from '../components/products/ProductManagement'
import ProductsList from '../components/products/ProductsList'

type Props = {}

const Products: React.FC<Props> = (props) => {
    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Stock and Product Management</h3>
            </div>
            <div className="d-flex flex-row">
                <div className="col-5 mx-2">
                    <ProductManagement />
                </div>
                <div className="col-7 mx-2">
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}

export default Products