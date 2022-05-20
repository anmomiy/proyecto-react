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
        <>
        <div className='countBox'>
            <Button onClick={removeCount} variant="contained">-</Button>
            <span>{count}</span>
            <Button onClick={addCount} variant="contained">+</Button>
        </div>
        <Button onClick={onAdd} variant="contained">Comprar</Button>
        </>
    )
}

export default ItemCount;