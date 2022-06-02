import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../../data/productsMock'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () =>{
  const {id} = useParams()
  const [products,setProducts] = useState([])
  

    
  const getItem = () =>{
    return new Promise (resolve =>{
      resolve(productos)
    })
}

  useEffect(()=>{
    getItem()
    .then((res) =>{
      const findProductId = res.find((products) =>{
        return products.id == id
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