
import {Grid} from '@mui/material'
import CardItem from '../Item/Item'
import './ItemList.css'
const ItemList = ({title, products}) =>{

    return(
        <div className="cardList-container">
            <h2>{title}</h2>
            <Grid container spacing={2}>
                
                {
                    products.map(e =>{
                        return(
                            <Grid item xs={12} sm={6} md={3} key={e.id}>
                                <CardItem itemName={e.itemName} image={e.image} price={e.price} description={e.description}  id={e.id}/> 
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default ItemList;

