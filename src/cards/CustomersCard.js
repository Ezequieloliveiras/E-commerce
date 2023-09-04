import React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

const Cards = ({
    category,
    title,
    price,
    image,
}) => {

    return (

        <Card sx={{
            maxWidth: 345,
            height: '550px',
            marginTop:'60px',
            marginLeft:'19px',
            padding: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
            alignItems: 'center', 

        }}>

            <CardHeader
                title={title}
            />

            <CardMedia style={{
                width: '40%',
                display: 'block',
                margin: '0 auto',
            }}
                src={image}
                component="img"
                alt="Imagem do Produto"
            />

            <CardActions
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centraliza os elementos horizontalmente
                }}>
                <p style={{ fontSize: 30 }}>
                    {`$ ${price}`}
                </p>
                <Button style={{ marginTop: '10px', background:'#424242' }} variant="contained">BUY</Button>
            </CardActions>
        </Card>
    )
}

export default Cards