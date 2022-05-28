import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
const ItemDetail = ({itemData}) =>{
    return(
    <div className ="item-detail-container">
        
                <img src={`../${itemData.image}`} />
                <div>
                <h3>{itemData.itemName}</h3>
                <h4>Precio:</h4><p> S/ {itemData.price}</p>
                <h4>Descripción del producto:</h4> <p>{itemData.description}</p>
                <ItemCount stock={itemData.itemStock}/>
                </div>
                
    </div>
    )
}

export default ItemDetail;