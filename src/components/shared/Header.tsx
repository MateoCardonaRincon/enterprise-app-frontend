import { useSelector } from "react-redux";
import { storeType } from "../../state/store";

type Props = {}

const Header: React.FC<Props> = (props) => {

    const isLoggedIn = useSelector((state: storeType) => state.authentication.isLoggedIn);
    return (
        <header>
            <div>
                <h3>🪓Don Raul's Hardware Store🔧</h3>
            </div>
            <div>
                <span>Developed by MCR 💻</span>
            </div>
        </header>
    );
};

export default Header;
