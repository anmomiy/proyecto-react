    import ItemList from '../components/ItemList/ItemList'
    import { Button } from '@mui/material'
    import {useState, useEffect} from 'react'
    import {useParams} from 'react-router-dom'
    import {collection, getDocs} from 'firebase/firestore'
    import db from '../data/ItemCollection'

const Products = () =>{
        const [products,setProducts] = useState([])
        const {category} = useParams()
        const [productsByType, setProductsByType] = useState([])
        const [flag, setFlag] = useState(true)
        const getProducts = async () =>{
            const productSnapshot = await getDocs(collection(db,"productos"))
            const productList = productSnapshot.docs.map((doc) =>{
                let product = doc.data()
                product.id = doc.id
                return product
            })
            
            return productList
 
        }
        const filterByCategory = (array) => {
            setFlag(true)
            return array.map( (e) => {
                if(e.category === category) {
                    setProducts(items  => [...items, e])
                }
            })

        }
        
        useEffect(()=>{
            getProducts()
            .then((res)=>{
                setProducts([])
                filterByCategory(res)
            })
        }, [category])
        const filterByType = (type) =>{
            setFlag(false)
            const result = products.filter((prodType) =>{
                return prodType.type === type
            })
            setProductsByType(result)
        }
            return(
                <>
                <div className="botones-tipo">
                    <h3>Sub-Categorias:</h3>
                    <Button onClick={()=>{filterByType('alimento')}}>Alimentos</Button>
                    <Button onClick={()=>{filterByType('accesorios')}}>Accesorios</Button>
                    <Button onClick={()=>{filterByType('snack')}}>Snacks</Button>
                    <Button onClick={()=>{filterByType('otros')}}>Otros</Button>
                </div>
                {flag ?
                    <ItemList title={`Lista de Productos para ${category}`} products={products} />
                :
                    <ItemList title={`Lista de Productos para ${category}`} products={productsByType} />
                }
                </>
            )
        
}

export default Products;