import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { storeType } from "../../state/store";

type Props = {
    children: ReactElement;
};

const PrivateComponent: React.FC<Props> = ({ children }) => {

    const logged = useSelector((state: storeType) => state.authentication.isLoggedIn);

    if (logged) {
        return children;
    }

    return <></>;
};

export default PrivateComponent;
