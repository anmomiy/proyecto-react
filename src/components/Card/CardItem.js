import * as React from 'react';
import {Card, CardContent} from '@mui/material';
import Button from '@mui/material/Button';
import './CardItem.css'

const CardItem = ({itemName,image,price,description}) =>{
    return(
        <Card >
            <CardContent >
                <div className="card-content">
                <img src={`./${image}`} />
                <h3>{itemName}</h3>
                <p>S/ {price}</p>
                <p>{description}</p>
                <Button variant="outlined">Comprar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;