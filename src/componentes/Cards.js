import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Cards = ({
    title,
    price,
    description,
    category,
    image,
}) => {

    const [showDescription, setShowDescription] = useState(false)
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }


    return (
        <Card sx={{
            maxWidth: 345,
            height: '100%',
            padding: '20px',
            position: 'relative'
        }}>
            <CardHeader
                title={title}
                src={image}
            />
            <CardMedia style={{
                width: '40%',
                display: 'block',
                margin: '0 auto'
            }}
                src={image}
                component="img"
                alt="Imagem do Produto"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{marginBottom: '50px'}}>
                    {
                        showDescription ?
                            description :
                            `${description.substring(0, 100)}...`
                    }
                    <IconButton onClick={toggleDescription} size='small'>
                        <ExpandMoreIcon />
                    </IconButton>
                </Typography>
            </CardContent>

            <CardActions
                style={{
                    position: 'absolute',
                    width: '85%',
                    margin: '15px 0',
                    bottom: 0,
                    justifyContent: 'space-between',
                }}>
                <Button variant="contained">BUY</Button>

                <p style={{ fontSize: 30 }}>
                    {`$ ${price}`}
                </p>
            </CardActions>
        </Card>
    )
}

export default Cards