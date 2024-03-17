import React from 'react'
import "../../style/cart.css"
import {useSelector} from "react-redux";
import {selectTotalPrice} from "../../store/product/productsSlice";
import {CartTable} from "./CartTable";
const Cart = () => {
    const sumPrice = useSelector(selectTotalPrice);

    return (
        <div className="cart">
            <h2>Cart</h2>
            <p>Итого: {sumPrice}$</p>
            <CartTable />
        </div>
    )
}
export default Cart
