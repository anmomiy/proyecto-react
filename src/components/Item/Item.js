import * as React from 'react';
import {Card, CardContent} from '@mui/material';
import Button from '@mui/material/Button';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
const Item = ({itemName,image,price,description,itemStock}) =>{

    return(
        <Card >
            <CardContent >
                <div className="card-content">
                <img src={`./${image}`} />
                <h3>{itemName}</h3>
                <p>S/ {price}</p>
                <p>{description}</p>
                <ItemCount stock={itemStock}/>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item;