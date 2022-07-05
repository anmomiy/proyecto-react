import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {addDoc, collection} from 'firebase/firestore'
import db from '../../data/ItemCollection'
import './CartInfo.css'
const CartInfo = () =>{
    const {cartListItems, totalPrice, cleanCartItems, deleteItem} = useContext(CartContext)
    const navigate = useNavigate();
    const [finish, setFinish] = useState(false);
    const [orderId, setOrderId] = useState('')
    const [open, setOpen] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: [],
        date: '',
        total: ''
    })
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (formValue.email === formValue.email2){
            setOrder({...order, buyer: formValue, items: cartListItems.map((item)=>{
                return{
                    id: item.id,
                    title: item.itemName,
                    price: item.price,
                    quantity: item.quantity
                }
            }), date: new Date().toLocaleDateString('es-MX'), total: totalPrice})
            saveData({...order, buyer: formValue, items: cartListItems.map((item)=>{
                return{
                    id: item.id,
                    title: item.itemName,
                    price: item.price,
                    quantity: item.quantity
                }
            }), date: new Date().toLocaleDateString('es-MX'), total: totalPrice})
            setFinish(true)
        }
        else{
            alert("Ambos correos deben ser iguales.")
        }
        
    }
    const confirmPurchase = () =>{
        cleanCartItems()
        navigate('/')
    }
    const handleChange = (e) =>{
        setFormValue({...formValue, [e.target.name]: e.target.value})
        
    }
    const saveData = async (newOrder) =>{
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setOrderId(orderDoc.id)
    }
    
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
                    <div key={`cartInfo-${item.itemName}`} className="cart-item-detail">    
                        <h3><img alt={`${item.image}`} src={`/${item.image}`}/></h3>
                        <h3>{item.itemName}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.quantity}</h3>
                        <h3>S/{total(item.quantity,item.price).toFixed(2)}</h3>
                        <h3><DeleteIcon onClick={() => {deleteItem(item)} }/></h3>
                    </div>
                    
                    </>
                    )
                })}
                    <p>Monto a Pagar: S/{totalPrice.toFixed(2)}</p>       
                <Button className="toPay" variant="contained" onClick={handleOpen}>Completar compra</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="cajaModal">
                        {!finish ?
                        (<div> 
                        <h3>Ingresa tus datos para completar tu compra</h3>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre y Apellido"
                                name="name"
                                value={formValue.name}
                                onChange={handleChange}
                                
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Confirmar Email"
                                name="email2"
                                value={formValue.email2}
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Teléfono"
                                name="phone"
                                value={formValue.phone}
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="contained" >Completar compra</Button>
                        </form>
                        </div>)
                        :
                        (<div className="finishModal">
                            <h3>Gracias por su compra</h3>
                            <p>El código de su orden es: </p>
                            <span>{orderId}</span>
                            <p>Por favor, asegúrese de guardar su código</p>
                            <Button variant="contained" onClick={confirmPurchase}>Volver al inicio</Button>
                        </div>)
                    }
                        
                    </div>
                </Modal>
            </div>
        )}
        </div>
    )
}
export default CartInfo;