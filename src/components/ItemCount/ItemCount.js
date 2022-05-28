import Button from '@mui/material/Button';
import {useState} from 'react';
import './ItemCount.css'
const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(1);

    const addCount = () =>{
        count < stock && setCount(count + 1)
    }
    const removeCount = () =>{
        count > 0 && setCount(count - 1)
    }

    const onAdd = () =>{
        console.log(count)
    }
    return(
        <div className="toCartButton">
        <div className='countBox'>
            <Button onClick={removeCount}>-</Button>
            <span>{count}</span>
            <Button onClick={addCount} >+</Button>
        </div>
        <Button onClick={onAdd} variant="contained">Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;