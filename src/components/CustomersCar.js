import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

const Cards = ({
    id,
    userId,
    date,
    products,
}) => {
    return (
        <Card sx={{
            display: 'block',
            padding: '20px',
            width: '280px',
            height: '260px',
            position: 'relative'
        }}>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '25px'
            }}>Product List</h1>

            <p>User: {userId}</p>
            <p>Date: {date}</p>
            <ul>
                {products.map((product) => (
                    <p key={product.productId}>
                        Product: {product.productId}, Quantity: {product.quantity}
                    </p>

                ))}
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button variant="outlined" startIcon={<DeleteIcon />} style={{
                    margin: '20px',
                    position: 'absolute',
                    bottom: '10px',
                    color: 'red',
                    border: '1px solid'
                }}>
                    Delete
                </Button>
            </div>
        </Card>
    )
}

export default Cards

