import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, styled, Grid } from '@mui/material';
import Header from '../partials/Header';
import CustomersCard from '../cards/CustomersCar';
import Footer from '../bottomfooter/Footer';


const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 0,
  minHeight: 'calc(100vh - 64px)',
  position: 'relative',
}));

const Cart = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/1')
      .then(response => {
        const data = response.data;
        setProduct(data);
        setLoading(false);
      })
  }, [])

  const handleRemoveCustomer = id => {
    axios.delete(`https://fakestoreapi.com/products/1${id}`)
      .then(() => {
        setProduct(null)
      })
  }

  return (
    <div style={{ background: '#e0e0e0', position: 'relative'}}>
      <Header />
      <StyledContainer >
        {children}
        <Grid container>
          {product && (
            <Grid item xs={12} md={4}>
              <CustomersCard
                category={product.category}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                id={product.id}
                onRemoveCustomer={() => handleRemoveCustomer(product.id)}
                />
            </Grid>
          )}
        </Grid>
      </StyledContainer>
          {!loading && <Footer style={{ position: 'absolute', bottom: 0 }} />}
    </div>
  )
}

export default Cart;
