import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
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
        <Card sx={{ maxWidth: 345, height: '100%' }} style={{ padding: '20px' }}>
            <CardMedia src={image}
                component="img"
                alt="Imagem do Produto"
                style={{ width: '40%', display: 'block', margin: '0 auto' }}
            />
            <CardHeader
                title={title}
                src={image}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" >
                    {showDescription ? description : `${description.substring(0, 100)}...`}
                    <IconButton onClick={toggleDescription} size='small'>
                        <ExpandMoreIcon />
                    </IconButton>
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{alignItems: 'end', justifyContent: 'center'}}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <div style={{ marginLeft: 'auto' }}>
                    <IconButton aria-label="share">
                        {`$ ${price}`}
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default Cards