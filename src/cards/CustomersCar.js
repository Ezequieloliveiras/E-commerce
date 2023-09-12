import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from '../modal/ModalConfirm'

const Cards = ({
    id,
    userId,
    date,
    products,
    onRemoveCustomer
}) => {

    
    const [openModal, setOpenModal] = useState(false)
    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = userId => {
        onRemoveCustomer(userId)
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }


    return (
        <>
            <Card sx={{
                maxWidth: 345,
                height: '280px',
                marginLeft: '19px',
                padding: '20px',
                position: 'relative',
                display: 'block',
                alignItems: 'center', // Centraliza horizontalmente
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
                    <Button variant="outlined" onClick={handleRemoveCustomer} startIcon={<DeleteIcon />} style={{
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
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={handleConfirmModal}
                title='Deseja realmente excluir esse cadastro?'
                message='Ao confirmar nao será possível reverter essa operação'
            />
        </>
    )
}

export default Cards

