import React from 'react'
import "../../style/item.css"
import {useDispatch, useSelector} from "react-redux";
import {decrementById, incrementById, removeById} from "../../store/product/productsSlice";

const Item= ({item}) => {
    const count = useSelector((state) => state.products.counts[item.id]);
    const dispatch = useDispatch();

    return (
        <div className="item">
            <img className="image" src={item.image} alt={item.title}/>
            <div className="details">
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>
                <span className="price">{item.price?.toFixed(2)}$</span>
            </div>
            <div className="setting">
                <button className="decr-button" onClick={() => dispatch(decrementById(item.id))}>-</button>
                <span className="amount">{count}</span>
                <button className="incr-button" onClick={() => dispatch(incrementById(item.id))}>+</button>
                <button className="delete-button" onClick={() => dispatch(removeById(item.id))}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}
export default Item;
