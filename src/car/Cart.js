import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import { useState, useEffect } from 'react'


import Header from "../partials/Header"
import CustomersCard from '../components/CustomersCar'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 15,
}))

const Padrão = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/carts')
      .then(response => {
        const data = response.data
        setProducts(data)
      })
  }, [])

  return (
    <div style={{ background: '#e0e0e0' }}>
      <Header />
      <StyledContainer style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        {children}
        <Grid container spacing={2}>
          {products.map(item => (
            <Grid item xs={12} md={4} key={item.id} style={{ marginBottom: '60px', paddingBottom:'70px' }}>
              <CustomersCard
                id={item.id}
                userId={item.userId}
                date={item.date}
                products={item.products}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </div>
  )
}

export default Padrão
