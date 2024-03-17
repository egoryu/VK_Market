import React from 'react'
import Item from "./Item";

const ItemList = (props) => {
    return (
        <>
            {props.items.map((val) => (
                <Item key={val.id} item={val}/>
            ))}
        </>
    )
}
export default ItemList
