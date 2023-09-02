import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'



const Cards = ({
    title,
    price,
    description,
    category,
    image,
}) => {


    return (

        <Card sx={{
            maxWidth: 345,
            height: '100%',
            padding: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Alinha os elementos verticalmente ao redor
            alignItems: 'center', // Centraliza horizontalmente
           
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
                <p style={{ fontSize: 30, marginTop:'15px'}}>
                    {`$ ${price}`}
                </p>
                <Button style={{marginTop:'10px'}} variant="contained">BUY</Button>
            </CardActions>
        </Card>

    )
}

export default Cards