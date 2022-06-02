    import ItemList from '../components/ItemList/ItemList'
    import {useState, useEffect} from 'react'
    import productos from '../data/productsMock'
    import {useParams} from 'react-router-dom'
const Products = () =>{
        const [products,setProducts] = useState([])
        const {category} = useParams()
        const getProducts = () =>{
            
            return new Promise (resolve =>{
                    resolve(productos)
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