import {
    Container,
    styled,
    Grid
  } from '@mui/material'
  
  import axios from 'axios'
  import { useState, useEffect } from 'react'
  import Footer from '../bottomfooter/Footer'
  
  import Header from "../partials/Header"
  import CustomersCard from '../cards/CustomersCar'
  
  const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: 0,
  }))
  
  const Teste = ({ children }) => {
    const [product, setProduct] = useState(null) // Alterado para null para representar um único produto
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/1')
        .then(response => {
          const data = response.data
          setProduct(data)
          setLoading(false)
        })
    }, [])
  
    const handleRemoveCustomer = id => {
      axios.delete(`https://fakestoreapi.com/products/1${id}`)
        .then(() => {
          setProduct(null)
        })
    }
  
    return (
      <div style={{ background: '#e0e0e0' }}>
        <Header />
        <StyledContainer>
          {children}
          <Grid container>
            {product && (
              <Grid item xs={12} md={4}>
                <CustomersCard
                  id={product.id}
                  userId={product.id}
                  date={product.date}
                  products={product.product}
                  image={product.image}
                  onRemoveCustomer={() => handleRemoveCustomer(product.id)}
                />
              </Grid>
            )}
          </Grid>
        </StyledContainer>
        {!loading && <Footer />}
      </div>
    )
  }
  
  export default Teste
  