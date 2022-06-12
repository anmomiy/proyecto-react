import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import CartContext from '../../context/CartContext'
import { RemoveCartContext } from '../../context/CartContext';
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import './CartWidget.css'
const CartWidget = () =>{
    const {cartListItems} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const removeItem = useContext(RemoveCartContext)
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <div>
            <div>
            <div 
            className="cartCount"
            onClick={handleClick}
            >
                <ShoppingCartIcon 
                className="cartIcon"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                fontSize="large"
                
                />
            <p>{cartListItems.length}</p>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className="cart-box">
                    {cartListItems.length === 0 ? (
                        
                        <div className="emptyCart">
                            <h2>Carrito de Compras</h2>
                            <p>No hay productos agregados</p>
                            <Link to="/" >Ir a comprar</Link>
                        </div>
                    )
                    :
                    (   <div className="cart-content">
                            <h2>Carrito de Compras</h2>
                            {cartListItems.map((item)=>{
                                const total = (quant,price) =>{
                                    return quant * price
                                }
                                return(
                                <div key={`cart-${item.id}`} className="cartItem">    
                                    <img src={`/${item.image}`}/>
                                    <div>
                                        <h3>{item.itemName}</h3>
                                        <h4>Cantidad: {item.quantity} und.</h4>
                                        <h4>Total: S/{total(item.quantity,item.price).toFixed(2)}</h4>
                                    </div>
                                    <DeleteIcon onClick={() => removeItem(item.id)}/>
                                </div>
                                )
                            })}
                            <Link to="/cart">Ver Carrito</Link>
                        </div>
                    )}
                    

                </div>
            </Menu>
            </div>
        </div>
    )
}

export default CartWidget;