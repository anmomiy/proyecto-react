//React
import * as React from 'react';
import {Link} from 'react-router-dom'
//Material UI
import {Card, CardContent, Button} from '@mui/material';
//CSS
import './Item.css'

const Item = ({itemName,image,price,id}) =>{
    return(
        <Card >
            <CardContent >
                <div className="card-content">
                <img src={`/${image}`} />
                <h3>{itemName}</h3>
                <p>S/ {price}</p>
                <Button>
                    <Link to={`/product/${id}`}>Detalles</Link>
                </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item;