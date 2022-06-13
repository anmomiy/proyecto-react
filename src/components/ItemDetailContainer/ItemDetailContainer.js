import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import db from '../../data/ItemCollection'
const ItemDetailContainer = () =>{
  const {id} = useParams()
  const [products,setProducts] = useState([])
  

    
  const getItem = async () =>{
    const productSnapshot = await getDocs(collection(db,"productos"))
    const productList = productSnapshot.docs.map((doc) =>{
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return new Promise (resolve =>{
            resolve(productList)
    })
}
  useEffect(()=>{
    getItem()
    .then((res) =>{
      const findProductId = res.find((products) =>{
        return products.id === id
      })
      setProducts(findProductId)
  })
          
  }, [])
  
  
    return (
      <div>
            <ItemDetail itemData={products} />
      </div>
    );
}

export default ItemDetailContainer;