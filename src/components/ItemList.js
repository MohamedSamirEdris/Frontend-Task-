import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ItemCard from './ItemCard';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const MainPaper = styled(Paper)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});
const Header = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

const ItemList = () => {
  const { items, status } = useSelector((state) => state.products);

  return (
    <MainPaper>
      <Header>
        <h1>Featured Products</h1>
      </Header>
      {status === 'success' ? (
        <>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </Box>
        </>
      ) : status === 'pending' ? (
        <Typography>Loading...</Typography>
      ) : (
        <Typography>Unexpected error occured...</Typography>
      )}
    </MainPaper>
  );
};

export default ItemList;
