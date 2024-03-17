import React from 'react'
import "../../style/products.css"
import ItemList from "./ItemList";
import {useSelector} from "react-redux";
const Products = () => {
    const {list: items} = useSelector((state) => state.products);
    const {isLoad} = useSelector((state) => state.products);

    return (
        <div className="products">
            <h2>Products</h2>
            {!isLoad && <ItemList items={items}/>}
            {isLoad && <div className="load"> Загрузка товаров... </div> }
        </div>
    )
}
export default Products
