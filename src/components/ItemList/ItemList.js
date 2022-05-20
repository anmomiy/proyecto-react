
import {Grid} from '@mui/material'
import CardItem from '../Item/Item'
import './ItemList.css'
const ItemList = ({title}) =>{

    return(
        <div className="cardList-container">
            <h2>{title}</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                <CardItem itemName={"Alimento para Gatitos"} image={"alimento-gatitos-1kg.png"} price={19.90} description={"Bolsa de 1kg"} itemStock={10}/> 
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardItem itemName={"Alimento para Gatos"} image={"alimento-gatos-9kg.png"} price={76.90} description={"Bolsa de 9kg"} itemStock={8}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardItem itemName={"Alimento para Cachorros"} image={"alimento-cachorros-15kg.png"} price={99.90} description={"Bolsa de 15kg"} itemStock={9}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardItem itemName={"Alimento para Perros"} image={"alimento-perros-15kg.png"} price={99.90} description={"Bolsa de 15kg"} itemStock={7}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemList;

