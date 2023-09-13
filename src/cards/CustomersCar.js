import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from '../modal/ModalConfirm'

const Cards = ({
    id,
    onRemoveCustomer,
    title,
    price,
    description,
    image,
}) => {

    const [openModal, setOpenModal] = useState(false)
    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
        onRemoveCustomer(id)
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    return (
        <>
            <Card sx={{
                maxWidth: 500,
                height: '500px',
                marginLeft: '19px',
                marginTop: '90px',
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

                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                <img src={image} alt={`Product ${id}`} style={{maxWidth: '40%'}} />
                <p>Description: {description}</p>

           
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
