
import ItemListSwiper from '../ItemListSwiper/ItemListSwiper'
import {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import db from '../../data/ItemCollection'
const ItemListContainer = ()=>{
const [products,setProducts] = useState([])
const getProducts = async () =>{
    const productSnapshot = await getDocs(collection(db,"productos"))
    const productList = productSnapshot.docs.map((doc) =>{
        let product = doc.data()
        product.id = doc.id
        return product
    })
    const filteredProductList = productList.filter(e => e.price > 100)
    return filteredProductList
}
useEffect(()=>{
    getProducts()
    .then((res)=>{
        setProducts(res)
    })
}, [])
    return(
        <>
        <ItemListSwiper title={"Productos Recomendados"} products={products} />
        </>
    )
}

export default ItemListContainer;