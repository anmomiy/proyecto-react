import {createContext, useState, useCallback, useRef} from 'react';


const CartContext = createContext()
export const RemoveCartContext = createContext()

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