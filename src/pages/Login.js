import axios from 'axios'
import { useState, useEffect } from 'react'

import {
    Container,
    styled,
    Grid
} from '@mui/material'

import Header from '../Partials/HeaderGeneral'
import Perfil from '../profile/Profile'
import Footer from '../bottomfooter/Footer'
import Title from '../templates/LoginText'

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: 0,
}))

const Login = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users/1')
            .then(response => {
                const data = response.data;
                setUsers([data]); // Colocar o objeto de usuário em um array
                setLoading(false);
            })
    }, [])

    return (
        <div style={{ background: '#e0e0e0' }}>
            <Header />
            <StyledContainer>
                {!loading && <Title />}
                {children}
                <Grid container>
                    {users.map(item => (
                        <Grid item xs={12} md={4} key={item.id} >
                            <Perfil
                                username={item.username}
                                email={item.email}
                                password={item.password}
                                firstname={item.name.firstname}
                                lastname={item.name.lastname}
                                city={item.address.city}
                                street={item.address.street}
                                number={item.address.number}
                                zipcode={item.address.zipcode}
                                lat={item.address.geolocation.lat}
                                long={item.address.geolocation.long}
                                phone={item.phone}
                            />
                        </Grid>
                    ))}
                </Grid>
            </StyledContainer>
            {!loading && <Footer />}
        </div>
    )
}

export default Login
