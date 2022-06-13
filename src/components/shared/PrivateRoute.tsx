import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { storeType } from '../../state/store';

type Props = {
    children: ReactElement;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {

    const { isLoggedIn } = useSelector((state: storeType) => state.authentication);

    if (isLoggedIn) {
        return children;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h1>😭404😪</h1>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <h3>🔨Page not found🔧</h3>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <h5>Sorry, you don't have permissions to access this page</h5>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <h5>Please, go to the Home page or log in again</h5>
                </div>
            </div>
        </div >
    )
}

export default PrivateRoute