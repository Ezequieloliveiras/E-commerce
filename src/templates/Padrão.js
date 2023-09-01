
import Container from '@mui/material/Container';
import Header from "../partials/Header"
import { styled } from '@mui/material/styles'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Cards from '../componentes/Cards';
import Grid from '@mui/material/Grid';



const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: 15,
    
}))



const Padrão = ({ children }) => {

    const [products, setProducts] = useState([])

    console.log(products)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const data = response.data

                setProducts(data)
            })
    }, [])

    return (
        <div style={{background: 'grey' }}>
            <Header />
            <StyledContainer style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                {children}
                <Grid container>

                    {
                        products.map(item => (
                            <Grid item xs={12} md={4} style={{padding: '30px'}}>
                                <Cards
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                />
                            </Grid>
                        ))
                    }

                </Grid>

            </StyledContainer>
        </div>
    )
}



export default Padrão