import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from '../modal/ModalConfirm'
import CarText from '../templates/CarText'


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
            <CarText>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '25px'
                }}>Product List</h1>

                <Card sx={{
                    maxWidth: 500,
                    height: '520px',
                    marginLeft: '19px',
                    marginTop: '90px',
                    padding: '20px',
                    position: 'relative',
                    display: 'block',
                    alignItems: 'center',
                    position: 'relative',
                }}>

                    <p><h3>{title}</h3></p>
                    <img src={image} alt={`Product ${id}`} style={{ maxWidth: '40%' }} />
                    <p><h4>Price:</h4> {price}</p>
                    <p><h4>Description:</h4> {description}</p>


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
            </CarText>
        </>
    )
}

export default Cards
