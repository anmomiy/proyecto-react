    import ItemList from '../components/ItemList/ItemList'
    import {useState, useEffect} from 'react'
    import {useParams} from 'react-router-dom'
    import {collection, getDocs} from 'firebase/firestore'
    import db from '../data/ItemCollection'
const Products = () =>{
        const [products,setProducts] = useState([])
        const {category} = useParams()
        
        const getProducts = async () =>{
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
        const filterByCategory = (array) => {
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

            return(
                <>
                <ItemList title={`Lista de Productos para ${category}`} products={products} />
                </>
            )
        
}

export default Products;