import React, {useEffect} from 'react'
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Products from "./component/product/Products";
import Cart from "./component/cart/Cart";
import {useDispatch} from "react-redux";
import {getProducts} from "./store/product/productsSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <div className="container">
                <Products />
                <Cart />
            </div>
            <Footer />
        </div>
    )
}
export default App
