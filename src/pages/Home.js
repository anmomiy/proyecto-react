import InfoContainer from '../components/InfoContainer/InfoContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


const Home = () =>{
    return(
        <>
        <img className="banner" src="./banner.jpg" alt="banner" />
        <ItemListContainer />
        <InfoContainer title="Lo mejor para tus mascotas" content="Huellitas es una tienda virtual de productos para mascotas. Tenemos alimentos, accesorios, snacks y mucho más." image="./puppy.jpg" />
        </>
    )
}

export default Home;