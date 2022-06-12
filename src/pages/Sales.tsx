import ShoppingCartForm from '../components/sales/ShoppingCartForm'

type Props = {}

const Sales: React.FunctionComponent = (props: Props) => {

    return (
        <div className="d-flex-column flex-container m-5">
            <div className="d-flex flex-row justify-content-center my-4">
                <h3>Sales</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <ShoppingCartForm />
            </div>
        </div>
    )
}

export default Sales