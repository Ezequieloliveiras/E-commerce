import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const Perfil = ({
    username,
    email,
    password,
    firstname,
    lastname,
    city,
    street,
    number,
    zipcode,
    geolocation,
    lat,
    long,
    phone,
}) => {

    return (

        <div>
              <Card sx={{
            maxWidth: 345,
            height: '500px',
            marginTop: '60px',
            marginLeft: '19px',
            padding: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <>
               <p>UserName: {username}</p> 
               <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Firstname: {firstname}</p>
                <p>Lastname: {lastname}</p>
                <p>City: {city}</p>
                <p>Street: {street}</p>
                <p>Number: {number}</p>
                <p>Zipcode: {zipcode}</p>
                <p>Geolocation: {geolocation}</p>
                <p>Lat: {lat}</p>
                <p>Long: {long}</p>
                <p>Phone: {phone}</p>
            </>

            <CardMedia style={{
                width: '40%',
                display: 'block',
                margin: '0 auto',
            }} />
        </Card>
        </div>
      
    )
}

export default Perfil
