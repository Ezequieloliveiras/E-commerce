import React, { useState } from 'react'

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

        <CarText >
            <p style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
                fontSize:'2.125rem'
            }}>Product List</p>

            <div style={{
                padding: '40px',
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '1200px',
                    height: '800px',
                    padding: '40px',
                    display: 'flex',
                    position: 'relative',
                    boxShadow: '0px 0px 1px black',
                    borderRadius: '5px',
                    background: 'white',
                }}>
                    <div style={{
                        width: '900px',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginBottom: '80px' }}>
                            <img
                                src={image} alt={`Product ${id}`}
                                style={{ width: '260px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            width: '500px',
                            height: '200px',
                            padding: '25px'
                        }}>
                            <p><h2>{title}</h2></p>
                            <p>segundo quadrado</p>
                            <p><h4>Price:</h4> {price}</p>
                        </div>
                        <div>
                            <div style={{
                                width: '280px',
                                height: '100%',
                                borderRadius: '5px',
                                boxShadow: '0px 0px 1px black',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1>text</h1>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button variant="outlined" onClick={handleRemoveCustomer} startIcon={<DeleteIcon />} style={{
                                        margin: '20px',
                                        bottom: '10px',
                                        color: 'red',
                                        border: '1px solid'
                                    }}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        bottom: '0',
                        marginBottom: '80px',
                        position: 'absolute',
                        width: '700px'
                    }}>
                        <p><h4>Description:</h4> {description}</p>
                    </div>
                </div>
            </div>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={handleConfirmModal}
                title='Do you really want to delete this product from your shopping list?'
                message='Once confirmed, it will not be possible to reverse this operation.'
            />
        </CarText>
    )
}

export default Cards
