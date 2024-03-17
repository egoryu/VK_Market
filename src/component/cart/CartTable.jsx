import React from 'react'
import {useSelector} from "react-redux";
import {selectProductsAmountAndTotalPrice} from "../../store/product/productsSlice";
import "../../style/table.css"
export const CartTable = () => {
    const cartItems = useSelector(selectProductsAmountAndTotalPrice);
    return (
        <div className="cart-table">
            <div className="item-header">
                <div className="item-header-name">Название</div>
                <div className="item-header-quantity">Количество</div>
                <div className="item-header-total-price">Итоговая сумма</div>
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item-div">
                    <div className="item-name">{item.title}</div>
                    <div className="item-quantity">{item.amount}</div>
                    <div className="item-total-price">{item.total}$</div>
                </div>
            ))}
        </div>
    )
}
