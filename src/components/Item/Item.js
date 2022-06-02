import * as React from 'react';
import {Card, CardContent, Button} from '@mui/material';
import './Item.css'
import {Link} from 'react-router-dom'
const Item = ({itemName,image,price,description,id}) =>{

    return(
        <Card >
            <CardContent >
                <div className="card-content">
                <img src={`/${image}`} />
                <h3>{itemName}</h3>
                <p>S/ {price}</p>
                <p>{description}</p>
                <Button>
                    <Link to={`/product/${id}`}>Detalles</Link>
                </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item;