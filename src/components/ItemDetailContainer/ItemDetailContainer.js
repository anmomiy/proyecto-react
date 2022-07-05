//React
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
//Components
import ItemDetail from '../ItemDetail/ItemDetail'
//Firebase
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
    return productList
    
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