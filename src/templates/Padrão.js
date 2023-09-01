import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from "../partials/Header";
import Cards from '../componentes/Cards';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 15,
}));

const FixedSizeCards = ({ children }) => (
  <Grid container justifyContent="center" alignItems="center">
    {children}
  </Grid>
);

const Padrão = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const data = response.data;
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ background: '#e0e0e0' }}>
      <Header />
      <StyledContainer style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        {children}
        <FixedSizeCards>
          {products.map(item => (
            <Grid item xs={12} md={4} style={{ width: '400px', height: '650px', padding: '15px', marginBottom:'60px' }} key={item.id}>
              <Cards
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            </Grid>
          ))}
        </FixedSizeCards>
      </StyledContainer>
    </div>
  );
};

export default Padrão;