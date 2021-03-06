//Material UI
import Button from '@mui/material/Button';
//React
import {useState} from 'react';
//CSS
import './ItemCount.css'
const ItemCount = ({stock, refreshQuantity, quantity}) =>{

    const addCount = () =>{
        quantity < stock && refreshQuantity(quantity + 1)
    }
    const removeCount = () =>{
        quantity > 1 && refreshQuantity(quantity - 1)
    }

    return(
        <div className='countBox'>
            <Button onClick={removeCount}>-</Button>
            <span>{quantity}</span>
            <Button onClick={addCount} >+</Button>
        </div>
    )
}

export default ItemCount;