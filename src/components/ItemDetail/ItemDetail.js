import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import './ItemDetail.css'
const ItemDetail = ({itemData}) =>{
    const [quantity, setQuantity] = useState(0)
    const [showButton,setShowButton] = useState(false)
    const addProductToCart = () =>{
        console.log(itemData)
        console.log(quantity)
        setShowButton(true)
    }
    return(
    <div className ="item-detail-container">
        
                <img src={`../${itemData.image}`} />
                <div className="itemDetail">
                <h3>{itemData.itemName}</h3>
                <h4>Precio:</h4><p> S/ {itemData.price}</p>
                <h4>Descripción del producto:</h4> <p>{itemData.description}</p> 
                {!showButton ?
                    <div>
                    <ItemCount stock={itemData.itemStock} refreshQuantity={setQuantity} quantity={quantity}/>
                    <Button className="toCartButton" onClick={addProductToCart} variant="contained">Agregar al Carrito</Button>
                    </div>
                :
                    <div>
                    <Button className="toCartButton" variant="contained"><Link to="/cart">Terminar mi Compra</Link></Button>
                    </div>
                }
                </div>
                
    </div>
    )
}

export default ItemDetail;