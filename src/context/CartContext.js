import {createContext, useState, useCallback, useRef} from 'react';


const CartContext = createContext()
export const RemoveCartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartListItems, setCartListItems] = useState([])
    const addItemToCart = (item) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === item.id)
    
        !isInCart && setCartListItems(cartListItems => [...cartListItems, item])
    }
    const itemsRef = useRef(cartListItems);
    itemsRef.current = cartListItems;
    const data = {
        cartListItems,
        addItemToCart
    }
    return(

        <RemoveCartContext.Provider value={useCallback(id =>{
            const newArray = itemsRef.current.filter(item => item.id != id);
            setCartListItems(newArray)
        },[])}>
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        </RemoveCartContext.Provider>
    )
}

export default CartContext
export {CartProvider}