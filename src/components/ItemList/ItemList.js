
import {Grid} from '@mui/material'
import CardItem from '../Item/Item'
import './ItemList.css'
const ItemList = ({title, products}) =>{

    return(
        <div className="cardList-container">
            <h2>{title}</h2>
            <Grid container spacing={2}>
                {
                    products.map(({itemName,image,price,description,itemStock}) =>{
                        return(
                            <Grid item xs={12} sm={6} md={3}>
                                <CardItem itemName={itemName} image={image} price={price} description={description} itemStock={itemStock}/> 
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default ItemList;

