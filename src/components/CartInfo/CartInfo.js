import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import { RemoveCartContext } from '../../context/CartContext';
import {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import './CartInfo.css'
const CartInfo = () =>{
    const {cartListItems} = useContext(CartContext)
    const removeItem = useContext(RemoveCartContext)
    return(
        <div className="cart-info">
            <h1>Carrito de Compras</h1>
            <div className="cart-titles">
                <h2>Imagen</h2>
                <h2>Producto</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Total</h2>
                <h2>Eliminar</h2>
            </div>
        {cartListItems.length === 0 ? (
            
            <div className="emptyCart">
                
                <p>No hay productos agregados</p>
                <Link to="/" >Ir a comprar</Link>
            </div>
        )
        :
        (   <div className="cart-item-info">
                
                {cartListItems.map((item)=>{
                    const total = (quant,price) =>{ 
                        return quant * price
                    }
                    return(
                    <>
                    <div key={`cartInfo-${item.id}`} className="cart-item-detail">    
                        <h3><img src={`/${item.image}`}/></h3>
                        <h3>{item.itemName}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.quantity}</h3>
                        <h3>S/{total(item.quantity,item.price).toFixed(2)}</h3>
                        <h3><DeleteIcon onClick={() => removeItem(item.id)}/></h3>
                    </div>
                    
                    </>
                    )
                })}
                    <p>Monto a Pagar: S/{
                        cartListItems
                        .map((e) => e.quantity * e.price )
                        .reduce((acc,cur)=>{
                            return acc + cur;
                        }, 0).toFixed(2)}</p>       
                <Button className="toPay" variant="contained"><Link  to="/cart">Ir a pagar</Link></Button>
            </div>
        )}
        </div>
    )
}
export default CartInfo;