
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import {alimentos} from '../../data/productsMock'
const ItemListContainer = ()=>{
const [products,setProducts] = useState([])
const getProducts = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(alimentos)
        },2000)
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
        <ItemList title={"Alimento para Mascotas"} products={products} />
        </>
    )
}

export default ItemListContainer;