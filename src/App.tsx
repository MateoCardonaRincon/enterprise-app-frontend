import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header";
import NavigationBar from "./components/shared/NavigationBar";
import Bills from "./pages/Bills";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Suppliers from "./pages/Suppliers";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from "./services/supplierService";
import { getAllSuppliers } from "./state/slice/supplierSlice";
import { getProducts } from "./services/productService";
import { getAllProducts } from "./state/slice/productSlice";
import { storeType } from "./state/store";
import { setLogIn, setLogOut } from "./state/slice/loginSlice";

function App() {

    const { isLoggedIn } = useSelector((state: storeType) => state.authentication);

    const dispatch = useDispatch();

    useEffect(() => {
        getSuppliers().then(
            suppliers => {
                dispatch(getAllSuppliers(suppliers))
            }
        )
        getProducts().then(
            products => {
                dispatch(getAllProducts(products))
            }
        )
        if (localStorage.getItem("user")) {
            dispatch(setLogIn())
        } else {
            dispatch(setLogOut())
        }
    }, [])

    return (
        <BrowserRouter>
            <Header />
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stock" element={<Products />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="*" element={<Navigate to="" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
