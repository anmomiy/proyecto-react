
import ItemListSwiper from '../ItemListSwiper/ItemListSwiper'
import {useState, useEffect} from 'react'
import productos from '../../data/productsMock'
const ItemListContainer = ()=>{
const [products,setProducts] = useState([])
const getProducts = () =>{
    return new Promise (resolve =>{
        resolve(productos)
    })
}
useEffect(()=>{
    getProducts()
    .then((res)=>{
        setProducts(res)
    })
}, [])
    return(
        <>
        <ItemListSwiper title={"Productos"} products={products} />
        </>
    )
}

export default ItemListContainer;