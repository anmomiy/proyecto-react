//React
import * as React from 'react';
import {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
//Material UI
import Button from '@mui/material/Button';
//Components
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
//CSS
import './ItemDetail.css'

const ItemDetail = ({itemData}) =>{
    const [quantity, setQuantity] = useState(1)
    const [showButton,setShowButton] = useState(false)
    const { addItemToCart, getTotalPrice } = useContext(CartContext)
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1)
    }
    const addProductToCart = () =>{
        itemData.quantity = quantity
        addItemToCart(itemData)
        setShowButton(true)

    }
    return(
    <div className ="item-detail-container">
        
                <img src={`../${itemData.image}`} />
                <div className="itemDetail">
                <h3>{itemData.itemName}</h3>
                <h4>Precio:</h4><p> S/ {itemData.price}</p>
                <h4>Descripción del producto:</h4> <p>{itemData.description}</p> 
                <h4>Cantidad Disponible:</h4><p>{itemData.itemStock}</p> 
                {!showButton ?
                    <div>
                    <ItemCount stock={itemData.itemStock} refreshQuantity={setQuantity} quantity={quantity}/>
                    <Button className="toCartButton" onClick={addProductToCart} variant="contained">Agregar al Carrito</Button>
                    </div>
                :
                    <div>
                    <Button className="toCartButton" variant="contained" onClick={getTotalPrice}><Link to="/cart">Terminar mi Compra</Link></Button>
                    <Button className="toCartButton" variant="contained" onClick={goBack}>Volver</Button>
                    </div>
                }
                </div>
                
    </div>
    )
}

export default ItemDetail;