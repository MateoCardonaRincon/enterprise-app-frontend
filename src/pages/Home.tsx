import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setLogIn, setLogOut } from "../state/slice/loginSlice";
import { storeType } from "../state/store";

type Props = {}

const Home: React.FC<Props> = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h1>🔨Welcome to Don Raul's Hardware Store🔧</h1>
                </div>
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h3>Developed by Mateo Cardona Rincón</h3>
                </div>
            </div>
        </div>
    )
}

export default Home

