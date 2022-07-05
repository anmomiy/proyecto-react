//React
import {createContext, useState, useRef} from 'react';
//Sweet Alert 2
import Swal from 'sweetalert2'
//Context
const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('productos')) || [] )
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('totalPrice')) || 0)
    const addItemToCart = (item) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === item.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + item.price * item.quantity)
            localStorage.setItem('productos', JSON.stringify([...cartListItems, item]))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice + item.price * item.quantity))
            return setCartListItems(cartListItems => [...cartListItems, item])
            
            
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Este producto ya se encuentra en tu carrito',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    const deleteItem = (item) =>{
        const newArray = cartListItems.filter( (e) => e.id !== item.id )
        setCartListItems(newArray)
        localStorage.setItem('productos', JSON.stringify(newArray))
        const newTotalPrice = newArray.map((e) => e.quantity * e.price ).reduce((acc,cur)=>{
            return acc + cur;
        }, 0)
        setTotalPrice(newTotalPrice)
        localStorage.setItem('totalPrice', JSON.stringify(newTotalPrice))
    } 
    const cleanCartItems = () =>{
        setCartListItems([])
        setTotalPrice(0)
    }
    const itemsRef = useRef(cartListItems);
    itemsRef.current = cartListItems;
    const data = {
        cartListItems,
        addItemToCart,
        totalPrice,
        cleanCartItems,
        deleteItem
    }
    return(

        
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}