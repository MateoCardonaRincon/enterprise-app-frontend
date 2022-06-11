import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { storeType } from "../../state/store";

type Props = {
  children: ReactElement;
};

const PrivateComponent: React.FC<Props> = ({ children }) => {
  const logged = useSelector((state: storeType) => state.logged);

  if (logged) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;
