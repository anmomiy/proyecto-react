import {createContext, useState, useCallback, useRef} from 'react';


const CartContext = createContext()
export const RemoveCartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const addItemToCart = (item) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === item.id)
    
        if(!isInCart) {
            setTotalPrice(totalPrice + item.price * item.quantity)
            setCartListItems(cartListItems => [...cartListItems, item])
            
            
        }
        
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
        cleanCartItems
    }
    return(

        <RemoveCartContext.Provider value={useCallback(id =>{
            const newArray = itemsRef.current.filter(item => item.id !== id);
            setCartListItems(newArray)
            setTotalPrice(newArray.map((e) => e.quantity * e.price ).reduce((acc,cur)=>{
                return acc + cur;
            }, 0))
        },[])}>
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        </RemoveCartContext.Provider>
    )
}

export default CartContext
export {CartProvider}